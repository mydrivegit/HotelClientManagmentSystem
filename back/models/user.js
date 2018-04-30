import mongoose from 'mongoose'

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  first_name: String,
  last_name: String
},
{
  timestamps: true
})

export default mongoose.model('User', UserSchema)
