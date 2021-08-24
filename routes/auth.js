const express = require('express');
const router = express.Router();

const loginPageController = require('../controllers/auth');

router.get('/login', loginPageController.getLoginPage);
router.post('/login', loginPageController.postLogin);

module.exports = router;
