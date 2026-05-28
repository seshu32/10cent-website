const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.disable('x-powered-by');

app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

app.get('/healthz', (req, res) => {
    res.status(200).send('ok');
});

// Serve static files from 'public' directory.
app.use(express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, filePath) => {
        if (path.extname(filePath) === '.html') {
            res.setHeader('Cache-Control', 'no-store');
        }
    }
}));

// Serve images from 'Images' directory.
app.use('/images', express.static(path.join(__dirname, 'Images')));

// Serve fonts from 'fonts' directory.
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));

// Main route.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, HOST, () => {
    console.log(`10cent Website running at http://${HOST}:${PORT}`);
});
