const express = require('express');
const router = express.Router();

router.route('/get-view').get( (req, res) => {
    res.send('Soy la vista papu');
});

module.exports = router;
