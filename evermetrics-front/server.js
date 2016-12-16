var express = require('express'); // requerimos la librería y todas sus dependencias
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var passport = require('passport');
var evermetrics = require('evermetrics-client');
var auth = require('./auth')
var config = require('./config');
var app = express();

var client = evermetrics.createClient(config.client);

app.set(bodyParser.json()); // le decimos que express sea capaz de hacer parse de peticiones http que contengan un json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
  secret: config.secret,
  resave: false,
  saveUnitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine','pug'); //le decimos que vamos a usar un motor de vistas, utilizando pug para renderizarla

app.use(express.static('public'));//define un middleware que le indica al servidor que esta almacenado en la variable app que la carpeta public sea estatica y cualquier usuario la pueda ver y va ser una carpeta virtual

passport.use(auth.localStrategy);
passport.deserializeUser(auth.deserializeUser);
passport.serializeUser(auth.serializeUser); // acá le decimos a passport que utilice las estrategias que definimos en nuestro archivo de auth

app.get('/', ensureAuth, function(req, res){
  res.render('index', { title:'Evermetrics' });//llamamos el motor de vistas, primer parametro es el nombre del archivo que lo va ir a buscar por defecto en una carpeta llamada views
})//parametros ruta y función. Aquí le decimos que cuando aceda a la ruta ejecute esta función

app.get('/signup', function(req, res){
  res.render('index', { title:'Evermetrics -  Signup' });//luego del nombre de del archivo le pasamos un objeto de javascript(los objetos se escriben con llave y se le pone una clave valor)
})

app.post('/signup', function(req, res){
  var user = req.body;
  client.saveUser(user, function (err, usr) {
    if (err) return res.status(500).send(err.message);

    res.redirect('/signin');
  })
})

app.get('/signin', function(req, res){
  res.render('index', { title:'Evermetrics - Signin' });
})

app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/signin'
}))

function ensureAuth (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).send({ error: 'not authenticate' })
}

app.get('/api/estadisticas', function(req, res){
  var estadisticas =[
    {
      user:{
        username: 'wserna',
        avatar:'https://avatars3.githubusercontent.com/u/22055277?v=3&s=460'
      },
      url: 'office.jpg',
      likes: 10,
      liked: true
    },
    {
      user:{
        username: 'wserna',
        avatar:'https://avatars3.githubusercontent.com/u/22055277?v=3&s=460'
      },
      url: 'office.jpg',
      likes: 24,
      liked: true
    }
  ];
  setTimeout(function(){
    res.send(estadisticas);
  },2000);
})

app.listen(3000, function(err){
  if(err) return console.log('Hubo un error'), process.exit(1);// con esto le indicamos que hubo un error pasandole por parametro un num distinto de cero

  console.log('everlytics escuchando en el puerto 3000');
})//Acá lanzamos el servidor web, le decimos que en el puerto 3000 y ponemos una función que toma un error en caso que lo haya y preguntamos si hubo un error y retornamos un mensaje
