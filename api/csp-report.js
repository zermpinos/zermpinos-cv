module.exports = function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).end();
        return;
    }
    try {
        const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        // Reporting API v1: array of {type, body}
        // Legacy report-uri: {"csp-report": {...}}
        const report = Array.isArray(body)
            ? body[0]?.body
            : body?.['csp-report'];
        if (report) {
            console.log(JSON.stringify({ csp: report }));
        }
    } catch (_) {
        // malformed body - swallow silently, still return 204
    }
    res.status(204).end();
};
