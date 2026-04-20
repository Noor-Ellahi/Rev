import mongoose from "mongoose";
import dotenv from 'dotenv'

import dns from 'dns';
dns.setServers(['1.1.1.1' , '8.8.8.8'])

dotenv.config()

const connectDatabase = async () => {
    try {
        const connect = await mongoose.connect(
            process.env.MONGO_URI,
            {
                dbName: 'Revision'
            }
        )
        console.log("Connected Successfully to mongoDb")

    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        process.exit(1); // Exit process with failure

    }
}


export default connectDatabase;