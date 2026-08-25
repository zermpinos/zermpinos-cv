const CV = {
    en: {
        file: 'Panagiotis_Zermpinos_CV.pdf',
        docTitle: 'Panagiotis Zermpinos CV',
        name: 'PANAGIOTIS ZERMPINOS',
        role: 'Technical Operations Engineer, moving into Cybersecurity',
        location: 'Athens, Greece',
        languages: 'Languages: Greek (Native), English (C2 Proficient), German (B1 Intermediate)',
        error: 'The CV could not be generated. Please check your connection and try again.',
        sections: {
            summary: 'PROFESSIONAL SUMMARY',
            experience: 'EXPERIENCE',
            education: 'EDUCATION',
            skills: 'TECHNICAL SKILLS',
            projects: 'PROJECTS'
        },
        summary: 'Technical Operations Engineer with 3 years maintaining critical law enforcement infrastructure nationwide. ' +
            'Sole technical owner of 50+ forensic instruments across Greece, delivering 99.5% uptime on a ~€3M project. ' +
            'Bringing operational discipline, security-critical experience, and ISO 27001, 9001 and 13485 compliance expertise into cybersecurity and IT operations roles, backed by a self-hosted Linux and Docker network security stack built and documented first-hand.',
        jobs: [
            {
                title: 'Application & Technical Support Engineer',
                org: 'bioMDx IntelligenceX & SafeBlood',
                dates: 'Sep 2023 - Aug 2026',
                bullets: [
                    'Sole technical owner of 50+ criminal photography instruments nationwide, maintaining 99.5% uptime with same-day incident response',
                    'Rapid triage and resolution (L1/L2) for security-critical systems in law enforcement environments',
                    'Owned Anti-Bribery Policy and maintained multi-ISO standard compliance (ISO 27001, 9001, 13485)',
                    'Hardware lifecycle management and logistics coordination for nationwide field deployments; vendor sourcing and procurement',
                    'Primary technical liaison for law enforcement clients and dealer partners; trained 250+ police officers on forensic instrumentation; prepared product collateral and provided pre-sales and after-sales support'
                ]
            },
            {
                title: 'Mechanical Engineer, External Partner',
                org: 'Hellenic Electricity Distribution Network Operator (HEDNO)',
                dates: 'Dec 2022 - Feb 2023',
                bullets: [
                    'Office-based investigation of electricity theft cases across Greece\'s national distribution network. Processed around 20 cases per day (roughly 3x the team average) in an 8-person team, identifying theft sources and losses across residential and commercial accounts.'
                ]
            },
            {
                title: 'Electrical Systems Technician',
                org: 'Rutech S.A.',
                dates: 'Jun 2022 - Dec 2022',
                bullets: [
                    'Executed UPS, PV, and electrical automation installations across 9 industry verticals (Defense, Maritime, Healthcare, Energy, Telecom and more) under ISO 14001 and ISO 45001 compliance. Delivered projects for enterprise clients including Cisco and Cordia in a 5-person team reporting directly to CTO.'
                ]
            }
        ],
        education: {
            title: 'Integrated Master\'s in Mechanical Engineering',
            org: 'University of West Attica, 300 ECTS',
            dates: '2017 - 2023',
            bullets: [
                'Thesis: Energy performance evaluation of solar-assisted heat pump with PVT collectors for residential dwellings in Greece. Combined TRNSYS thermal simulation with MATLAB data analysis.'
            ]
        },
        skills: [
            { label: 'IT Operations & Support:', items: 'Field Systems Maintenance, L1/L2 Technical Support, Endpoint & Linux Administration, Incident Triage & Response' },
            { label: 'Networking & Security:', items: 'Docker, DNS (Pi-hole / unbound), nftables, WireGuard, Network Segmentation, Backup & Disaster Recovery' },
            { label: 'Development & Automation:', items: 'Python, MATLAB, Git, Data Analysis' },
            { label: 'Quality & Compliance:', items: 'ISO 27001, ISO 9001, ISO 13485, ISO 14001, ISO 45001' }
        ],
        projects: [
            {
                title: 'Boot.dev - Backend Developer Path',
                links: [{ label: '(link)', url: 'https://www.boot.dev/u/zermpinos' }],
                status: '[ACTIVE]',
                dates: 'JUN 2026 - PRESENT',
                body: 'Working through the Back-end Developer Path (Python & Go). Completed Python (fundamentals + OOP), Linux, and Git with hands-on projects (a Python AI agent, Bookbot, and an Asteroids game). Currently working through Go, functional programming, data structures & algorithms, and Docker.'
            },
            {
                title: 'Home Network Security & Infrastructure',
                links: [],
                status: '[LIVE]',
                dates: 'APR 2026 - PRESENT',
                body: 'Self-hosted five-container Docker stack on a Raspberry Pi running DNS, VPN and home automation for a 12-device household. Recursive DNSSEC-validating resolver so no upstream provider sees household queries, 362k blocked domains, and both DNS-over-TLS and DNS-over-HTTPS bypass routes closed at the router. Seven IoT devices segmented to zero internet egress with local control intact, after DNS blocking alone left 576k refused cloud callbacks in 30 days. Default-deny nftables host firewall, WireGuard remote access, and pull-only nightly backups. Documented as a 33-note runbook set with a disaster-recovery procedure verified against a rebuild checklist.'
            },
            {
                title: 'Armani Katehano Club Platform',
                links: [{ label: '(link)', url: 'https://armani-katehano.com' }],
                status: '[LIVE]',
                dates: 'MAR 2026 - PRESENT',
                body: 'Full-stack web application for a competitive basketball club in active play. The public dashboard tracks 13 players across PPG, RPG, APG, and efficiency ratings, with live game results, standings, season-vs-all-time toggles, and a team leaderboard. Backed by a multi-portal architecture: an admin portal for full CRUD data management and a coach portal for roster announcements and match email distribution.'
            },
            {
                title: 'Personal Linux Security & Hardening',
                links: [],
                status: '[ACTIVE]',
                dates: 'MAR 2025 - PRESENT',
                body: 'Daily-drives Linux as primary OS with regular Lynis security audits. Applied hardening to personal machines covering common attack surfaces.'
            },
            {
                title: 'Security Labs (learning) - HackTheBox & TryHackMe',
                links: [
                    { label: '(HTB)', url: 'https://profile.hackthebox.com/profile/019d715f-7a77-7056-a7c5-88f6a3490217' },
                    { label: '(THM)', url: 'https://tryhackme.com/p/Deadalus' }
                ],
                status: '[ACTIVE]',
                dates: 'FEB 2025 - PRESENT',
                body: 'Working through beginner-level HackTheBox machines and TryHackMe rooms to build practical security fundamentals: enumeration, privilege escalation, and working with known exploits.'
            }
        ]
    },
    el: {
        file: 'Panagiotis_Zermpinos_CV_EL.pdf',
        docTitle: 'Panagiotis Zermpinos CV (Greek)',
        name: 'ΠΑΝΑΓΙΩΤΗΣ ΖΕΡΜΠΙΝΟΣ',
        role: 'Technical Operations Engineer',
        location: 'Αθήνα, Ελλάδα',
        languages: 'Γλώσσες: Ελληνικά (Μητρική), Αγγλικά (C2, Άριστη Γνώση), Γερμανικά (B1, Μέτρια Γνώση)',
        error: 'Η δημιουργία του βιογραφικού απέτυχε. Ελέγξτε τη σύνδεσή σας και δοκιμάστε ξανά.',
        sections: {
            summary: 'ΕΠΑΓΓΕΛΜΑΤΙΚΟ ΠΡΟΦΙΛ',
            experience: 'ΕΠΑΓΓΕΛΜΑΤΙΚΗ ΕΜΠΕΙΡΙΑ',
            education: 'ΕΚΠΑΙΔΕΥΣΗ',
            skills: 'ΤΕΧΝΙΚΕΣ ΔΕΞΙΟΤΗΤΕΣ',
            projects: 'ΕΡΓΑ'
        },
        summary: 'Technical Operations Engineer με 3 χρόνια εμπειρίας στη συντήρηση κρίσιμων υποδομών των σωμάτων ασφαλείας σε πανελλαδικό επίπεδο. ' +
            'Αποκλειστικός τεχνικός υπεύθυνος για 50+ εγκληματολογικά συστήματα σε όλη την Ελλάδα, με 99,5% διαθεσιμότητα σε έργο ~3 εκατ. €. ' +
            'Εμπειρία στη διατήρηση συμμόρφωσης με τα πρότυπα ISO 27001, 9001 και 13485.',
        jobs: [
            {
                title: 'Μηχανικός Εφαρμογών & Τεχνικής Υποστήριξης',
                org: 'bioMDx IntelligenceX & SafeBlood',
                dates: 'Σεπ 2023 - Αυγ 2026',
                bullets: [
                    'Αποκλειστικός τεχνικός υπεύθυνος για 50+ συστήματα εγκληματολογικής φωτογραφίας πανελλαδικά, με 99,5% διαθεσιμότητα και αυθημερόν ανταπόκριση σε περιστατικά',
                    'Ταχεία διαλογή και επίλυση περιστατικών (L1/L2) σε συστήματα κρίσιμης ασφάλειας, εντός περιβάλλοντος σωμάτων ασφαλείας',
                    'Υπεύθυνος της Πολιτικής κατά της Δωροδοκίας και της διατήρησης συμμόρφωσης με πολλαπλά πρότυπα ISO (ISO 27001, 9001, 13485)',
                    'Διαχείριση κύκλου ζωής εξοπλισμού και συντονισμός εφοδιαστικής για εγκαταστάσεις πεδίου σε όλη τη χώρα, με αναζήτηση προμηθευτών και διενέργεια προμηθειών',
                    'Κύριος τεχνικός σύνδεσμος για πελάτες των σωμάτων ασφαλείας και συνεργαζόμενους αντιπροσώπους. Εκπαίδευσα 250+ αστυνομικούς στη χρήση εγκληματολογικού εξοπλισμού, ετοίμασα υλικό προϊόντων και παρείχα υποστήριξη pre-sales και after-sales'
                ]
            },
            {
                title: 'Μηχανολόγος Μηχανικός, Εξωτερικός Συνεργάτης',
                org: 'Διαχειριστής Ελληνικού Δικτύου Διανομής Ηλεκτρικής Ενέργειας (ΔΕΔΔΗΕ)',
                dates: 'Δεκ 2022 - Φεβ 2023',
                bullets: [
                    'Διερεύνηση υποθέσεων ρευματοκλοπής από γραφείο, σε όλο το εθνικό δίκτυο διανομής. Διεκπεραίωνα περίπου 20 υποθέσεις την ημέρα, περίπου τρεις φορές τον μέσο όρο της ομάδας, σε ομάδα 8 ατόμων, εντοπίζοντας πηγές κλοπής και απώλειες σε οικιακές και επαγγελματικές παροχές.'
                ]
            },
            {
                title: 'Τεχνικός Ηλεκτρολογικών Συστημάτων',
                org: 'Rutech S.A.',
                dates: 'Ιουν 2022 - Δεκ 2022',
                bullets: [
                    'Υλοποίηση εγκαταστάσεων UPS, φωτοβολταϊκών και ηλεκτρολογικού αυτοματισμού σε 9 κλάδους (άμυνα, ναυτιλία, υγεία, ενέργεια, τηλεπικοινωνίες και άλλους), υπό συμμόρφωση με ISO 14001 και ISO 45001. Παράδοση έργων για εταιρικούς πελάτες όπως η Cisco και η Cordia, σε ομάδα 5 ατόμων με απευθείας αναφορά στον CTO.'
                ]
            }
        ],
        education: {
            title: 'Δίπλωμα Μηχανολόγου Μηχανικού',
            org: 'Πανεπιστήμιο Δυτικής Αττικής, 300 ECTS, ενιαίος και αδιάσπαστος τίτλος σπουδών μεταπτυχιακού επιπέδου',
            dates: '2017 - 2023',
            bullets: [
                'Διπλωματική εργασία: Αξιολόγηση ενεργειακής απόδοσης αντλίας θερμότητας με υποβοήθηση ηλιακής ενέργειας και συλλέκτες PVT για κατοικίες στην Ελλάδα. Συνδυασμός θερμικής προσομοίωσης TRNSYS με ανάλυση δεδομένων σε MATLAB.'
            ]
        },
        skills: [
            { label: 'IT Operations & Support:', items: 'Field Systems Maintenance, L1/L2 Technical Support, Endpoint & Linux Administration, Incident Triage & Response' },
            { label: 'Networking & Security:', items: 'Docker, DNS (Pi-hole / unbound), nftables, WireGuard, Network Segmentation, Backup & Disaster Recovery' },
            { label: 'Development & Automation:', items: 'Python, MATLAB, Git, Data Analysis' },
            { label: 'Quality & Compliance:', items: 'ISO 27001, ISO 9001, ISO 13485, ISO 14001, ISO 45001' }
        ],
        projects: [
            {
                title: 'Boot.dev - Backend Developer Path',
                links: [{ label: '(σύνδεσμος)', url: 'https://www.boot.dev/u/zermpinos' }],
                status: '[ΕΝΕΡΓΟ]',
                dates: 'ΙΟΥΝ 2026 - ΣΗΜΕΡΑ',
                body: 'Back-end Developer Path (Python & Go). Ολοκληρωμένα: Python, Object Oriented Programming, Linux, Git, με έργα Bookbot, Asteroids και AI Agent. Σε εξέλιξη: Go, Functional Programming, Data Structures & Algorithms, Docker.'
            },
            {
                title: 'Home Network Security & Infrastructure',
                links: [],
                status: '[ΣΕ ΛΕΙΤΟΥΡΓΙΑ]',
                dates: 'ΑΠΡ 2026 - ΣΗΜΕΡΑ',
                body: 'Self-hosted stack πέντε Docker containers σε Raspberry Pi: DNS, VPN και home automation για 12 συσκευές. Recursive DNSSEC-validating resolver, ώστε κανένας πάροχος να μη βλέπει τα queries του σπιτιού, 362 χιλ. blocked domains και κλείσιμο των DNS-over-TLS και DNS-over-HTTPS bypass routes στο router. Επτά IoT συσκευές σε zero internet egress με διατήρηση του τοπικού ελέγχου, αφού το DNS blocking από μόνο του άφησε 576 χιλ. απορριφθείσες cloud callbacks σε 30 ημέρες. Default-deny nftables firewall, WireGuard remote access και pull-only nightly backups. Τεκμηρίωση σε 33 runbook notes, με disaster recovery διαδικασία επαληθευμένη έναντι rebuild checklist.'
            },
            {
                title: 'Armani Katehano Club Platform',
                links: [{ label: '(σύνδεσμος)', url: 'https://armani-katehano.com' }],
                status: '[ΣΕ ΛΕΙΤΟΥΡΓΙΑ]',
                dates: 'ΜΑΡ 2026 - ΣΗΜΕΡΑ',
                body: 'Full-stack web application για αγωνιστικό σύλλογο καλαθοσφαίρισης εν ενεργεία. Το public dashboard παρακολουθεί 13 παίκτες σε PPG, RPG, APG και efficiency ratings, με live αποτελέσματα αγώνων, standings, εναλλαγή season και all-time, και team leaderboard. Multi-portal αρχιτεκτονική: admin portal για πλήρη CRUD διαχείριση δεδομένων και coach portal για ανακοινώσεις ρόστερ και αποστολή email αγώνων.'
            },
            {
                title: 'Personal Linux Security & Hardening',
                links: [],
                status: '[ΕΝΕΡΓΟ]',
                dates: 'ΜΑΡ 2025 - ΣΗΜΕΡΑ',
                body: 'Καθημερινή χρήση Linux ως κύριου OS, με τακτικά Lynis security audits. Hardening σε προσωπικά μηχανήματα, με κάλυψη των συνήθων attack surfaces.'
            },
            {
                title: 'Security Labs (learning) - HackTheBox & TryHackMe',
                links: [
                    { label: '(HTB)', url: 'https://profile.hackthebox.com/profile/019d715f-7a77-7056-a7c5-88f6a3490217' },
                    { label: '(THM)', url: 'https://tryhackme.com/p/Deadalus' }
                ],
                status: '[ΕΝΕΡΓΟ]',
                dates: 'ΦΕΒ 2025 - ΣΗΜΕΡΑ',
                body: 'Επίλυση HackTheBox machines και TryHackMe rooms αρχικού επιπέδου, για πρακτικά θεμέλια ασφάλειας: enumeration, privilege escalation και χρήση γνωστών exploits.'
            }
        ]
    }
};

