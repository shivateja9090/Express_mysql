var express = require('express');
var router = express.Router();
var connection=require('../configurations/database')
router.get('/', function(req, res, next) {
    connection.query('select * from spring_boot' ,(err,rows) => {
      if (err) {
        req.flash('error', err)
      } else {
        let src=rows.map((x)=>x=x.src_folder)
        let route=rows.map((x)=>x=x.routes)
        let controller=rows.map((x)=>x=x.controllers)
        res.json({src_folder:src,routes:route,controllers:controller})
      }
    })
});

module.exports = router;