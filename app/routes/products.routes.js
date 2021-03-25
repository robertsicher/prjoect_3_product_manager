const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req,res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req,res) => {
    const productname = req.body.productname;
    const manufacturer = req.body.manufacturer;
    const partnumber = req.body.partnumber;
    const productcategory = req.body.productcategory;
    const dimensions = req.body.dimensions;
    const productcolours = req.body.productcolours;
    const marketinginfo = req.body.marketinginfo;
    const  image_url = req.body.image_url;
    console.log("add post req.body:", req.body);
    console.log("add post req.query:", req.query);


    const newProduct = new Product({
        productname,
        manufacturer,
        partnumber,
        productcategory,
        dimensions,
        productcolours,
        marketinginfo,
        image_url
    });

    newProduct.save()
    .then(() => res.json('Product Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    Product.findById(req.params.id)
    .then(product => {
        product.productname = req.body.productname;
        product.manufacturer = req.body.manufacturer;
        product.partnumber = req.body.partnumber;
        product.productcategory = req.body.productcategory;
        product.dimensions = req.body.dimensions;
        product.productcolours = req.body.productcolours;
        product.marketinginfo = req.body.marketinginfo;
        product.image_url = req.body.image_url;
        product.save()
        .then(() => res.json('Product Updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })

    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;