const GREEK_FONT = 'LiberationSans';
const GREEK_FONT_FILES = [
    ['LiberationSans-Regular.ttf', '/fonts/liberation-sans.ttf', 'normal'],
    ['LiberationSans-Bold.ttf', '/fonts/liberation-sans-bold.ttf', 'bold']
];

// The built-in PDF fonts are WinAnsi and carry no Greek glyphs, so the Greek CV
// embeds its own subset. Fetched rather than injected as a script tag: Trusted
// Types is enforced with no policy, so assigning to script.src would throw.
async function loadGreekFont(doc) {
    for (const entry of GREEK_FONT_FILES) {
        const res = await fetch(entry[1]);
        if (!res.ok) throw new Error('font ' + res.status);
        const bytes = new Uint8Array(await res.arrayBuffer());
        let binary = '';
        for (let i = 0; i < bytes.length; i += 0x8000) {
            binary += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
        }
        doc.addFileToVFS(entry[0], btoa(binary));
        doc.addFont(entry[0], GREEK_FONT, entry[2]);
    }
    return GREEK_FONT;
}

function indexOfAscii(bytes, s, from) {
    for (let i = from; i + s.length <= bytes.length; i++) {
        let hit = true;
        for (let j = 0; j < s.length; j++) {
            if (bytes[i + j] !== s.charCodeAt(j)) { hit = false; break; }
        }
        if (hit) return i;
    }
    return -1;
}

