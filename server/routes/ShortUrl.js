import express from 'express'
import {getShortendUrl,redirectToUrl,postShortendUrl} from '../controller/ShortUrl.js'

const router = express.Router()

router.get('/',getShortendUrl)
router.get('/:shortID',redirectToUrl)
router.post('/',postShortendUrl)

export default router