// Updated backend using express
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Routes

app.get('/',(req,res)=>{
  res.render('index');
});

app.get('/contact',(req,res)=>{
  res.render('contact-me');
});

app.get('/about',(req,res)=>{
  res.render('about');
});

app.get('/:id',(req,res)=>{
  console.log(res)
  res.status(404).render('404');
});

app.listen(8080);