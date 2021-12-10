// module dependencies
import path, { join } from 'path'
import { createServer } from 'http'
import helmet from 'helmet'
import morgan from 'morgan'
import express from 'express'
import { createProxyMiddleware as proxy } from 'http-proxy-middleware'
import admin from '../routes/admin/index.js'
import api from '../routes/api/index.js'
// dotenv support
import {} from 'dotenv/config'

// __dirname support
const __dirname = path.resolve()

// initialize express
const app = express()

// initialize http server
const server = createServer(app)

// request logger
app.use(morgan('tiny'))

// secure express
app.use(helmet({
  contentSecurityPolicy: false,
}))

// development mode
let isDev = true
if (process.env.NODE_ENV === 'production') isDev = false

// env specific
let reactProxy
if (isDev) {
  // react dev server proxy
  reactProxy = proxy({
    target: `http://localhost:${process.env.REACT_PORT || 1234}`,
    changeOrigin: true,
    ws: true
  })
} else {
  // serve static files from parcel dist folder
  app.use(express.static(join(__dirname, 'dist')))
}

// mount api routes
app.use('/api', api)

// mount admin (react-password-protected) routes
app.use('/admin', admin)

// mount react app route
app.use((req, res, next) => {
  if (req.method.toLowerCase() === 'get' && isDev) {
    return reactProxy(req, res, next)
  } else if (req.method.toLowerCase() === 'get') {
    return res.sendFile(join(__dirname, 'dist', 'index.html'))
  } else {
    // ignore non-get requests
    return next()
  }
})

export default server
