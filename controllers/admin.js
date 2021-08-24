const Resume = require('../models/resumeLink');
const Skill = require('../models/skills');

exports.adminPage = (req, res, next) => {
  res.render('admin');
};

exports.postResumeLink = (req, res, next) => {
  const url = req.body.url;
  Resume.findOne()
    .then((data) => {
      if (data == null) {
        const newLink = new Resume({
          resumeUrl: url,
        });
        newLink.save();
      } else {
        data.resumeUrl = url;
        data.save();
      }
    })
    .then(() => {
      res.render('admin', {
        message: 'Success!!',
      });
    })
    .catch((err) => {
      res.render('admin', {
        message: err,
      });
    });
};

exports.addNewSkill = (req, res, next) => {
  const { skill, percentage } = req.body;
  const newSkill = new Skill({
    skill,
    percentage,
  });
  newSkill
    .save()
    .then(() => {
      res.render('admin', {
        skillAddMessage: 'Success!!',
      });
    })
    .catch((err) => {
      res.render('admin', {
        skillAddMessage: err,
      });
    });
};

exports.removeExistingSkill = (req, res, next) => {
  const { skill } = req.body;
  Skill.findOneAndRemove({ skill })
    .then(() => {
      res.render('admin', {
        skillRemoveMessage: 'Success!!',
      });
    })
    .catch((err) => {
      res.render('admin', {
        skillRemoveMessage: err,
      });
    });
};
