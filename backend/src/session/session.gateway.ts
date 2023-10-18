import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { JoinSessionDto } from 'dto/join-session.dto';
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

  handleConnection(@ConnectedSocket() client: any) {}

  handleDisconnect(@ConnectedSocket() client: any) {}

  @SubscribeMessage('join')
  joinRoom(
    @ConnectedSocket() client: any,
    @MessageBody() joinSessionDto: JoinSessionDto,
  ): void {
    this.server.emit('friendJoined', joinSessionDto.friendName);
    client.join(joinSessionDto.roomId);
  }
}
