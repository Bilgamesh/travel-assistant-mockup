const express = require('express');
const router = express.Router();
const controller = require('../controller/cab-controller');

router.post('/', controller.bookCab)

module.exports = router;
