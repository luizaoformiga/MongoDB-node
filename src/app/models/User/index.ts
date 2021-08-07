import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    uppercase: true,
    minlength: 3,
    maxlength: 100,
  },
  registration: {
    type: Number,
    required: true,
    min: 3,
    max: 9999,
    unique: true,
  },
  active: {
    type: Boolean,
    default: true,
    required: true,
  },
  adress: {
    city: {
      type: String,
      require: true,
      minlength: 3,
      maxlength: 100,
    },
    state: {
      type: String,
      require: true,
      minlength: 2,
      maxlength: 2,
    },
  },
  register: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("Users", userSchema);

export default UserModel;
