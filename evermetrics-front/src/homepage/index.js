var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');

page('/', header, function(ctx, next){
  title('Evermetrics');
  var main = document.getElementById('main-container');


  empty(main).appendChild(template());

})
/*
function loadestadisticas(ctx, next){
   request
    .get('/api/estadisticas')
    .end(function(err,res){
      if(err) return console.log(err);
      ctx.estadisticas = res.body;
      next();
    })*/

    function loadestadisticas(ctx, next){
       Axios
        .get('/api/estadisticas')
        .then(function(res){
          ctx.estadisticas = res.data;
          next();
        })
        .cacth(function(err){
          console.log(err);
        })

        }

    async function asyncload(ctx, next){
          try {
            ctx.estadisticas = await fetch('/api/estadisticas').then( res => res.json() )
            next();
          } catch (err) {
            return console.log(err);
          }

        }
