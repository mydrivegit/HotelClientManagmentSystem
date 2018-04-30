import express from 'express'
import roomList from '../controller/roomListController'
import verifyToken from '../middleware/auth-middleware'

// user List Routes
let room = express.Router()
room.use(verifyToken).route('/')
  .get(roomList.listAllRooms)
  .post(roomList.createRoom)

room.use(verifyToken).route('/:roomId')
  .get(roomList.readRoom)
  .patch(roomList.modifyRoom)

export default room
