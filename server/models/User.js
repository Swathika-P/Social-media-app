import mongoose from "mongoose";
//passing object
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      //constraints
      type: String,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      require: true,
      min: 5,
    },
    PicturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
