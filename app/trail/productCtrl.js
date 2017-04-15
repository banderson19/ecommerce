var app = require('../../server');
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
    db.get_product([req.params.productid], function(err, product) {
      console.log(err, product)
      res.json(product)
    });
  },
  // POST /api/products
  create: function(req, res, next) {
    const { product, price } = req.body;
      db.create_product([product, price], function(err, product) {
        console.log(err, product);
        res.json(product)
      });
    },
  // PUT /api/products/:id
  update: function(req, res, next) {
    const { product, price} = req.body;
    db.update_product([product, price, req.params.productid], function(err, product) {
      console.log(req.body)
      res.json(product)
    });
  },
  // DELETE /api/products/:id
  destroy: function(req, res, next) {
    db.delete_product([req.params.productid], function(err, product) {
      console.log(err, product)
      res.json(product);
    });
  }
}
