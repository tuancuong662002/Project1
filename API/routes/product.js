const express = require('express');
const router = express.Router();
const Product = require('../app/models/Product');
const upload = require('../util/upload');
router.post('/store', upload.single('file'), (req, res, next) => {
    let formData = req.body
    if (req.file) {
        console.log(req.file.filename)
        formData.image = req.file.filename
    }
    let product = new Product(formData)
    product.save()
})
router.delete('/:id', (req, res, next) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: 'Product deleted successfully.' }))
        .catch(err => next(err))
})
router.put('/:id', upload.single('file'), (req, res, next) => {
    if (req.file) {
        console.log(req.file.path)
        console.log(req.file.filename)
        req.body.image = req.file.filename;
    }
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(product => res.json(product))
        .catch(err => next(err))
})
router.get('/', (req, res, next) => {
    Product.find({})
        .then(products => {
            res.json(products)
        })
        .catch(err => next(err))
})
module.exports = router;  