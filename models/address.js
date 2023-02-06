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