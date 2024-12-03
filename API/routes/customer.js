const express = require('express');
const router = express.Router();
const Customer = require('../app/models/Customer');
const upload = require('../util/upload');

router.post('/store', upload.single('file'), (req, res, next) => {
    let formData = req.body
    if (req.file) {
        console.log(req.file.filename)
        formData.image = req.file.filename
    }
    console.log(formData, formData.image)
    let customer = new Customer(formData)
    customer.save()
})

router.delete('/:id', (req, res, next) => {
    Customer.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: 'Product deleted successfully.' }))
        .catch(err => next(err))
})
router.put('/:id', upload.single('file'), (req, res, next) => {
    if (req.file) {
        console.log(req.file.path)
        console.log(req.file.filename)
        req.body.image = req.file.filename;
    }
    Customer.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(customer => res.json(customer))
        .catch(err => next(err))
})
router.get('/', (req, res, next) => {
    Customer.find({})
        .then(customers => {
            res.json(customers)
        })
        .catch(err => next(err))
})
module.exports = router;  