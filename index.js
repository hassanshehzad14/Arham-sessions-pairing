const express = require('express');
const path = require('path');
const app = express();

const pairCode = require('./pair');

const PORT = process.env.PORT || 8001;
__path = process.cwd();

require('events').EventEmitter.defaultMaxListeners = 500;

// Use pair.js under /pair  (✅ fixed route)
app.use('/pair', pairCode);

// Serve pair.html at root
app.use('/', (req, res) => res.sendFile(path.join(__path, 'pair.html')));

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

module.exports = app;