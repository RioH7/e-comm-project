import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    houseNum: {
        type: Number,
        required: true,
    },
    street: {
        type: String,
        required: [true, "Street is required"]
    },
    postcode: {
        type: String,
        required: true,
        maxlength: [8, 'Postcode must be at maximum 8 characters'],
    },
    city: {
        type: String,
        required: [true, "City is required"]
    },
    country: {
        type: String,
        required: true,
        default: "England"
    }
})

const Address = mongoose.model('Address', addressSchema);

export default Address;