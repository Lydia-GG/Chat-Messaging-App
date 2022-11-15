import User from '../model/User.js';
import bcrypt from 'bcrypt';
export const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const checkUser = await User.findOne({ username });
    if (checkUser) {
      res.status(200).json({ msg: 'user already exists' });
    }
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      res.status(200).json({ msg: 'email is already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    delete user.password;
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Requiring ObjectId from mongoose npm package
const ObjectId = require('mongoose').Types.ObjectId;

// Validator function
function isValidObjectId(id) {
  if (ObjectId.isValid(id)) {
    if (String(new ObjectId(id)) === id) return true;
    return false;
  }
  return false;
}
