# Projet Facture UFT
[![Scala](https://img.shields.io/badge/scala-2.11.0-5CC6E4.svg)](https://www.scala-lang.org/download/2.11.0.html) [![pipeline status](http://gitlab.intranet.mymoneybank.fr/finance/grom/spark-jobs/badges/develop/pipeline.svg)](http://gitlab.intranet.mymoneybank.fr/finance/grom/spark-jobs/commits/develop) [![coverage report](http://gitlab.intranet.mymoneybank.fr/finance/grom/spark-jobs/badges/develop/coverage.svg)](http://gitlab.intranet.mymoneybank.fr/finance/grom/spark-jobs/commits/develop)
## Introduction
Le projet à pour but de générer une facture UFT en convertissant la page html en format pdf.

## Usage
Afin de lancer le projet, il faut lancer les commandes suivante :
```js
npm init
npm install express
npm install -g nodemon
nodemon server.js // pour lancer le serveur
```
### Explications
#### Explications fonctionnelles
La Facture contient plusieurs éléments, et parmis ses derniers nous avons utilisés des données variables qui sont les suivantes  :
- adresse
- invoice_number
- invoice_paid_at
- lines :
    * line_description
    * line_quantity
    * line_amount
- invoice_total

D'autres données on les a toujours pas utilisés comme :
- full_name
- postal_code
- city

Afin de récupérer ses données, nous allons utiliser node js pour créer les données et les afficher dans la partie front grâce à l'outil Postman.
## Explications techniques

### Suivre les étapes suivants :


 ### Etape 1
- Inclure le module File System ("fs"), en utilisant la méthode require() à fin de lire le contenu du fichier par la suite.
```js
var fs = require('fs');
...
fs.readFile( __dirname + '/home.html.twig', 'utf8', function(err, content) {
      var result = content;

      var template = Twig.twig({
        data: content
    });
...
```



  ### Etape 2 
 - La fonction post qui a comme paramètres (request, response) contiens un objet "data" où il y aura tous les différents type de datas qu'on va request et en suite retourner "response", tous ça pour poster les éléments de data {} dans le le fichier home.html.twig .
```js
app.post('/Registration', function (req, res) {
   var data = {
      'full_name': req.body.full_name, // le nom complet
      'adresse': req.body.adresse,
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
,,,
res.send(template.render({
        full_name: req.body.full_name,
        adresse: req.body.adresse,
        postal_code: req.body.postal_code ,
        city: req.body.city,
        invoice_number: req.body.invoice_number ,
        invoice_paid_at: req.body.invoice_paid_at, 
        lines: req.body.lines, 
        invoice_total: req.body.invoice_total 
}));
```

- La méthode render a été utiliser pour rendre la vue et envoie le template HTML rendue au client,


 ### Etape 3

- Utilisation des doubles accolades "{{}}" dans le fichier home.html.twig pour appeler les valeurs des éléments de l'objet datas exemple :
```js
 <div class="desc">{{ line.line_description }}</div>
<div class="qte">{{ line.line_quantity }}</div>
<div class="pu"> {{line.line_amount}}</div>

- Ces deux fontions permettent de définir le format de body pour que l'outil Postman puisse les traiter
il y a deux types de body :
 - JSON
 - x-www-form-urlencoded
```js
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
```

## Avis sur le code
#### Il faut modifier le HTML et le CSS pour qu'il corrrespond parfaitement à la maquette de la facture.
