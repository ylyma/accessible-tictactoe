import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class SessionGateway {
  @WebSocketServer()
  server: Server;

  handleConnection(client: any) {}

  handleDisconnection(client: any) {}
}
