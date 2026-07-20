function generateCV() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    doc.setProperties({
        title: 'Panagiotis Zermpinos CV',
        author: 'Panagiotis Zermpinos',
        creator: 'Panagiotis Zermpinos',
        producer: ''
    });

    const PORTFOLIO = { label: 'zermpinos.vercel.app', url: 'https://zermpinos.vercel.app' };

    const PAGE_W = 210;
    const PAGE_H = 297;
    const MARGIN_L = 15;
    const MARGIN_R = 15;
    const MARGIN_TOP = 15;
    const MARGIN_BOT = 15;
    const CONTENT_W = PAGE_W - MARGIN_L - MARGIN_R;
    const MAX_Y = PAGE_H - MARGIN_BOT;

    let y = MARGIN_TOP;
    let page = 1;
    function checkPage(needed) {
        if (y + needed > MAX_Y) {
            doc.addPage();
            page++;
            y = MARGIN_TOP;
        }
        return true;
    }

    function drawLine() {
        doc.setDrawColor(180);
        doc.setLineWidth(0.3);
        doc.line(MARGIN_L, y, PAGE_W - MARGIN_R, y);
        y += 3;
    }

    function addSectionTitle(title) {
        if (!checkPage(10)) return false;
        y += 2;
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(0);
        doc.text(title.toUpperCase(), MARGIN_L, y);
        y += 1;
        drawLine();
        return true;
    }

    function addText(text, opts = {}) {
        const size = opts.size || 9;
        const style = opts.bold ? 'bold' : 'normal';
        const indent = opts.indent || 0;
        const maxW = opts.maxW || (CONTENT_W - indent);

        doc.setFont('Helvetica', style);
        doc.setFontSize(size);
        doc.setTextColor(opts.color || 50);

        const lines = doc.splitTextToSize(text, maxW);
        const lineH = size * 0.45;
        const totalH = lines.length * lineH;

        if (!checkPage(totalH)) return false;

        doc.text(lines, MARGIN_L + indent, y);
        y += totalH;
        return true;
    }

    // drawLink: renders text in link style (deep blue + thin underline) and registers
    // a clickable area. Caller must set font/size before calling; color is restored to
    // black (0,0,0) after the call. Returns the rendered text width.
    function drawLink(text, x, yr, url) {
        doc.setTextColor(10, 90, 170);
        doc.text(text, x, yr);
        const w = doc.getTextWidth(text);
        doc.setDrawColor(10, 90, 170);
        doc.setLineWidth(0.18);
        doc.line(x, yr + 0.6, x + w, yr + 0.6);
        doc.link(x, yr - 4, w, 5, { url });
        doc.setTextColor(0);
        doc.setDrawColor(0);
        return w;
    }

    function addBullet(text, indent) {
        indent = indent || 4;
        const size = 9;
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(size);
        doc.setTextColor(50);

        const bulletX = MARGIN_L + indent - 2.5;
        const textX = MARGIN_L + indent;
        const maxW = CONTENT_W - indent;
        const lines = doc.splitTextToSize(text, maxW);
        const lineH = size * 0.45;
        const totalH = lines.length * lineH;

        if (!checkPage(totalH)) return false;

        doc.text('-', bulletX, y);
        doc.text(lines, textX, y);
        y += totalH + 0.5;
        return true;
    }

    // === HEADER ===
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(0);
    doc.text('PANAGIOTIS ZERMPINOS', MARGIN_L, y);
    y += 5;

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(60);
    doc.text('Technical Operations Engineer, moving into Cybersecurity', MARGIN_L, y);
    y += 5;

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    const sep = '  |  ';
    let cx = MARGIN_L;
    cx += drawLink('p.zermpinos@proton.me', cx, y, 'mailto:p.zermpinos@proton.me');
    doc.setTextColor(80); doc.text(sep, cx, y); cx += doc.getTextWidth(sep);
    doc.setTextColor(80); doc.text('Athens, Greece', cx, y); cx += doc.getTextWidth('Athens, Greece');
    doc.setTextColor(80); doc.text(sep, cx, y); cx += doc.getTextWidth(sep);
    cx += drawLink('linkedin.com/in/panagiotiszermpinos', cx, y, 'https://www.linkedin.com/in/panagiotiszermpinos/');
    doc.setTextColor(80); doc.text(sep, cx, y); cx += doc.getTextWidth(sep);
    drawLink('github.com/zermpinos', cx, y, 'https://github.com/zermpinos');

    y += 4;

    // Languages + portfolio URL (right-aligned on same baseline)
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(60);
    doc.text('Languages: Greek (Native), English (C2 Proficient), German (B1 Intermediate)', MARGIN_L, y);
    const portW = doc.getTextWidth(PORTFOLIO.label);
    drawLink(PORTFOLIO.label, PAGE_W - MARGIN_R - portW, y, PORTFOLIO.url);
    y += 3;

    drawLine();

    // === SUMMARY ===
    if (addSectionTitle('Professional Summary')) {
        addText(
            'Technical Operations Engineer with 3+ years maintaining critical law enforcement infrastructure nationwide. ' +
            'Sole technical owner of 50+ forensic instruments across Greece, delivering 99.5% uptime on a ~\u20AC3M project. ' +
            'Bringing operational discipline, security-critical experience, and ISO compliance expertise into cybersecurity and IT operations roles.',
            { size: 9, color: 40 }
        );
        y += 2;
    }

    // === EXPERIENCE ===
    if (addSectionTitle('Experience')) {
        // Job 1
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(0);
        if (checkPage(5)) {
            doc.text('Application & Technical Support Engineer', MARGIN_L, y);
            doc.setFont('Helvetica', 'normal');
            doc.setFontSize(9);
            doc.setTextColor(80);
            doc.text('Sep 2023 - Present', PAGE_W - MARGIN_R, y, { align: 'right' });
            y += 4;
            addText('bioMDx IntelligenceX & SafeBlood', { size: 9, color: 80 });
            y += 1;
        }

        addBullet('Sole technical owner of 50+ criminal photography instruments nationwide, maintaining 99.5% uptime with same-day incident response');
        addBullet('Rapid triage and resolution (L1/L2) for security-critical systems in law enforcement environments');
        addBullet('Owned Anti-Bribery Policy and maintained multi-ISO standard compliance (ISO 27001, 9001, 13485)');
        addBullet('Hardware lifecycle management and logistics coordination for nationwide field deployments; vendor sourcing and procurement');
        addBullet('Primary technical liaison for law enforcement clients and dealer partners; trained 250+ police officers on forensic instrumentation; prepared product collateral and provided pre-sales support');
        y += 2;

        // Job 2
        if (checkPage(12)) {
            doc.setFont('Helvetica', 'bold');
            doc.setFontSize(10);
            doc.setTextColor(0);
            doc.text('Mechanical Engineer, External Partner', MARGIN_L, y);
            doc.setFont('Helvetica', 'normal');
            doc.setFontSize(9);
            doc.setTextColor(80);
            doc.text('Dec 2022 - Feb 2023', PAGE_W - MARGIN_R, y, { align: 'right' });
            y += 4;
            addText('Hellenic Electricity Distribution Network Operator (HEDNO)', { size: 9, color: 80 });
            y += 1;
        }
        addBullet('Office-based investigation of electricity theft cases across Greece\'s national distribution network. Processed around 20 cases per day (roughly 3x the team average) in an 8-person team, identifying theft sources and losses across residential and commercial accounts.');
        y += 2;

        // Job 3
        if (checkPage(12)) {
            doc.setFont('Helvetica', 'bold');
            doc.setFontSize(10);
            doc.setTextColor(0);
            doc.text('Electrical Systems Technician', MARGIN_L, y);
            doc.setFont('Helvetica', 'normal');
            doc.setFontSize(9);
            doc.setTextColor(80);
            doc.text('Jun 2022 - Dec 2022', PAGE_W - MARGIN_R, y, { align: 'right' });
            y += 4;
            addText('Rutech S.A.', { size: 9, color: 80 });
            y += 1;
        }
        addBullet('Executed UPS, PV, and electrical automation installations across 9 industry verticals (Defense, Maritime, Healthcare, Energy, Telecom and more) under ISO 14001 and ISO 45001 compliance. Delivered projects for enterprise clients including Cisco and Cordia in a 5-person team reporting directly to CTO.');
        y += 2;
    }

    // === EDUCATION ===
    if (addSectionTitle('Education')) {
        if (checkPage(12)) {
            doc.setFont('Helvetica', 'bold');
            doc.setFontSize(10);
            doc.setTextColor(0);
            doc.text("Integrated Master's in Mechanical Engineering", MARGIN_L, y);
            doc.setFont('Helvetica', 'normal');
            doc.setFontSize(9);
            doc.setTextColor(80);
            doc.text('2017 - 2023', PAGE_W - MARGIN_R, y, { align: 'right' });
            y += 4;
            addText('University of West Attica, 300 ECTS', { size: 9, color: 80 });
            y += 1;
        }
        addBullet('Thesis: Energy performance evaluation of solar-assisted heat pump with PVT collectors for residential dwellings in Greece. Combined TRNSYS thermal simulation with MATLAB data analysis.');
        y += 2;
    }

    // === SKILLS ===
    if (addSectionTitle('Technical Skills')) {
        addText('IT Operations & Support:', { size: 9, bold: true, color: 30 });
        y += 1;
        addText('Field Systems Maintenance, L1/L2 Technical Support, Endpoint & Linux Administration, Incident Triage & Response', { size: 9, color: 50, indent: 4 });
        y += 1;

        addText('Development & Automation:', { size: 9, bold: true, color: 30 });
        y += 1;
        addText('Python, MATLAB, Git, Data Analysis', { size: 9, color: 50, indent: 4 });
        y += 1;

        addText('Quality & Compliance:', { size: 9, bold: true, color: 30 });
        y += 1;
        addText('ISO 27001, ISO 9001, ISO 13485, ISO 14001, ISO 45001', { size: 9, color: 50, indent: 4 });
        y += 2;
    }

    // === PROJECTS ===
    if (addSectionTitle('Projects')) {
        // boot.dev -JUN 2026
        checkPage(16);
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(0);
        doc.text('Boot.dev - Backend Developer Path', MARGIN_L, y);
        const bootTx = MARGIN_L + doc.getTextWidth('Boot.dev - Backend Developer Path') + 2;
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8.5);
        drawLink('(link)', bootTx, y, 'https://www.boot.dev/u/zermpinos');
        doc.setTextColor(100);
        doc.text('[ACTIVE]', PAGE_W - MARGIN_R, y, { align: 'right' });
        y += 3.5;
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text('JUN 2026 - PRESENT', MARGIN_L, y);
        y += 3.5;
        addText('Working through the Back-end Developer Path (Python & Go). Completed Python (fundamentals + OOP), Linux, and Git with hands-on projects (a Python AI agent, Bookbot, and an Asteroids game). Currently working through Go, functional programming, and data structures & algorithms.', { size: 8.5, color: 50 });
        y += 2;

        // Pi-hole -APR 2026
        checkPage(16);
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(0);
        doc.text('Network-Wide Ad Blocking & Privacy Protection', MARGIN_L, y);
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(100);
        doc.text('[LIVE]', PAGE_W - MARGIN_R, y, { align: 'right' });
        y += 3.5;
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text('APR 2026 - PRESENT', MARGIN_L, y);
        y += 3.5;
        addText('Docker-based Pi-hole with DHCP auto-routing, 4 curated blocklists, and 6 device-specific policies, protecting 5+ devices from 350k+ malicious domains with zero per-device config.', { size: 8.5, color: 50 });
        y += 2;

        // AK -MAR 2026
        checkPage(22);
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(0);
        doc.text('Armani Katehano Club Platform', MARGIN_L, y);
        const akTx = MARGIN_L + doc.getTextWidth('Armani Katehano Club Platform') + 2;
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8.5);
        drawLink('(link)', akTx, y, 'https://armani-katehano.com');
        doc.setTextColor(100);
        doc.text('[LIVE]', PAGE_W - MARGIN_R, y, { align: 'right' });
        y += 3.5;
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text('MAR 2026 - PRESENT', MARGIN_L, y);
        y += 3.5;
        addText('Full-stack web application for a competitive basketball club in active play. The public dashboard tracks 13 players across PPG, RPG, APG, and efficiency ratings, with live game results, standings, season-vs-all-time toggles, and a team leaderboard. Backed by a multi-portal architecture: an admin portal for full CRUD data management and a coach portal for roster announcements and match email distribution.', { size: 8.5, color: 50 });
        y += 2;

        // Linux -MAR 2025 (checkPage sized for full entry to avoid mid-entry page split)
        checkPage(20);
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(0);
        doc.text('Personal Linux Security & Hardening', MARGIN_L, y);
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(100);
        doc.text('[ACTIVE]', PAGE_W - MARGIN_R, y, { align: 'right' });
        y += 3.5;
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text('MAR 2025 - PRESENT', MARGIN_L, y);
        y += 3.5;
        addText('Daily-drives Linux as primary OS with regular Lynis security audits. Applied hardening to personal machines covering common attack surfaces.', { size: 8.5, color: 50 });
        y += 2;

        // HTB + TryHackMe -FEB 2025
        checkPage(16);
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(0);
        doc.text('Security Labs (learning) - HackTheBox & TryHackMe', MARGIN_L, y);
        let htbTx = MARGIN_L + doc.getTextWidth('Security Labs (learning) - HackTheBox & TryHackMe') + 2;
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8.5);
        htbTx += drawLink('(HTB)', htbTx, y, 'https://profile.hackthebox.com/profile/019d715f-7a77-7056-a7c5-88f6a3490217');
        doc.setTextColor(150); doc.text('  ', htbTx, y); htbTx += doc.getTextWidth('  ');
        drawLink('(THM)', htbTx, y, 'https://tryhackme.com/p/Deadalus');
        doc.setTextColor(100);
        doc.text('[ACTIVE]', PAGE_W - MARGIN_R, y, { align: 'right' });
        y += 3.5;
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text('FEB 2025 - PRESENT', MARGIN_L, y);
        y += 3.5;
        addText('Working through beginner-level HackTheBox machines and TryHackMe rooms to build practical security fundamentals: enumeration, privilege escalation, and working with known exploits.', { size: 8.5, color: 50 });
        y += 2;
    }

    doc.save('Panagiotis_Zermpinos_CV.pdf');
}

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('downloadCvBtn');
    if (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            generateCV();
        });
    }
});
