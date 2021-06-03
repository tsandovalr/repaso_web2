const productsCtrl = {};
const Product = require('../models/Product');

productsCtrl.renderProductForm = (req, res) => {
   res.render('products/new-product');
};
productsCtrl.createNewProduct = async  (req, res) => {
    const { title, category, state, price, description } = req.body;
    const newProduct = new Product({ title, category, state, price, description });
    newProduct.user = req.user.id;
    await newProduct.save();
    req.flash('success_msg', 'Product Created Succesfully');
    res.redirect('/products')
};
productsCtrl.renderProducts =async (req, res) => {
    const products = await Product.find({user: req.user.id}).lean().sort({createAt : 'desc'});
    res.render('products/all-products', {products});
};
productsCtrl.renderEditForm = async(req, res) => {
    const product = await Product.findById(req.params.id);
    if (product.user != req.user.id){
        req.flash('error_msg', 'Not Authorized');
        return res.redirect('/products');
    } 
    res.render('products/edit-product', {product});
};
productsCtrl.uptadeProduct =async (req, res) => {
    const {title, category, state,  price, description}=req.body;
    await Product.findByIdAndUpdate(req.params.id, {title, category, state, price, description});
    req.flash('success_msg', 'Product Uptaded!');
    res.redirect('/products');
};
productsCtrl.deleteProduct = async(req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    req.flash('success_msg', 'Product Deleted!');
    res.redirect('/products')
};

module.exports = productsCtrl;
