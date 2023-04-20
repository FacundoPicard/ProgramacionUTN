var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post("/", async (req, res, next) => {

console.log(req.body)

var nombre = req.body.nombre;
var email = req.body.email;
var asunto = req.body.asunto;
var mensaje = req.body.mensaje;

var obj = {
  to: "facundopicard09@gmail.com",
  subject: "Contacto desde el portfolio",
  html: nombre + " " + " se contacto a traves del portfolio y quiere una respuesta a este correo" + " " + email + ". Ademas dejo el siguiente mensaje" + " " + mensaje
}

var transporter = nodemailer.createTransport ({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

var info = await transporter.sendMail(obj);

res.render("index", {
  message: "Mensaje enviado correctamente",
});


})



module.exports = router;
