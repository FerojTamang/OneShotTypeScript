import mongoose from "mongoose";
import envConfig from "./config";

const connectToDatabase = async ()=> {
   try {
    
    mongoose.connection.on ("connected", ()=> {
        console.log ("connect to db successfully")

   })
   
   await mongoose.connect(envConfig.mongodbString as string)

   } catch (error) {
    console.log ("failed to connect to db !!!")
    process.exit (1)
    
   }
}

export default connectToDatabase 
