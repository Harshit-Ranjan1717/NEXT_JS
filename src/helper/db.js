import mongoose from "mongoose";
import { User } from "@/models/user";
export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URI, {
      dbName: "work-manager",
    });
    console.log("db connected...");
    console.log("db connected with host : ", connection.host);

    /* //testing and creating new user
    const user = new User({
      name: "test name",
      email: "test@gmail.com",
      password: "testpassword",
      about: "this is a test user",
    });
    await user.save();
    console.log("user is created");*/

  } catch (err) {
    console.log("failed to connect with db", err);
  }
};
