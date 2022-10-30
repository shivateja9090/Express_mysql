var express = require('express');
var router = express.Router();
var connection=require('../configurations/database')
router.get('/', function(req, res, next) {
    connection.query('show tables' ,(err,rows) => {
      if (err) {
        console.log(err)
        req.flash('error', err)
      } else {
        let res1=rows.map((x)=>x=x.Tables_in_expressfolders)
        res.json({allfolders:res1})
      }
    })
});

module.exports = router;