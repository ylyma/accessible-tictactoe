import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GameSchema } from 'schema/game.schema';
import { SessionGateway } from './session/session.gateway';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://ylyma:99MOWhPdCACqnasq@localhost:27017', {
      dbName: 'gamedb',
    }),
    MongooseModule.forFeature([{ name: 'Game', schema: GameSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService, SessionGateway],
})
export class AppModule {}
