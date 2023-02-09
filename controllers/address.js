import Address from "../models/Address.js";

const getAddresses = async(req, res) => {
    try {
        const addresses = await Address.find();
        res.send(addresses);
    } catch(error) {
        res.status(400).send(error);
    }
};

const getAddressById = async(req, res) => {
    try {
        const address = await Address.findById(req.params.id);
        res.send(address);
    } catch(error) {
        res.status(400).send(error);
    }
}

const createAddress = async(req, res) => {
    const address = new Address({
        houseNum: req.params.houseNum,
        street: req.params.street,
        postcode: req.params.postcode,
        city: req.params.city,
        country: req.params.city
    });

    try {
        const savedAddress = await Address.save();
        res.send({ id: savedAddress._id });
    } catch(error) {
        res.status(400).send(error);
    }
}

const updateAddress = async(req, res) => {
    try {
        const address = await Address.findByIdAndUpdate(
            req.params.id, 
            {
                houseNum: req.params.houseNum,
                street: req.params.street,
                postcode: req.params.postcode,
                city: req.params.city,
                country: req.params.city
            },
            { new: true }
        );
        if(!address) return res.status(400).send({ message: 'Address not saved'});
        res.send(address);
    } catch(error) {
        res.status(400).send(error);
    }
}

const deleteAddress = async (req, res) => {
    try {
        const address = await Address.findByIdAndDelete(req.params.id);
        if (!address) {
            return res.status(404).send({ message: 'Address not found' });
        }
        res.send({ message: 'Address deleted' });
    } catch (error) {
        res.status(400).send(error);
    }
}

export { getAddressById, getAddresses, createAddress, deleteAddress, updateAddress };