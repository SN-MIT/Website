var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET About page. */
router.get('/about', function(req, res) {
  res.render('about', { title: 'Express' });
});

/* GET Rush page. */
router.get('/rush', function(req, res) {
  res.render('rush', { title: 'Express' });
});

/* GET Brothers page. */
router.get('/brothers', function(req, res) {
  res.render('brothers', { title: 'Express' });
});

/* GET House Tour page. */
router.get('/tour', function(req, res) {
  res.render('tour', { title: 'Express' });
});

/* GET Summer Housing page. */
router.get('/summer', function(req, res) {
  res.render('summer', { title: 'Express' });
});

/* GET Alumni Info page. */
router.get('/alumni', function(req, res) {
  res.render('alumni', { title: 'Express' });
});

/* GET Blog page. */
router.get('/blog', function(req, res) {
  res.render('blog', { title: 'Express' });
});

module.exports = router;
