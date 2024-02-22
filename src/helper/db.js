import mongoose from "mongoose"
export const connectDb=async()=>{
    try{
       const {connection}=await  mongoose.connect(process.env.MONGO_DB_URI,{
            dbName:"work-manager"
        })
        console.log("db connected...");
        console.log("db connected with host : ",connection.host);

    }catch(err){
        console.log("failed to connect with db",err);
    }
}