// console.log("Sever workings!")


import morgan from "morgan";
import express from "express";
import cors from "cors"
import connectDatabase from "./config/db.js";
import cookieParser from "cookie-parser";


// Routes:
import router from "./routes/userRoutes.js";





// static variables:
const app = express();
const port = 3000;
// const Names = ['George' , 'John' , 'Dahmer' , 'Shiron' ]


// DB connection 

connectDatabase()


// Middle wares :
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(cookieParser());





// Api:

app.use('/api' , router)

// export default app


// app.get(
//     "/",
//     (req ,res) =>{
//         return res.status(200).send({
//             message : "SERVER IS RUNNGING",
//             status : true,
//             // data : Names
//         })
//     }
// )

// Server run ;




app.listen(
    port,
    () => {
        console.log(`Server is running on port ${port}`)
    }
)