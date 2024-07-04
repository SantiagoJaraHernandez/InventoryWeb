import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: {type: String},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Otros campos según las necesidades del sistema
  fullName: { type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now }
});

usuarioSchema.pre('save', async function(next) {
  if (!this.isModified("password")) {
      next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = bcrypt.hash(this.password, salt);
});

usuarioSchema.methods.comprobarPassword = async function (passwordFormulario) {
  return await bcrypt.compare(passwordFormulario, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;
