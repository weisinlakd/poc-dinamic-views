const express = require('express');
const router = express.Router();

const ViewController = new (require('../controllers/view.controller'))()

router.route('/get-view').get(ViewController.getView)

module.exports = router;
