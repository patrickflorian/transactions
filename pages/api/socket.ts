import { NextApiRequest, NextApiResponse } from 'next'
import { NodeNextResponse } from 'next/dist/server/base-http/node'
import { Server } from 'socket.io'

const SocketHandler = (req: NextApiRequest, res: NextApiResponse) => {
    // @ts-ignore
    if (res.socket.server.io) {
        console.log('Socket is already running')
    } else {
        console.log('Socket is initializing')
        // @ts-ignore
        const io = new Server(res.socket.server)
        // @ts-ignore
        res.socket.server.io = io

        io.on('connection', socket => {
            socket.on('input-change', msg => {
                socket.broadcast.emit('update', msg)
            })
        })
    }
    res.end()
}

export default SocketHandler