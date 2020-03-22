const express = require('express');
const router = express.Router();
const ViewController = require('../controllers/view.controller');
const viewController = new ViewController ()

router.route('/get-view').get(viewController.getView)

module.exports = router;
