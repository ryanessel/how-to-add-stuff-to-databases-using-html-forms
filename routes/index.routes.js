// ALL ROUTES ALAYS NEED TO BE CONNECTED TO THE APP.JS!!!!!!!!!!!!!!

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  //res.render() normally targets the views. so in this isntance "index" is refering to index.hbs
  res.render("index");
});

module.exports = router;
