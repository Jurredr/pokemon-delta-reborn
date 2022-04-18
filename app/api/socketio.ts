import { BlitzApiHandler, BlitzApiRequest, BlitzApiResponse } from 'next'
import { Server, Server as ServerIO, Socket } from 'socket.io'
import { Server as NetServer } from 'http'

type BlitzApiResponseServerIO = BlitzApiResponse & {
  socket: {
    server: {
      io: Server
    }
  }
}

const handler: BlitzApiHandler = (req: BlitzApiRequest, res: BlitzApiResponseServerIO) => {
  if (!res.socket.server.io) {
    console.log('New Socket.io server...')
    // adapt Next's net Server to http Server
    const httpServer: NetServer = res.socket.server as any
    const io = new ServerIO(httpServer, {
      path: '/api/socketio'
    })

    io.on('connection', (socket) => {
      socket.broadcast.emit('a user connected')
      socket.on('hello', (msg) => {
        socket.emit('hello', 'world!')
      })
    })

    // append SocketIO server to Next.js socket server response
    res.socket.server.io = io
  }
  res.end()
}
export default handler
