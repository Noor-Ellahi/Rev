import express from 'express'
import { getUser, addUser } from '../controller/auth/RegisterCont.js'
import { logUser } from '../controller/auth/LoginCont.js'
import { jwtLog } from '../controller/profile/jwt.js'




const router = express.Router()


// Register
router.post('/addUser' , addUser)
router.get('/getUser' , getUser)

// Login 
router.post('/logUser' , logUser)

// jwt
router.get('/jwtLog' , jwtLog)

export default router