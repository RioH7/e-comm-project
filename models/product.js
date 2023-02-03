import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "Title is required"],
      maxlength: [100, 'Title must be less than 100 characters']
    },
    author: {
        type: String,
        required: [true, "Author is required"],
    },
    isbn: {
        type: Number,
        required: [true, "ISBN is required"],
        minlength: [10, 'ISBN must be 10 or 13 characters'],
        maxlength: [13, 'ISBN must be 10 or 13 characters']
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, 'Price must be at least 0']
    },
    image: String,
    category: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            enum: ['philosophy', 'business', 'self-improvement', 'biography', 'music', 'chess', 'indoor games', 'hobbies', 'psychology', 'health', 'coffee', 'home', 'cultural studies', 'fiction', 'magic', 'childrens books']
    }],
    pages: {
        type: Number,
        min: [0, 'Pages must be at least 0']
    }
});

// More efficient queries when searching by book title
productSchema.index({ title: 'text' });

const Product = mongoose.model('Product', productSchema);

export default Product ;