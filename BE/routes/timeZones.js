const express = require('express');
const router = express.Router();
const {getTimeZone} = require('../controllers/timeZoneController');

router
    .route('/')
    .get(getTimeZone)

module.exports = router;