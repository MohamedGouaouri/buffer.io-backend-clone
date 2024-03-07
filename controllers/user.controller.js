import {
  checkIfUserExists,
  comparePassword,
  createUser,
  hashPassword,
  generateToken
} from "../services/user.service.js";

export const createUserController = async (req, res) => {
  try {
    let { email, password, name } = req.body;

    // check if user already exists
    let userExists = await checkIfUserExists(email);

    if (userExists) {
      res.status(400).send("User already exist");
    }
    // hash the password
    password = hashPassword(password);

    // Create our user in the DB
    let user = await createUser(email, password, name);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const signinUserController = async (req, res) => {
  let { email, password } = req.body;

  // check if user already exists
  let user = await checkIfUserExists(email);

  if (user) {
    res.status(400).send("User does not exist");
  }

  let passwordMatch = comparePassword(password, user.password);

  if (!passwordMatch) {
    res.status(400).send("Password is incorrect");
  }

  // Generate a token
  try {
    let token = generateToken(user.id);

    res.status(200).send({
      token,
      message: "User logged in",
    });
  } catch (error) {
    res.status(500).send("Password is incorrect");
  }
};
