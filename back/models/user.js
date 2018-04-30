import mongoose from 'mongoose'
// import pick from 'lodash/pick'

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

// UserSchema.methods.toJSON = function () {
//   let user = this
//   let userObject = user.toObject()
//   return pick(userObject, ['_id', 'username', 'firstName', 'lastName'])
// }

export default mongoose.model('User', UserSchema)
