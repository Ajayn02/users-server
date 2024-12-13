const users = require('../Models/userModel')
const jwt = require('jsonwebtoken')

// to register a user
exports.registerUser = async (req, res) => {
    try {
        const { name, email, age, phone, password } = req.body
        const newUser = new users({
            name, email, age, phone, password
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
}

// to get all users and filter by name
exports.getAllUsers = async (req, res) => {
    try {

        // to filter users by name
        const search=req.query.search

        const allUsers = await users.find({name:{$regex:search , $options:'i'}})
        res.status(200).json(allUsers)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
}

// to delete a specific user
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await users.findOneAndDelete({ _id: id })
        res.status(200).json(user)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }

}

// to edit user details
exports.editUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name, age, phone } = req.body
        const existingUser = await users.findOne({ _id: id })
        existingUser.phone = phone
        existingUser.age = age
        existingUser.name = name
        await existingUser.save()
        console.log(existingUser);

        res.status(200).json(existingUser)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
}


// Authentication
exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const existing = await users.findOne({ email, password })
        const val = jwt.sign({ userId: existing._id }, process.env.secretkey)
        // console.log(val);
        res.status(200).json({ userId: existing._id, token: val })
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }


}