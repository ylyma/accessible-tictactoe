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
    client.join(joinSessionDto.roomId);
    this.server
      .to(joinSessionDto.roomId)
      .emit('friendJoined', joinSessionDto.friendName);
  }

  @SubscribeMessage('matching')
  matchRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() roomId: string,
  ): void {
    client.join(roomId);
  }

  @SubscribeMessage('move')
  move(
    @ConnectedSocket() client: Socket,
    @MessageBody() makeMoveSessionDto: makeMoveSessionDto,
  ) {
    this.server
      .to(makeMoveSessionDto.roomId)
      .emit('moved', makeMoveSessionDto.boardState);
  }
}
