// dependencies
import { Server } from 'socket.io'

const socketServer = serverToBind => {
  const wsServer = new Server(serverToBind, { 'destroy upgrade': false })
  console.log('🕸  Socket Server initialized')
  wsServer.on('connection', clientSocket => {
    console.log('Socket Server connected')
    clientSocket.on('refresh', () => {
      wsServer.emit('refresh', 'refresh')
    })
    clientSocket.on('motion', () => {
      wsServer.emit('motion', 'motion')
    })
    clientSocket.on('detect', args => {
      wsServer.emit('detect', args)
    })
  })
  return wsServer
}

export default socketServer
