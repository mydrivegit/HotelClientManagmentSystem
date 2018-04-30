import jwt from 'jsonwebtoken'
const verifyToken = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SCRT)
    req.userData = decoded
    next()
  } catch (error) {
    res.status(401).send({
      message: 'Auth Failed'
    })
  }
}

export default verifyToken
