import UserModel from "../../model/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const logUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email, !password) {
            return res.status(400).json({
                message: "Both fields req!",
                status: false
            })
        }

        const find = await UserModel.findOne({ email })

        if (!find) {
            return res.status(404).json({
                message: "User not Found!",
                status: false
            })
        }

        const decode = await bcrypt.compare(password, find.password)

        if (!decode) {
            return res.status(401).json({
                message: "Incorrect password!",
                status: false
            })
        }

        const token = jwt.sign(
            {id : find._id , email : find.email , role : find.role},
            process.env.JWT_SECRET,
            {expiresIn : '60m'}
        )

        res.cookie('accessToken' , token , {
            httpOnly : true,
            secure : false,
            sameSite : "lax", // For localhost
            // secure : true , 
            // sameSite : "none" ,
            maxAge : 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            message: "Logged IN successfully!",
            status: true,
            user: {
                id: find._id,
                name: find.name,
                email: find.email
            },
            token :token
            
        })


    } catch (error) {
        return res.status(500).json({
            message: "Error Ouccured!",
            status: false,
            error: error.message
        })
    }
}