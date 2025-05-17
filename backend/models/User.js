import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: String,
  email: String,
  displayName: String,
  photo: String,
  uuid: String,
});

const User = mongoose.model('User', userSchema, 'google-oauth-users');

export default User;