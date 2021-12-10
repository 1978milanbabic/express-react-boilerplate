// module dependencies
import express from 'express'
import bodyParser from 'body-parser'

// init router
const router = express.Router()

// admin get
router.get('/', (req, res, next) => {
  res.send('You are on API page')
})

export default router
