import express from 'express'
import verifyToken from '../middleware/auth-middleware'
import usersController from '../controller/users'

let users = express.Router()

users.use(verifyToken).route('/')
  .get(usersController.usersGetAll)
  .patch(usersController.usersPatchUserdetails)
  .delete(usersController.usersDelete)

users.use(verifyToken).route('/profile')
  .get(usersController.usersGetProfile)

users.use(verifyToken).route('/update/:id')
  .patch(usersController.usersPatchdetailsId)

users.use(verifyToken).route('/delete/:id')
  .delete(usersController.usersDeleteById)

users.use(verifyToken).route('/:id')
  .get(usersController.usersGetAllParamsid)

export default users
