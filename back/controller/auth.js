import bcrypt from 'bcryptjs'
import dotEnv from 'dotenv'
import jwt from 'jsonwebtoken'
import User from '../models/user'
//  dotenv config
dotEnv.config()

let usersSignUp = (req, res, next) => {
  User.find({ username: req.body.username })
    .exec()
    .then(user => {
      if (user.lenght >= 1) {
        return res.status(409).json({
          message: 'User already exits'
        })
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) {
            res.status(201).send({
              message: err.errmsg
            })
          } else {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
              if (err) {
                res.status(201).send(err)
              } else {
                const user = new User({
                  password: hash,
                  username: req.body.username,
                  first_name: req.body.first_name,
                  last_name: req.body.last_name,
                  role: req.body.role
                })
                user.save().then((result) => {
                  res.status(201).send({
                    message: 'User created Successfully',
                    user
                  })
                }).catch((err) => {
                  res.status(500).json({
                    message: err.errmsg
                  })
                })
              }
            })
          }
        })
      }
    })
}

let usersLoginIn = (req, res, next) => {
  User.find({ username: req.body.username })
    // { $or: [{ _id: req.body.username }, { username: req.body.username }] }
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'Authentication failed'
        })
      }
      bcrypt.compare(req.body.password, user[0].password, function (err, result) {
        if (err) {
          return res.status(401).json({
            message: 'Authentication failed'
          })
        }
        if (result) {
          let token = jwt.sign({
            username: user[0].username,
            userId: user[0]._id
          }, process.env.JWT_SCRT, {
            expiresIn: '1h'
          })
          return res.status(200).json({
            message: 'Your are Logged-In Successfully',
            token: token
          })
        }
        return res.status(401).json({
          message: 'Authentication failed'
        })
      })
    })
    .catch({
      message: 'Authentication failed'
    })
}

export default { usersLoginIn, usersSignUp }
