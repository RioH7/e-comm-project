import User from '../models/User.js';

const getUsers = async(req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            success: true,
            count: users.length,
            data: users
    });
    } catch(error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) {
            return res.status(404).json({
                success: false,
                error: 'No user found'
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

const createUser = async(req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.password.user
    });

    try {
        const savedUser = await User.save();
        res.send({ id: savedUser._id });
    } catch(error) {
        if(error.code === 11000) {
            return res.status(400).send({ error: 'Email already in use' });
        }
        res.status(400).send(error);
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            },
            { new: true }
        );
        if (!user) return res.status(400).send({ message: "User not found" });
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.send({ message: 'User deleted' });
    } catch (error) {
        res.status(400).send(error);
    }
}

export { getUsers, getUserById, deleteUser, updateUser, createUser };