import mongoose from 'mongoose'
import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import dotEnv from 'dotenv'
dotEnv.config()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:' + process.env.MONGOSERVERPORT + '/hotel_reservation_system', {}, (err) => {
  if (err) {
    throw err
  } else {
    console.log('Mongodb connected on port:' + process.env.MONGOSERVERPORT)
    let user = new User({
      username: 'admin',
      password: bcrypt.hashSync('admin', 10),
      first_name: 'admin',
      last_name: 'admin',
      role: 'Admin'
    })
    user.save(() => {
      setTimeout(() => {
        console.log('Super-user seeding is complete')
        mongoose.connection.close()
      }, 3000)
    })
  }
})
