// carregando as libs
var express = require('express')
var multer  = require('multer')
var uuid = require('uuid')

// iniciando um novo storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, uuid.v4())
  }
})
// criando uma instancia do upload middleware
var upload = multer({ storage: storage })

var app = express()

// -- servindo arquivos da pasta publica

app.use(express.static('public'));


//
// -- 1 arquivo em 1 campo
//

app.post('/profile', upload.single('avatar'), function (req, res) {

  console.log('o arquivo foi salvo na pasta uploads com o nome:', req.file.filename);

  // salve os dados desse arquivo em um banco ...
  console.log('dados:\n', req.file);

  // req.body vai conter outros dados enviados no form

  res.redirect('/');
})

//
// -- Vários arquivos em 1 campo
//

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {

  console.log('arquivos>', req.files);
  // req.files é um array de `photos`
  // req.body vai conter outros dados enviados no form


  res.redirect('/');
})

app.listen(3000, function() {
  console.log('inicinando na porta 3000');
})