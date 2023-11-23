import express from 'express'
import {test, updateUser, deleteUser, getUserListing} from '../controllers/user.controllers.js'
import { verifyToken } from '../utils/verifyUser.js'
const router = express.Router()

router.get('/test', test)

router.post('/update/:userId', verifyToken ,updateUser)

router.delete('/delete/:userId', verifyToken, deleteUser)

router.get('/listings/:userId', verifyToken, getUserListing)


export default router