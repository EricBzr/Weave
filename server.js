const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("API Running"));

// Grabs port specified within machines environment variables. Port 5000 is used by default if this port cannot be obtained
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

