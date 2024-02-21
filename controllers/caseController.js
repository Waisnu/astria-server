const axios = require('axios');

exports.createCase = async (req, res) => {
  try {
    const response = await axios.post('/api/v2/enterpriseapi/core/createcase', {
      name: req.body.name,
      description: req.body.description,
      comments: req.body.comments,
      ftkCaseFolderPath: req.body.ftkCaseFolderPath,
      responsiveFilePath: req.body.responsiveFilePath,
      projectType: req.body.projectType,
      processingMode: req.body.processingMode,
    });

    const caseId = response.data;
    console.log('Case created successfully. Case ID:', caseId);
    res.status(201).json({ caseId });
  } catch (error) {
    console.error('Error creating case:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

    res.status(201).json({ message: 'Case created successfully' });
};
