var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('about',
    { 
      title: 'ACERCA',
      texto: 'Yo soy un duro en nodejs',
      foto: 'http://i.giphy.com/JIX9t2j0ZTN9S.gif'
    }
  );
});

module.exports = router;
