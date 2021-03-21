const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req,res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req,res) => {
    const productname = req.body.productname;


    const newProduct = new Product({
        productname,
    });



    newProduct.save()
    .then(() => res.json('Product Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;