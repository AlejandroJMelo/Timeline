const express = require('express');
const testDBRouter = express.Router();
const testDBController = require('../controllers/testDBController');

testDBRouter.route('/')
.get(testDBController.getTestConnection);

module.exports = testDBRouter;