// jsPDF 3.0.3 hardcodes /Producer (jsPDF <version>) and ignores the producer
// property, so the field is blanked in the finished bytes instead. Spaces rather
// than deletion: shifting a byte would move every xref offset. Returns false
// unless the finished bytes carry no trace of the library name.
function stripLibraryName(bytes) {
    const needle = '/Producer (jsPDF ';
    const MAX_RUN = 64;
    let i = indexOfAscii(bytes, needle, 0);
    while (i !== -1) {
        const limit = Math.min(bytes.length, i + needle.length + MAX_RUN);
        let end = i + needle.length;
        while (end < limit && bytes[end] !== 0x29) end++;
        if (end === limit) return false;
        for (let k = i; k <= end; k++) bytes[k] = 0x20;
        i = indexOfAscii(bytes, needle, end + 1);
    }
    return indexOfAscii(bytes, 'jsPDF', 0) === -1;
}

// Refusing to download beats leaking the library name into a CV that is already
// in someone's inbox by the time anyone notices.
function savePdf(doc, filename) {
    const bytes = new Uint8Array(doc.output('arraybuffer'));
    if (!stripLibraryName(bytes)) throw new Error('library name still present');

    const url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 40000);
}

async function generateCV(lang) {
    const t = CV[lang];
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const FONT = lang === 'el' ? await loadGreekFont(doc) : 'Helvetica';

    doc.setProperties({
        title: t.docTitle,
        author: 'Panagiotis Zermpinos',
        creator: 'Panagiotis Zermpinos'
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
    const CONTENT_H = MAX_Y - MARGIN_TOP;

    let y = MARGIN_TOP;
    function checkPage(needed) {
        if (y + needed > MAX_Y) {
            doc.addPage();
            y = MARGIN_TOP;
        }
    }

    function drawLine() {
        doc.setDrawColor(180);
        doc.setLineWidth(0.3);
        doc.line(MARGIN_L, y, PAGE_W - MARGIN_R, y);
        y += 3;
    }

    // Titles are stored already uppercased: toUpperCase keeps the Greek tonos,
    // which all-caps Greek drops.
    function addSectionTitle(title) {
        checkPage(10);
        y += 2;
        doc.setFont(FONT, 'bold');
        doc.setFontSize(11);
        doc.setTextColor(0);
        doc.text(title, MARGIN_L, y);
        y += 1;
        drawLine();
    }

    function measure(text, size, indent) {
        doc.setFont(FONT, 'normal');
        doc.setFontSize(size);
        return doc.splitTextToSize(text, CONTENT_W - (indent || 0)).length * size * 0.45;
    }

    function addText(text, opts = {}) {
        const size = opts.size || 9;
        const indent = opts.indent || 0;

        doc.setFont(FONT, opts.bold ? 'bold' : 'normal');
        doc.setFontSize(size);
        doc.setTextColor(opts.color || 50);

        const lines = doc.splitTextToSize(text, CONTENT_W - indent);
        const totalH = lines.length * size * 0.45;

        checkPage(totalH);
        doc.text(lines, MARGIN_L + indent, y);
        y += totalH;
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

    function addBullet(text) {
        const size = 9;
        const indent = 4;
        doc.setFont(FONT, 'normal');
        doc.setFontSize(size);
        doc.setTextColor(50);

        const lines = doc.splitTextToSize(text, CONTENT_W - indent);
        const totalH = lines.length * size * 0.45;

        checkPage(totalH);
        doc.text('-', MARGIN_L + indent - 2.5, y);
        doc.text(lines, MARGIN_L + indent, y);
        y += totalH + 0.5;
    }

    // Reserve the header plus the first bullet so an entry never orphans its title.
    function addEntry(entry) {
        const first = entry.bullets.length ? measure(entry.bullets[0], 9, 4) : 0;
        checkPage(Math.min(5 + measure(entry.org, 9, 0) + first, CONTENT_H));

        doc.setFont(FONT, 'bold');
        doc.setFontSize(10);
        doc.setTextColor(0);
        doc.text(entry.title, MARGIN_L, y);
        doc.setFont(FONT, 'normal');
        doc.setFontSize(9);
        doc.setTextColor(80);
        doc.text(entry.dates, PAGE_W - MARGIN_R, y, { align: 'right' });
        y += 4;
        addText(entry.org, { size: 9, color: 80 });
        y += 1;

        entry.bullets.forEach(function (b) { addBullet(b); });
        y += 2;
    }

    function addProject(p) {
        checkPage(Math.min(7 + measure(p.body, 8.5, 0), CONTENT_H));

        doc.setFont(FONT, 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(0);
        doc.text(p.title, MARGIN_L, y);
        let lx = MARGIN_L + doc.getTextWidth(p.title) + 2;

        doc.setFont(FONT, 'normal');
        doc.setFontSize(8.5);
        p.links.forEach(function (link) {
            lx += drawLink(link.label, lx, y, link.url) + doc.getTextWidth('  ');
        });
        doc.setTextColor(100);
        doc.text(p.status, PAGE_W - MARGIN_R, y, { align: 'right' });
        y += 3.5;

        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text(p.dates, MARGIN_L, y);
        y += 3.5;

        addText(p.body, { size: 8.5, color: 50 });
        y += 2;
    }

    doc.setFont(FONT, 'bold');
    doc.setFontSize(18);
    doc.setTextColor(0);
    doc.text(t.name, MARGIN_L, y);
    y += 5;

    doc.setFont(FONT, 'normal');
    doc.setFontSize(10);
    doc.setTextColor(60);
    doc.text(t.role, MARGIN_L, y);
    y += 5;

    doc.setFontSize(8.5);
    const sep = '  |  ';
    let cx = MARGIN_L;
    cx += drawLink('p.zermpinos@proton.me', cx, y, 'mailto:p.zermpinos@proton.me');
    doc.setTextColor(80); doc.text(sep, cx, y); cx += doc.getTextWidth(sep);
    doc.setTextColor(80); doc.text(t.location, cx, y); cx += doc.getTextWidth(t.location);
    doc.setTextColor(80); doc.text(sep, cx, y); cx += doc.getTextWidth(sep);
    cx += drawLink('linkedin.com/in/panagiotiszermpinos', cx, y, 'https://www.linkedin.com/in/panagiotiszermpinos/');
    doc.setTextColor(80); doc.text(sep, cx, y); cx += doc.getTextWidth(sep);
    drawLink('github.com/zermpinos', cx, y, 'https://github.com/zermpinos');
    y += 4;

    doc.setFont(FONT, 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(60);
    doc.text(t.languages, MARGIN_L, y);
    drawLink(PORTFOLIO.label, PAGE_W - MARGIN_R - doc.getTextWidth(PORTFOLIO.label), y, PORTFOLIO.url);
    y += 3;

    drawLine();

    addSectionTitle(t.sections.summary);
    addText(t.summary, { size: 9, color: 40 });
    y += 2;

    addSectionTitle(t.sections.experience);
    t.jobs.forEach(addEntry);

    addSectionTitle(t.sections.education);
    addEntry(t.education);

    addSectionTitle(t.sections.skills);
    t.skills.forEach(function (group) {
        addText(group.label, { size: 9, bold: true, color: 30 });
        y += 1;
        addText(group.items, { size: 9, color: 50, indent: 4 });
        y += 1;
    });
    y += 1;

    addSectionTitle(t.sections.projects);
    t.projects.forEach(addProject);

    savePdf(doc, t.file);
}

document.addEventListener('DOMContentLoaded', function () {
    [['downloadCvBtn', 'en'], ['downloadCvElBtn', 'el']].forEach(function (pair) {
        const btn = document.getElementById(pair[0]);
        if (!btn) return;
        btn.addEventListener('click', async function (e) {
            e.preventDefault();
            btn.disabled = true;
            try {
                await generateCV(pair[1]);
            } catch (err) {
                window.alert(CV[pair[1]].error);
            } finally {
                btn.disabled = false;
            }
        });
    });
});
