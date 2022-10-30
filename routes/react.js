var express = require('express');
var router = express.Router();
var connection=require('../configurations/database')
router.get('/', function(req, res, next) {
    connection.query('select * from react' ,(err,rows) => {
      if (err) {
        req.flash('error', err)
        res.json('src_folder', { data: '' })
      } else {
        let src=rows.map((x)=>x=x.src_folder)
        let comp=rows.map((x)=>x=x.components)
        let mod=rows.map((x)=>x=x.modules)
        let directive=rows.map((x)=>x=x.directives)
        let testfiles=rows.map((x)=>x=x.test_files)
        res.json({src_folder:src,components:comp,modules:mod,directives:directive,test_files:testfiles})
      }
    })
});

module.exports = router;