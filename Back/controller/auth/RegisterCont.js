import UserModel from "../../model/User.js";
import bcrypt from 'bcrypt'


export const getUser = async (req, res) => {
    try {

        const Users = await UserModel.find({})

        return res.status(200).json({
            status: true,
            message: "All the users in the list",
            User: [Users]
        })


    } catch (error) {
        return res.status(500).json({
            message: "Error Ouccured!",
            status: false,
            error: error.message
        })
    }
}

export const addUser = async (req, res) => {

    try {
        const { name, email, password } = req.body

        if (!name || !email, !password) {
            return res.status(400).json({
                message: "All fields are req!",
                status: false
            })
        }

        // console.log(name)

        const findUser = await UserModel.findOne({ email })

        if (findUser) {
            return res.status(409).json({
                message: "User Already exist",
                status: false
            })
        }

        const hashedPass = await bcrypt.hash(password, 10)
        const newUser = await UserModel.create({
            name,
            email,
            password: hashedPass
        })

        return res.status(200).json({
            message: "User created successfully!",
            status: true,
            person: newUser
        })



    } catch (error) {
        return res.status(500).json({
            message: "Error ouccured!",
            status: false,
            error: error.message
        })
    }
}



