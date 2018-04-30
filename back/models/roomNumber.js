import mongoose from 'mongoose'
let Schema = mongoose.Schema

var RoomNumberSchema = new Schema({
  room_number: {
    type: Number,
    required: true
  },
  room_availability: {
    type: String,
    required: true
  },
  room_booked_id: {
    type: String,
    required: true
  }
})

export default mongoose.model('Room', RoomNumberSchema)
