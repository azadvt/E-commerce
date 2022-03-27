var express = require('express');
const { render } = require('../app');
var router = express.Router();

/* GET users listing. */
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
  res.render('admin/view-products',{admin:true,products})
});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')
})

router.post('/add-product',(req,res)=>{
  console.log(req.body)
})

module.exports = router;
