import mongoose from 'mongoose'
let Schema = mongoose.Schema

var RoomSchema = new Schema({
  full_name: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  people: {
    type: Number,
    required: true
  },
  room_type: {
    type: String,
    required: true
  },
  room_number: {
    type: Number,
    required: true
  },
  id_proof: {
    type: String,
    required: true
  },
  id_proof_number: {
    type: String,
    required: true
  },
  room_occupied: {
    type: Number,
    required: true
  },
  deleted: {
    type: Boolean, default: false
  },
  deleted_at: {
    type: Date
  }
},
{
  timestamps: true
})

export default mongoose.model('Room', RoomSchema)
