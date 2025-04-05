import express from 'express'
import {getShortendUrl,redirectToUrl,postShortendUrl} from '../controller/ShortUrl.js'
import authentication from '../middlewares/AuthicateUser.js'

const router = express.Router()

router.get('/',authentication,getShortendUrl)
router.get('/:shortID',redirectToUrl)
router.post('/',authentication,postShortendUrl)

export default router