const express = require('express');
const router = express.Router();
const caseController = require('../controllers/caseController');

// POST /api/create-case
// Create a new case

router.post('/create-case', caseController.createCase);

module.exports = router;
