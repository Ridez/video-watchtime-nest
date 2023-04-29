import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { WatchtimeService } from './watchtime.service';
import { CreateWatchtimeDto } from './dto/create-watchtime.dto';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: { origin: 'http://localhost:3000' } })
export class WatchtimeGateway {
  constructor(private readonly watchtimeService: WatchtimeService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('createWatchtime')
  create(@MessageBody() createWatchtimeDto: CreateWatchtimeDto) {
    return this.watchtimeService.create(createWatchtimeDto);
  }
}
