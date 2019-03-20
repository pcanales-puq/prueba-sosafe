var express = require('express');
var router = express.Router();
var format = require('date-format');
router.get('/fecha-hora', function(req, res) {
  res.send(format("yyyy-MM-dd hh:MM.ss", new Date()));
});
module.exports = router;