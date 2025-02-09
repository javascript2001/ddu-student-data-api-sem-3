const express = require('express');
const router = express.Router();
const find_data = require('../controller/find_data_logic')

router.get('/:rollnumber' , find_data)
module.exports = router