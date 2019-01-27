var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Expressdsfjsdjfkls',
  abc:"dasfasdf",
  skdjflksjf:"fdsf"
  });
});

module.exports = router;
