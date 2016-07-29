var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var async = require('async');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(smtpTransport({
  service: 'Zoho',
  auth: {
    user: process.env.W_SMTP_EMAIL,
    pass: process.env.W_SMTP_PASS
  }
}));

var EmailTemplate = require('email-templates').EmailTemplate;
var path = require('path');

var templateDir = path.join(process.cwd(), 'templates', 'welcome');
// gera uma nova instância
var welcomeEmail = new EmailTemplate(templateDir);

var async = require('async');

var users = [
  { name: 'Alberto Souza', email: 'contato@albertosouza.net', locale: 'pt-br' },
  { name: 'We.js', email: 'alberto@wejs.org', locale: 'en-us' }
];

async.each(users, function (user, next) {
  // render the pt-br localized template:
  welcomeEmail.render({
    user: user
  }, user.locale, function (err, result) {
    if (err) {
      return next(err);
    }
    // result.html
    // result.text
    // result.subject

    // setup e-mail data with unicode symbols
    var mailOptions = {
      from: '"We.js" <contact@wejs.org>', // sender address
      to: user.email,
      subject: 'Test email in '+user.locale, // Subject line
      text: result.text, // plaintext body
      html: result.html // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        return console.log('Error on send:', error);
      }
      console.log('Message sent: ' + info.response);
      // email send
      next();
    });
  });
}, function (err) {
  console.error(err);
});