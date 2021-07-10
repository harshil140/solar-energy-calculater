import express from 'express'
import {protect,admin} from '../middleware/authMiddleware.js' 
import { registerUser,authUser,getUsers } from './controller.js'

const router =express.Router()

router.route('/').post(registerUser).get(protect,admin,getUsers)
router.post('/login',authUser)
router.use(protect)


export default router