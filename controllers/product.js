import Product from '../models/Product.js'

const getProducts = async(req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch(error) {
       res.status(400).send(error);
    }
}

const getProductById = async(req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404).send({ error: 'Product not found'});
        res.send(product);
    } catch(error) {
        res.status(400).send(error);
    }
}

const createProduct = async(req, res) => {
    const product = new Product({
        title: req.body.name,
        author: req.body,author,
        isbn: req.body.isbn,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        pages: req.body.pages
    });

    try {
        const savedProduct = await Product.save();
        res.send({ id: savedProduct._id });
    } catch(error) {
        res.status(400).send(error);
    };
};

const updateProduct = async(req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.name,
                author: req.body,author,
                isbn: req.body.isbn,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
                pages: req.body.pages
            },
            { new: true }
        );
        if(!product) return res.status(400).send({ message: 'Product not found'});
        res.send(product);
    } catch(error) {
        res.status(400).send(error);
    }
};

const deleteProduct = async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }
        res.send({ message: 'Product deleted' });
    } catch (error) {
        res.status(400).send(error);
    }
}

export { getProductById, getProducts, createProduct, deleteProduct, updateProduct };