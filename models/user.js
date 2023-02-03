import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        maxlength: [30, 'Name must be less than 30 characters']
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        validate: {
            validator: v => v.includes('@'),
            message: props => `${props.value} is not an email.`
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
});

const User = mongoose.model('User', userSchema);

export default User;