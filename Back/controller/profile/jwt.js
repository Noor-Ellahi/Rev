import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import UserModel from "../../model/User.js";



export const jwtLog = async (req, res) => {
    try {
        const token = req.cookies.accessToken

        console.log(token)

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized!",
                status: false
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET)

        console.log(decode)

        const find = await UserModel.findById(decode.id).select('-password')

        if (!find) {
            return res.status(400).json({ message: "User not Found!" })
        }


        return res.status(200).json({
            message: "User fetched!",
            status: true,
            user: find
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error Ouccured!",
            status: false,
            error: error.message
        })
    }
}