import {
    ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SessionGateway {
  @WebSocketServer()
  server: Server;

    handleConnection(@ConnectedSocket() client: any) {
  }

    handleDisconnect(@ConnectedSocket() client: any) {
  }

  @SubscribeMessage('join')
  joinRoom(@ConnectedSocket() client: any, @MessageBody() friendName: string): void {
    this.server.emit('friendJoined', friendName)
  }

}
