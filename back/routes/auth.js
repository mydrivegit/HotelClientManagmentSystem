import express from 'express'
import authController from '../controller/auth'
import verifyToken from '../middleware/auth-middleware'

let auth = express.Router()
auth.route('/login')
  .post(authController.usersLoginIn)
auth.use(verifyToken).route('/signup')
  .post(authController.usersSignUp)
export default auth
