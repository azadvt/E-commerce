var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
var MongoClient=require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {

  let products=[
    {
      name:"Ikigai The Japanese secret to a long and happy life",
      author:" Francesc Miralles",
      discription:"We all have an ikigai It's the Japanese word for ‘a reason to live’ or ‘a reason to jump out of bed in the morning’.It’s the place where your needs, desires, ambitions, and satisfaction meet. A place of balance. Small wonder that finding your ikigai is closely linked to living longer.",
      image:"https://bit.ly/3tCleZI"
    },
    {
      name:"Ikigai The Japanese secret to a long and happy life",
      author:" Francesc Miralles",
      discription:"We all have an ikigai It's the Japanese word for ‘a reason to live’ or ‘a reason to jump out of bed in the morning’.It’s the place where your needs, desires, ambitions, and satisfaction meet. A place of balance. Small wonder that finding your ikigai is closely linked to living longer.",
      image:"https://bit.ly/3tCleZI"
    },
    {
      name:"Ikigai The Japanese secret to a long and happy life",
      author:" Francesc Miralles",
      discription:"We all have an ikigai It's the Japanese word for ‘a reason to live’ or ‘a reason to jump out of bed in the morning’.It’s the place where your needs, desires, ambitions, and satisfaction meet. A place of balance. Small wonder that finding your ikigai is closely linked to living longer.",
      image:"https://bit.ly/3tCleZI"
    },
    {
      name:"Ikigai The Japanese secret to a long and happy life",
      author:" Francesc Miralles",
      discription:"We all have an ikigai It's the Japanese word for ‘a reason to live’ or ‘a reason to jump out of bed in the morning’.It’s the place where your needs, desires, ambitions, and satisfaction meet. A place of balance. Small wonder that finding your ikigai is closely linked to living longer.",
      image:"https://bit.ly/3tCleZI"
    }
  ]
  res.render('admin/view-products', {admin:true,products});
});




module.exports = router;