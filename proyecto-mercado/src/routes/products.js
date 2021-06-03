const express = require('express')
const router = express.Router()

const { 
    renderProductForm,
    createNewProduct,
    renderProducts,
    renderEditForm,
    uptadeProduct,
    deleteProduct } = require('../controllers/products');

    const {isAuthenticated}= require('../helpers/auth')

//new products to add
router.get('/products/add',isAuthenticated, renderProductForm);
router.post('/products/new-product', isAuthenticated, createNewProduct);



//get * produts
router.get('/products',isAuthenticated, renderProducts)




//edit products
router.get('/products/edit/:id',isAuthenticated, renderEditForm)
router.put('/products/edit/:id', isAuthenticated,  uptadeProduct)



//Delete notes
router.delete('/products/delete/:id',isAuthenticated, deleteProduct)


module.exports = router