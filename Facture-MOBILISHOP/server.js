//imports

const express = require('express')


//instantiation du server
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes

// app.post('/invoice/post', (req, res) => {
//     console.log(req.body);
//     res.status(201).send('Création de la facture');
// })

// app.use(express.static(__dirname)); // CSS static

// app.get('/invoice', function(request, response) { // HTML
//     response.sendFile( __dirname  + '/facture.html');
//   });

// app.get('/', function(request, response) { // HTML
//     response.sendFile( __dirname  + '/index.html');
// });

var Twig = require("twig");

var fs = require('fs');
app.post('/Registration', function (req, res) {
   var data = {
      'full_name': req.body.full_name, // le nom complet
      'address': req.body.address,
      'postal_code': req.body.postal_code ,
      'city': req.body.city,
      'invoice_number': req.body.invoice_number ,// le numéro de la facture
      'invoice_paid_at': req.body.invoice_paid_at, // date d'émission et de paiement
      'lines': [{
        'line_description': req.body.line_description, // la description de la ligne
        'line_quantity': req.body.line_quantity,
        'line_amount': req.body.line_amount,
      }], // un tableau d'objet
  
      'invoice_total': req.body.invoice_total // le montant total de la facture
  
    };

   var template = Twig.twig({
    data: 'The {{ baked_good }} is a lie.'
});

console.log(template.render({baked_good: 'popo'}));

// return res.send({}); 


   fs.readFile( __dirname + '/home.html.twig', 'utf8', function(err, content) {
      var result = content;

      var template = Twig.twig({
        data: content
    });
    
      res.send(template.render({
        full_name: req.body.full_name,
        address: req.body.address,
        postal_code: req.body.postal_code ,
        city: req.body.city,
        invoice_number: req.body.invoice_number ,
        invoice_paid_at: req.body.invoice_paid_at, 
        lines: req.body.lines, 
        invoice_total: req.body.invoice_total 
      }));
  
   });
});





app.listen(8080, function(){
    console.log('Server en écoute ;) !');
});