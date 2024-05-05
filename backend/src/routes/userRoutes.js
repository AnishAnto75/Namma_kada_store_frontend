import express from 'express'
import { createUser , getAllUsers, getUser , updateUser} from '../controllers/userController.js'

const router = express.Router()

router.post('/' , createUser)
router.put('/:id' , updateUser)
router.get('/:id' , getUser)
router.get('/' , getAllUsers)

export default router