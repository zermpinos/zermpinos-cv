window.CV_DATA = {
    name: 'PANAGIOTIS ZERMPINOS',
    title: 'Technical Operations Engineer, moving into Cybersecurity',
    stations: {
        about: {
            label: 'About',
            glyph: '$',
            blocks: [
                { t: 'p', text: 'Technical Operations Engineer based in Athens, Greece. 3 years keeping critical law enforcement infrastructure running nationwide: 50+ forensic instruments, a project worth around 3M EUR, and 99.5% uptime across Greece.' },
                { t: 'p', text: 'Now bringing that operational discipline into cybersecurity and IT operations, backed by a self-hosted Linux and Docker network security stack built and documented first-hand.' },
                { t: 'stats', items: [
                    { n: '99.5%', l: 'System Uptime' },
                    { n: '50+', l: 'Critical Systems' },
                    { n: '~3M', l: 'National Project (EUR)' },
                    { n: '3+', l: 'Years in Ops' }
                ] }
            ]
        },
        experience: {
            label: 'Experience',
            glyph: '>',
            blocks: [
                { t: 'entry', title: 'Application & Technical Support Engineer', sub: 'bioMDx IntelligenceX & SafeBlood', date: 'SEP 2023 - AUG 2026', bullets: [
                    'Sole technical owner of 50+ criminal photography instruments nationwide, maintaining 99.5% uptime with same-day incident response.',
                    'Rapid L1/L2 triage and resolution for security-critical systems in law enforcement environments.',
                    'Owned Anti-Bribery Policy and maintained multi-ISO compliance (ISO 27001, 9001, 13485).',
                    'Hardware lifecycle management and logistics for nationwide field deployments; vendor sourcing and procurement.',
                    'Primary technical liaison for law enforcement clients; trained 250+ police officers on forensic instrumentation.'
                ] },
                { t: 'entry', title: 'Mechanical Engineer, External Partner', sub: 'Hellenic Electricity Distribution Network Operator (HEDNO)', date: 'DEC 2022 - FEB 2023', bullets: [
                    'Office-based investigation of electricity theft cases across the national distribution network. Processed around 20 cases per day, roughly 3x the team average, in an 8-person team.'
                ] },
                { t: 'entry', title: 'Electrical Systems Technician', sub: 'Rutech S.A.', date: 'JUN 2022 - DEC 2022', bullets: [
                    'Executed UPS, PV, and electrical automation installations across 9 industry verticals under ISO 14001 and ISO 45001. Delivered projects for clients including Cisco and Cordia in a 5-person team reporting to the CTO.'
                ] }
            ]
        },
        skills: {
            label: 'Skills',
            glyph: '/',
            blocks: [
                { t: 'group', title: 'IT Operations & Support', tags: ['Field Systems Maintenance', 'L1/L2 Technical Support', 'Endpoint & Linux Administration', 'Incident Triage & Response'] },
                { t: 'group', title: 'Networking & Security', tags: ['Docker', 'DNS (Pi-hole / unbound)', 'nftables', 'WireGuard', 'Network Segmentation', 'Backup & Disaster Recovery'] },
                { t: 'group', title: 'Development & Automation', tags: ['Python', 'MATLAB', 'Git', 'Data Analysis'] },
                { t: 'group', title: 'Quality & Compliance', tags: ['ISO 27001', 'ISO 9001', 'ISO 13485', 'ISO 14001', 'ISO 45001'] }
            ]
        },
        education: {
            label: 'Education',
            glyph: '^',
            blocks: [
                { t: 'entry', title: "Integrated Master's in Mechanical Engineering", sub: 'University of West Attica, 300 ECTS', date: '2017 - 2023', bullets: [
                    'Five-year integrated programme covering mechanical systems, thermodynamics, energy engineering, and applied data analysis.',
                    'Thesis: energy performance of a solar-assisted heat pump with PVT collectors for Greek dwellings, combining TRNSYS simulation with MATLAB analysis.'
                ] }
            ]
        },
        projects: {
            label: 'Projects',
            glyph: '*',
            blocks: [
                { t: 'project', title: 'Home Network Security & Infrastructure', date: 'APR 2026 - PRESENT', status: 'LIVE', desc: 'Self-hosted five-container Docker stack on a Raspberry Pi running DNS, VPN and home automation for a 12-device household. Recursive DNSSEC-validating resolver so no upstream provider sees household queries, 362k blocked domains, and both DNS-over-TLS and DNS-over-HTTPS bypass routes closed at the router. Seven IoT devices segmented to zero internet egress with local control intact, after DNS blocking alone left 576k refused cloud callbacks in 30 days. Default-deny nftables host firewall, WireGuard remote access, and pull-only nightly backups. Documented as a 33-note runbook set with a disaster-recovery procedure verified against a rebuild checklist.', tech: ['Docker', 'Linux', 'nftables', 'DNS (Pi-hole / unbound)', 'WireGuard', 'Network Segmentation'] },
                { t: 'project', title: 'Armani Katehano Club Platform', date: 'MAR 2026 - PRESENT', status: 'LIVE', desc: 'Full-stack app for a competitive basketball club. Public dashboard tracks 13 players across PPG, RPG, APG, and efficiency, with live results, standings, and an admin/coach multi-portal backend.', tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'], url: 'https://armani-katehano.com' },
                { t: 'project', title: 'Boot.dev: Back-end Developer Path', date: 'JUN 2026 - PRESENT', status: 'ACTIVE', desc: 'Working through the Back-end Developer Path (Python & Go). Completed Python (fundamentals + OOP), Linux, and Git with hands-on projects (a Python AI agent, Bookbot, and an Asteroids game). Currently working through Go, functional programming, data structures & algorithms, and Docker.', tech: ['Python', 'Go', 'Linux', 'Git', 'Docker'], url: 'https://www.boot.dev/u/zermpinos' },
                { t: 'project', title: 'Personal Linux Security & Hardening', date: 'MAR 2025 - PRESENT', status: 'ACTIVE', desc: 'Daily-drives Linux with regular Lynis security audits. Applied hardening to personal machines covering common attack surfaces.', tech: ['Linux', 'Lynis', 'System Hardening'] },
                { t: 'project', title: 'Security Labs (learning): HackTheBox & TryHackMe', date: 'FEB 2025 - PRESENT', status: 'ACTIVE', desc: 'Working through beginner-level HackTheBox machines and TryHackMe rooms to build practical security fundamentals: enumeration, privilege escalation, and working with known exploits.', tech: ['Enumeration', 'Privilege Escalation'], url: 'https://profile.hackthebox.com/profile/019d715f-7a77-7056-a7c5-88f6a3490217' }
            ]
        },
        contact: {
            label: 'Contact',
            glyph: '@',
            blocks: [
                { t: 'contact', items: [
                    { label: 'Email', value: 'p.zermpinos@proton.me', url: 'mailto:p.zermpinos@proton.me' },
                    { label: 'LinkedIn', value: 'Panagiotis Zermpinos', url: 'https://www.linkedin.com/in/panagiotiszermpinos/' },
                    { label: 'GitHub', value: '@zermpinos', url: 'https://github.com/zermpinos' },
                    { label: 'Location', value: 'Athens, Greece . Remote-friendly' }
                ] },
                { t: 'langs', items: [
                    { name: 'Greek', level: 'Native' },
                    { name: 'English', level: 'C2 Proficient' },
                    { name: 'German', level: 'B1 Intermediate' }
                ] }
            ]
        }
    }
};
