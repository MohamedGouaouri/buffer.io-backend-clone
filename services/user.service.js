export const hashPassword = (password) => {
  return "hashed password";
};

export const createUser = (email, password, name) => {
  return {
    success: true,
    data: {
      id: 1,
      email,
      password,
      name,
    },
  };
};

export const checkIfUserExists = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

export const comparePassword = (password, hashedPassword) => {
  return true;
};
