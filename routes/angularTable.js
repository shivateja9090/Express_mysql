var express = require('express');
var router = express.Router();
var connection=require('../configurations/database')
router.get('/', function(req, res, next) {
    connection.query('select * from angular' ,(err,rows) => {
      if (err) {
        req.flash('error', err)
        res.json('src_folder', { data: '' })
      } else {
        let src=rows.map((x)=>x=x.src_folder)
        let comp=rows.map((x)=>x=x.components)
        let mod=rows.map((x)=>x=x.modules)
        res.json({src_folder:src,components:comp,modules:mod})
      }
    })
});

module.exports = router;