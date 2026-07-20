(function () {
    'use strict';

    var data = window.CV_DATA;
    var canvas = document.getElementById('world');
    var ctx = canvas.getContext('2d');

    var COLOR = {
        floor: '#0b0f16',
        floorAlt: '#0d121b',
        grid: '#1d2938',
        gridLit: '#243448',
        wall: '#161d28',
        wallTop: '#222d3c',
        wallLed: '#00d4ff',
        panel: '#121a24',
        screen: '#060a10',
        text: '#e6e8eb',
        muted: '#9ba3b4',
        cyan: '#00d4ff',
        green: '#00ff88',
        shadow: 'rgba(0,0,0,0.45)'
    };

    var SPRITE_COLORS = {
        h: '#262c35', s: '#e4b892', S: '#c89970',
        g: '#00ff88', j: '#164654', J: '#00d4ff',
        p: '#1b2430', b: '#0b0f15'
    };
    var UPPER = [
        '    hhhh    ',
        '   hhhhhh   ',
        '   hssssh   ',
        '   hggggh   ',
        '   hssssh   ',
        '   hhhhhh   ',
        '     SS     ',
        '   jjjjjj   ',
        '   jjJJjj   ',
        '  sjjJJjjs  ',
        '  sjjjjjjs  ',
        '   bbggbb   '
    ];
    var UP_UPPER = [
        '    hhhh    ',
        '   hhhhhh   ',
        '   hhhhhh   ',
        '   hhhhhh   ',
        '   hhhhhh   ',
        '   hhhhhh   ',
        '     hh     ',
        '   jjjjjj   ',
        '   jjJJjj   ',
        '  sjjJJjjs  ',
        '  sjjjjjjs  ',
        '   bbjjbb   '
    ];
    var SIDE_UPPER = [
        '    hhhh    ',
        '   hhhhhh   ',
        '   hhssss   ',
        '   hhsggS   ',
        '   hhssss   ',
        '   hhhhhh   ',
        '    SS      ',
        '   jjjjjj   ',
        '   jjjjjJ   ',
        '   jjjjJjs  ',
        '   jjjjjjs  ',
        '   bbggbb   '
    ];
    var LEG_A = ['   pp  pp   ', '   pp  pp   ', '   pp  pp   ', '   bb  bb   '];
    var LEG_B = ['   pp  pp   ', '  pp    pp  ', '  pp    pp  ', '  bb    bb  '];
    var DOWN_A = UPPER.concat(LEG_A);
    var DOWN_B = UPPER.concat(LEG_B);
    var UP_A = UP_UPPER.concat(LEG_A);
    var UP_B = UP_UPPER.concat(LEG_B);
    var SIDE_A = SIDE_UPPER.concat(LEG_A);
    var SIDE_B = SIDE_UPPER.concat(LEG_B);

    var MAP = [
        '########################',
        '#......................#',
        '#......................#',
        '#......................#',
        '#......................#',
        '#.....#...........#....#',
        '#......................#',
        '#......................#',
        '#......................#',
        '#......................#',
        '#.....#...........#....#',
        '#......................#',
        '#......................#',
        '#......................#',
        '#......................#',
        '########################'
    ];
    var COLS = MAP[0].length;
    var ROWS = MAP.length;
    var TILE = 40;
    var WORLD_W = COLS * TILE;
    var WORLD_H = ROWS * TILE;

    var STATIONS = [
        { id: 'about', tx: 11, ty: 2, w: 2, h: 2, color: COLOR.cyan },
        { id: 'experience', tx: 3, ty: 2, w: 2, h: 2, color: COLOR.green },
        { id: 'skills', tx: 19, ty: 2, w: 2, h: 2, color: COLOR.cyan },
        { id: 'education', tx: 3, ty: 12, w: 2, h: 2, color: COLOR.green },
        { id: 'contact', tx: 11, ty: 12, w: 2, h: 2, color: COLOR.green },
        { id: 'projects', tx: 19, ty: 12, w: 2, h: 2, color: COLOR.cyan }
    ];
    STATIONS.forEach(function (s) {
        var d = data.stations[s.id];
        s.label = d.label;
        s.glyph = d.glyph;
    });

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var coarse = window.matchMedia('(pointer: coarse)').matches;
    var promptLabel = coarse ? 'TAP' : 'E';

    var view = { scale: 1, offX: 0, offY: 0, dpr: 1 };
    var player = { x: 11.5 * TILE, y: 7.5 * TILE, w: TILE * 0.62, h: TILE * 0.5, vx: 0, vy: 0, speed: TILE * 5.4, facing: 'down', walk: 0 };
    var input = { up: false, down: false, left: false, right: false };
    var active = null;
    var paused = false;
    var boot = 1;

    function hash(a, b) {
        var n = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453;
        return n - Math.floor(n);
    }

    var particles = [];
    for (var i = 0; i < 26; i++) {
        particles.push({
            x: hash(i, 1) * WORLD_W,
            y: hash(i, 2) * WORLD_H,
            vx: (hash(i, 3) - 0.5) * 6,
            vy: -4 - hash(i, 4) * 8,
            r: 0.6 + hash(i, 5) * 1.4,
            a: 0.12 + hash(i, 6) * 0.22,
            c: hash(i, 7) > 0.5 ? COLOR.cyan : COLOR.green
        });
    }

    var bg = document.createElement('canvas');
    bg.width = WORLD_W;
    bg.height = WORLD_H;
    (function paintBackground() {
        var b = bg.getContext('2d');
        for (var ty = 0; ty < ROWS; ty++) {
            for (var tx = 0; tx < COLS; tx++) {
                b.fillStyle = (tx + ty) % 2 ? COLOR.floorAlt : COLOR.floor;
                b.fillRect(tx * TILE, ty * TILE, TILE, TILE);
            }
        }
        b.strokeStyle = COLOR.grid;
        b.lineWidth = 1;
        for (var gx = 0; gx <= COLS; gx++) {
            b.beginPath();
            b.moveTo(gx * TILE + 0.5, 0);
            b.lineTo(gx * TILE + 0.5, WORLD_H);
            b.stroke();
        }
        for (var gy = 0; gy <= ROWS; gy++) {
            b.beginPath();
            b.moveTo(0, gy * TILE + 0.5);
            b.lineTo(WORLD_W, gy * TILE + 0.5);
            b.stroke();
        }
        for (var wy = 0; wy < ROWS; wy++) {
            for (var wx = 0; wx < COLS; wx++) {
                if (MAP[wy].charAt(wx) !== '#') continue;
                var x = wx * TILE;
                var y = wy * TILE;
                b.fillStyle = COLOR.wall;
                b.fillRect(x, y, TILE, TILE);
                b.fillStyle = COLOR.wallTop;
                b.fillRect(x, y, TILE, 4);
                b.fillStyle = 'rgba(0,0,0,0.35)';
                b.fillRect(x, y + TILE - 3, TILE, 3);
                b.fillStyle = COLOR.wallLed;
                for (var k = 0; k < 3; k++) {
                    if (hash(wx * 7 + k, wy * 3) > 0.62) {
                        b.globalAlpha = 0.5 + hash(k, wx + wy) * 0.4;
                        b.fillRect(x + 6 + k * 10, y + 12 + (k % 2) * 12, 6, 3);
                    }
                }
                b.globalAlpha = 1;
            }
        }
    })();

    function resize() {
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var cw = canvas.clientWidth;
        var ch = canvas.clientHeight;
        canvas.width = Math.round(cw * dpr);
        canvas.height = Math.round(ch * dpr);
        view.scale = Math.min(cw / WORLD_W, ch / WORLD_H);
        view.offX = (cw - WORLD_W * view.scale) / 2;
        view.offY = (ch - WORLD_H * view.scale) / 2;
        view.dpr = dpr;
    }

    function tileSolid(tx, ty) {
        if (tx < 0 || ty < 0 || tx >= COLS || ty >= ROWS) return true;
        return MAP[ty].charAt(tx) === '#';
    }

    function rectHitsStation(x, y, w, h, pad) {
        for (var i = 0; i < STATIONS.length; i++) {
            var s = STATIONS[i];
            var sx = s.tx * TILE - pad;
            var sy = s.ty * TILE - pad;
            var sw = s.w * TILE + pad * 2;
            var sh = s.h * TILE + pad * 2;
            if (x < sx + sw && x + w > sx && y < sy + sh && y + h > sy) return s;
        }
        return null;
    }

    function blocked(x, y, w, h) {
        var minTx = Math.floor(x / TILE);
        var maxTx = Math.floor((x + w - 0.001) / TILE);
        var minTy = Math.floor(y / TILE);
        var maxTy = Math.floor((y + h - 0.001) / TILE);
        for (var ty = minTy; ty <= maxTy; ty++) {
            for (var tx = minTx; tx <= maxTx; tx++) {
                if (tileSolid(tx, ty)) return true;
            }
        }
        return rectHitsStation(x, y, w, h, 0) !== null;
    }

    function update(dt, now) {
        var dx = 0, dy = 0;
        if (!paused) {
            if (input.left) dx -= 1;
            if (input.right) dx += 1;
            if (input.up) dy -= 1;
            if (input.down) dy += 1;
        }
        if (dx !== 0 && dy !== 0) {
            var inv = 1 / Math.sqrt(2);
            dx *= inv;
            dy *= inv;
        }
        var ease = Math.min(1, dt * 14);
        player.vx += (dx * player.speed - player.vx) * ease;
        player.vy += (dy * player.speed - player.vy) * ease;
        if (dx !== 0 || dy !== 0) {
            if (Math.abs(dy) >= Math.abs(dx)) player.facing = dy < 0 ? 'up' : 'down';
            else player.facing = dx < 0 ? 'left' : 'right';
        }

        var nx = player.x + player.vx * dt;
        if (!blocked(nx, player.y, player.w, player.h)) player.x = nx; else player.vx = 0;
        var ny = player.y + player.vy * dt;
        if (!blocked(player.x, ny, player.w, player.h)) player.y = ny; else player.vy = 0;

        var moving = Math.abs(player.vx) + Math.abs(player.vy) > 12;
        player.walk += dt * (moving ? 9 : 0);
        if (!moving) player.walk = 0;

        active = rectHitsStation(player.x, player.y, player.w, player.h, TILE * 0.55);

        if (!reduceMotion) {
            for (var i = 0; i < particles.length; i++) {
                var pt = particles[i];
                pt.x += pt.vx * dt;
                pt.y += pt.vy * dt;
                if (pt.y < -4) { pt.y = WORLD_H + 4; pt.x = hash(now * 0.001 + i, i) * WORLD_W; }
                if (pt.x < -4) pt.x = WORLD_W + 4;
                if (pt.x > WORLD_W + 4) pt.x = -4;
            }
        }
        if (boot > 0) boot = Math.max(0, boot - dt / 0.7);
    }

    function roundRect(c, x, y, w, h, r) {
        if (c.roundRect) { c.beginPath(); c.roundRect(x, y, w, h, r); return; }
        c.beginPath();
        c.moveTo(x + r, y);
        c.arcTo(x + w, y, x + w, y + h, r);
        c.arcTo(x + w, y + h, x, y + h, r);
        c.arcTo(x, y + h, x, y, r);
        c.arcTo(x, y, x + w, y, r);
        c.closePath();
    }

    function drawSprite(frame, cx, feetY, px, flip) {
        var rows = frame.length;
        var cols = frame[0].length;
        var startX = cx - (cols * px) / 2;
        var startY = feetY - rows * px;
        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                var ch = frame[r].charAt(flip ? cols - 1 - c : c);
                var col = SPRITE_COLORS[ch];
                if (!col) continue;
                ctx.fillStyle = col;
                ctx.fillRect(Math.floor(startX + c * px), Math.floor(startY + r * px), Math.ceil(px), Math.ceil(px));
            }
        }
    }

    function drawStation(s, now) {
        var x = s.tx * TILE;
        var y = s.ty * TILE;
        var w = s.w * TILE;
        var h = s.h * TILE;
        var on = active && active.id === s.id;
        var pulse = reduceMotion ? 0.85 : 0.7 + 0.3 * (0.5 + 0.5 * Math.sin(now / 320));

        ctx.fillStyle = COLOR.shadow;
        ctx.beginPath();
        ctx.ellipse(x + w / 2, y + h - 4, w * 0.42, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = COLOR.panel;
        roundRect(ctx, x + 4, y + 4, w - 8, h - 8, 6);
        ctx.fill();
        ctx.fillStyle = COLOR.screen;
        roundRect(ctx, x + 9, y + 9, w - 18, h - 26, 4);
        ctx.fill();

        ctx.save();
        ctx.shadowColor = s.color;
        ctx.shadowBlur = on ? 16 : 8;
        ctx.fillStyle = s.color;
        ctx.font = '600 24px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.globalAlpha = on ? 1 : 0.92;
        ctx.fillText(s.glyph, x + w / 2, y + h / 2 - 5);
        ctx.restore();

        ctx.fillStyle = COLOR.text;
        ctx.font = '600 9px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(s.label.toUpperCase(), x + w / 2, y + h - 11);

        ctx.lineWidth = on ? 2.5 : 1.5;
        ctx.strokeStyle = s.color;
        ctx.globalAlpha = on ? pulse : 0.7;
        roundRect(ctx, x + 4, y + 4, w - 8, h - 8, 6);
        ctx.stroke();
        ctx.globalAlpha = 1;

        if (on) {
            var bob = reduceMotion ? 0 : Math.sin(now / 220) * 2;
            var bx = x + w / 2;
            var by = y - 10 + bob;
            ctx.font = '700 11px "JetBrains Mono", monospace';
            var tw = ctx.measureText(promptLabel).width + 14;
            ctx.fillStyle = s.color;
            roundRect(ctx, bx - tw / 2, by - 15, tw, 19, 4);
            ctx.fill();
            ctx.fillStyle = COLOR.screen;
            ctx.fillText(promptLabel, bx, by - 5);
            ctx.beginPath();
            ctx.moveTo(bx - 4, by + 4);
            ctx.lineTo(bx + 4, by + 4);
            ctx.lineTo(bx, by + 8);
            ctx.closePath();
            ctx.fillStyle = s.color;
            ctx.fill();
        }
    }

    function render(now) {
        ctx.setTransform(view.dpr, 0, 0, view.dpr, 0, 0);
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        ctx.save();
        ctx.translate(view.offX, view.offY);
        ctx.scale(view.scale, view.scale);

        ctx.drawImage(bg, 0, 0);

        for (var i = 0; i < particles.length; i++) {
            var pt = particles[i];
            ctx.globalAlpha = pt.a;
            ctx.fillStyle = pt.c;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;

        STATIONS.forEach(function (s) { drawStation(s, now); });

        var px = (TILE * 1.15) / 16;
        var moving = Math.abs(player.vx) + Math.abs(player.vy) > 12;
        var step = moving && Math.floor(player.walk) % 2;
        var frame;
        if (player.facing === 'up') frame = step ? UP_B : UP_A;
        else if (player.facing === 'left' || player.facing === 'right') frame = step ? SIDE_B : SIDE_A;
        else frame = step ? DOWN_B : DOWN_A;
        var cx = player.x + player.w / 2;
        var bobY = moving ? -Math.abs(Math.sin(player.walk * Math.PI)) * 2 : (reduceMotion ? 0 : Math.sin(now / 600) * 0.8);
        var feetY = player.y + player.h + 4 + bobY;

        ctx.fillStyle = COLOR.shadow;
        ctx.beginPath();
        ctx.ellipse(cx, player.y + player.h + 4, player.w * 0.55, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        drawSprite(frame, cx, feetY, px, player.facing === 'left');

        ctx.restore();

        if (boot > 0) {
            ctx.setTransform(view.dpr, 0, 0, view.dpr, 0, 0);
            ctx.globalAlpha = boot;
            ctx.fillStyle = '#05070a';
            ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            ctx.globalAlpha = 1;
        }

        requestAnimationFrame(loop);
    }

    var last = 0;
    function loop(now) {
        if (!last) last = now;
        var dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        update(dt, now);
        render(now);
    }

    // panel
    var backdrop = document.getElementById('panelBackdrop');
    var panelBody = document.getElementById('panelBody');
    var panelClose = document.getElementById('panelClose');

    function el(tag, cls, text) {
        var e = document.createElement(tag);
        if (cls) e.className = cls;
        if (text != null) e.textContent = text;
        return e;
    }

    function linkEl(href, text) {
        var a = el('a', null, text);
        a.href = href;
        if (href.indexOf('http') === 0) {
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
        }
        return a;
    }

    function renderBlock(b, frag) {
        if (b.t === 'p') {
            frag.appendChild(el('p', null, b.text));
        } else if (b.t === 'stats') {
            var grid = el('div', 'pv-stats');
            b.items.forEach(function (it) {
                var cell = el('div', 'pv-stat');
                cell.appendChild(el('span', 'n', it.n));
                cell.appendChild(el('span', 'l', it.l));
                grid.appendChild(cell);
            });
            frag.appendChild(grid);
        } else if (b.t === 'entry') {
            var entry = el('div', 'pv-entry');
            entry.appendChild(el('div', 'role', b.title));
            entry.appendChild(el('div', 'org', b.sub));
            entry.appendChild(el('div', 'date', b.date));
            if (b.bullets) {
                var ul = el('ul');
                b.bullets.forEach(function (li) { ul.appendChild(el('li', null, li)); });
                entry.appendChild(ul);
            }
            frag.appendChild(entry);
        } else if (b.t === 'group') {
            var g = el('div', 'pv-group');
            g.appendChild(el('h3', null, b.title));
            var tags = el('div', 'pv-tags');
            b.tags.forEach(function (t) { tags.appendChild(el('span', 'pv-tag', t)); });
            g.appendChild(tags);
            frag.appendChild(g);
        } else if (b.t === 'project') {
            var p = el('div', 'pv-project');
            var head = el('div', 'head');
            head.appendChild(el('span', 'title', b.title));
            head.appendChild(el('span', 'status', b.status));
            p.appendChild(head);
            p.appendChild(el('div', 'date', b.date));
            p.appendChild(el('div', 'desc', b.desc));
            if (b.tech) {
                var tt = el('div', 'pv-tags');
                b.tech.forEach(function (t) { tt.appendChild(el('span', 'pv-tag', t)); });
                p.appendChild(tt);
            }
            if (b.url) p.appendChild(linkEl(b.url, 'View ->'));
            frag.appendChild(p);
        } else if (b.t === 'contact') {
            var ul2 = el('ul', 'pv-contact');
            b.items.forEach(function (it) {
                var li = el('li');
                li.appendChild(el('span', 'k', it.label));
                li.appendChild(it.url ? linkEl(it.url, it.value) : el('span', 'v', it.value));
                ul2.appendChild(li);
            });
            frag.appendChild(ul2);
        } else if (b.t === 'langs') {
            var wrap = el('div', 'pv-langs');
            b.items.forEach(function (it) {
                var l = el('div', 'pv-lang');
                l.appendChild(el('b', null, it.name + ' '));
                l.appendChild(el('span', null, it.level));
                wrap.appendChild(l);
            });
            frag.appendChild(wrap);
        }
    }

    function openStation(id) {
        var st = data.stations[id];
        if (!st) return;
        while (panelBody.firstChild) panelBody.removeChild(panelBody.firstChild);
        var title = el('h2', 'panel-title', st.label);
        title.id = 'panelTitle';
        panelBody.appendChild(title);
        var frag = document.createDocumentFragment();
        st.blocks.forEach(function (b) { renderBlock(b, frag); });
        panelBody.appendChild(frag);
        backdrop.classList.add('open');
        paused = true;
        input.up = input.down = input.left = input.right = false;
        panelClose.focus();
    }

    function closePanel() {
        backdrop.classList.remove('open');
        paused = false;
        canvas.focus();
    }

    panelClose.addEventListener('click', closePanel);
    backdrop.addEventListener('click', function (e) {
        if (e.target === backdrop) closePanel();
    });

    // input
    var KEYMAP = {
        KeyW: 'up', ArrowUp: 'up',
        KeyS: 'down', ArrowDown: 'down',
        KeyA: 'left', ArrowLeft: 'left',
        KeyD: 'right', ArrowRight: 'right'
    };
    window.addEventListener('keydown', function (e) {
        if (e.code === 'Escape' && backdrop.classList.contains('open')) {
            closePanel();
            return;
        }
        if (backdrop.classList.contains('open')) return;
        var ae = document.activeElement;
        var onControl = ae && (ae.tagName === 'BUTTON' || ae.tagName === 'A');
        if (KEYMAP[e.code]) {
            input[KEYMAP[e.code]] = true;
            e.preventDefault();
        } else if (e.code === 'KeyE') {
            if (active) { openStation(active.id); e.preventDefault(); }
        } else if ((e.code === 'Enter' || e.code === 'Space') && !onControl) {
            if (active) { openStation(active.id); e.preventDefault(); }
        }
    });
    window.addEventListener('keyup', function (e) {
        if (KEYMAP[e.code]) input[KEYMAP[e.code]] = false;
    });

    function bindHold(elm, dir) {
        function on(e) { input[dir] = true; e.preventDefault(); }
        function off() { input[dir] = false; }
        elm.addEventListener('pointerdown', on);
        elm.addEventListener('pointerup', off);
        elm.addEventListener('pointerleave', off);
        elm.addEventListener('pointercancel', off);
    }
    document.querySelectorAll('[data-dir]').forEach(function (b) {
        bindHold(b, b.getAttribute('data-dir'));
    });
    var actionBtn = document.getElementById('actionBtn');
    if (actionBtn) {
        actionBtn.addEventListener('click', function () {
            if (active) openStation(active.id);
        });
    }

    window.addEventListener('resize', resize);
    resize();
    canvas.focus();
    requestAnimationFrame(loop);
})();
