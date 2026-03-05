const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve images from 'Images' directory
app.use('/images', express.static(path.join(__dirname, 'Images')));

// Serve fonts from 'fonts' directory
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 10cent Website running at http://localhost:${PORT}`);
});
