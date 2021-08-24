const express = require('express');
const router = express.Router();

const isAuth = require('../middlewares/is-auth');
const adminPageController = require('../controllers/admin');

router.get('/', isAuth, adminPageController.adminPage);

router.post('/resumeLink', isAuth, adminPageController.postResumeLink);
router.post('/addSkill', isAuth, adminPageController.addNewSkill);
router.post('/removeSkill', isAuth, adminPageController.removeExistingSkill);

module.exports = router;
