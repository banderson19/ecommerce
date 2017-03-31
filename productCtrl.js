var app = require('./index');
var db = app.get('db');

module.exports = {
  // GET /api/products GET /api/products/:id
  grab: function(req, res, next) {
    db.get_products(function(err, products) {
      console.log(err, products)
      res.json(products)
    });
  },
  grabOne: function (req, res, next) {
    db.get_product([req.params.id], function(err, product) {
      console.log(err, product)
      res.json(product)
    });
  },
  // POST /api/products
  create: function(req, res, next) {
    const { product } = req.body;
      db.create_product([product], function(err, product) {
        console.log(err, product);
        res.json(product)
      });
    },
  // PUT /api/products/:id
  update: function(req, res, next) {
    // db.update_product([req.params.id], function(err, product) {
    //   console.log(err, product)
    //   res.json(product)
    // });
    res.send("Once I was a cow but then I was PUT in api/products with " + req.params.id);
  },
  // DELETE /api/products/:id
  destroy: function(req, res, next) {
    // db.delete_product([req.params.id], function(err, product) {
    //   console.log(err, product)
    //   res.json(product)
    // });
    res.send("I have deleted something, especially not " + req.params.id)
  }
}
