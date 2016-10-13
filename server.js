var express = require("express");
var app = express();
var exphbs  = require('express-handlebars');
var router = express.Router();
var path = __dirname + '/views/';

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    var detajetePersonave = [
      {
        imgUrl: "/photo.jpg",
        emri: "Endrit",
        mbiemri: "Bytyqi",
        facebookUrl: "https://www.facebook.com/endritbytyqi?fref=ts",
        fcbPictureUrl: "fb.png",
        personId: "endriti"
      },
      {
        imgUrl: "/photo1.jpg",
        emri: "Auroni",
        mbiemri: "Bytyqi",
        facebookUrl: "http://www.facebook.com/aauronii",
        fcbPictureUrl: "fb.png",
        personId: "auroni"
      },
      {
        imgUrl: "/photo.jpg",
        emri: "Arvanit",
        mbiemri: "Grainca",
        facebookUrl: "http://www.facebook.com/aarvanitii",
        fcbPictureUrl: "fb.png",
        personId: "arvaniti"
      },
      {
        imgUrl: "/agoni.jpg",
        emri: "Agon",
        mbiemri: "Rushiti",
        facebookUrl: "https://www.facebook.com/aagonnr?fref=tsl",
        fcbPictureUrl: "fb.png",
        personId: "agoni"
      },
      {
        imgUrl: "/imm.jpg",
        emri: "Im",
        mbiemri: "Ibrahimi",
        facebookUrl: "https://www.facebook.com/imm.qo?fref=ts",
        fcbPictureUrl: "fb.png",
        personId: "imi"
      },
      {
        imgUrl: "/egzon.jpg",
        emri: "Egzon",
        mbiemri: "Dauti",
        facebookUrl: "https://www.facebook.com/EgzonDautii?fref=ts",
        fcbPictureUrl: "fb.png",
        personId: "egzoni"
      }
    ]
    res.render('about', {data: detajetePersonave});
});
app.get('/contact', function (req, res) {
    res.render('contact');
});
app.get('/orari', function (req, res) {
          var orariPastrimit = [
          {
            "java": 1,
            "dita": "E merkure",
            "personi": "Arvaniti"
          },
          {
            "java": 2,
            "dita": "E Marte",
            "personi": "Auroni"
          },
          {
            "java": 3,
            "dita": "E Premte",
            "personi": "Imi"
          },
          {
            "java": 4,
            "dita": "E Enjte",
            "personi": "Agoni"
          },
          ]

    res.render('orari', {data: orariPastrimit});
});

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.use(express.static(__dirname + '/images'));

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("listening on port 3000");
});
