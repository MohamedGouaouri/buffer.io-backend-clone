import { UserModel } from "../models/User.js";
import bcrypt from 'bcrypt'

export const hashPassword = (password) => {
  // Generate a salt
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(password, salt)
  return hashedPassword;
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
  return bcrypt.compareSync(password, hashedPassword)
};

export const generateToken = (data) => {
  return data
}