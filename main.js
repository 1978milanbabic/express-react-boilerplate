// dependencies
import server from './app/webServer/server.js'
import socketServer from './app/webServer/ws.js'
import sampleWorker from './app/workers/sampleWorker.js'
// dotenv support
import {} from 'dotenv/config'
// init server
const port = process.env.HTTP_PORT || 1337
server.listen(port, () => {
  console.log('🚀 server is listening on port %s', port)
})
// init WS
socketServer(server)
// init file watchers
sampleWorker()
