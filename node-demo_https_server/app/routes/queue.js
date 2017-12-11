var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function(req, res, next) {
  // req.app.get("port");
  if(req.protocol === 'https'){
      // res.end("dsafasdfasdfasdf");
      res.render('index', { title: 'Express by https'+req.app.get("sslport") });

  }else {
      res.render('index', { title: 'Express'+req.app.get("port") });
  }
});

module.exports = router;
