import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { JoinSessionDto } from 'dto/join-session.dto';
import { makeMoveSessionDto } from 'dto/make-move-session.dt';
import { Server, Socket } from 'socket.io';

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
    @ConnectedSocket() client: Socket,
    @MessageBody() joinSessionDto: JoinSessionDto,
  ): void {
    this.server.emit('friendJoined', joinSessionDto.friendName);
    client.join(joinSessionDto.roomId);
  }

  @SubscribeMessage('move')
  move(
    @ConnectedSocket() client: Socket,
    @MessageBody() makeMoveSessionDto: makeMoveSessionDto,
  ) {
    this.server
      .to(makeMoveSessionDto.roomId)
      .emit('move', makeMoveSessionDto.boardState);
  }
}
