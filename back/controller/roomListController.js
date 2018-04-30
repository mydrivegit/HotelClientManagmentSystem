import Room from '../models/roomListModel'

let listAllRooms = (req, res, next) => {
  Room.find({}, (err, result) => {
    if (err) {
      res.send(err)
    }
    res.json(result)
  })
}

let createRoom = (req, res, next) => {
  var newRoom = new Room(req.body)
  newRoom.save((err, result) => {
    if (err) {
      res.send(err)
    }
    res.json(result)
  })
}

let deleteRoom = (req, res, next) => {
  Room.remove({
    _id: req.params.roomId
  }, (err, result) => {
    if (err) {
      res.send(err)
    }
    res.json({ result: 'Room successfully deleted' })
  })
}

let modifyRoom = (req, res, next) => {
  const _roomId = req.params.roomId
  const updateOps = {}
  for (const key of Object.keys(req.body)) {
    updateOps[key] = req.body[key]
  }
  Room.update({ _id: _roomId }, { $set: updateOps }, (err, result) => {
    if (err) {
      res.send(err)
    }
    res.json({ result: 'Room successfully deleted' })
  })
}

let readRoom = (req, res, next) => {
  Room.findById(req.params.roomId, (err, result) => {
    if (err) {
      res.send(err)
    }
    res.json(result)
  })
}

export default { listAllRooms, createRoom, deleteRoom, readRoom, modifyRoom }
