import { UserModel } from "../models/User.js";

export const hashPassword = (password) => {
  return password;
};

export const createUser = (email, password, name) => {
  // let user = new UserModel({ email, password, name });
  // return user.save();
  return UserModel.create({ email, password, name });
};

export const checkIfUserExists = (email) => {
  return UserModel.findOne({ email: email });
};

export const comparePassword = (password, hashedPassword) => {
  return true;
};
