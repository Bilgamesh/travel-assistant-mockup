const express = require('express');
const router = express.Router();
const controller = require('../controller/flight-controller');

router.post('/', controller.bookFlight);

module.exports = router;
