const express = require('express');
const dotenv = require('dotenv').config();

// 
const caseRoutes = require('./routes/caseRoutes');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the FTK API!');
});

// Define the case route
app.use('/api', caseRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
