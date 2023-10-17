import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { MongooseModule } from '@nestjs/mongoose';
import { GameSchema } from 'schema/game.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SessionGateway } from './session/session.gateway';
import { GameController } from './game/game.controller';
import { GameService } from './game/game.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_LOCAL_URI'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: 'Game', schema: GameSchema }]),
  ],
  controllers: [AppController, GameController],
  providers: [AppService, GameService, SessionGateway],
=======
import { GameService } from './game/game.service';
import { GameController } from './game/game.controller';

@Module({
  imports: [],
  controllers: [AppController, GameController],
  providers: [AppService, GameService],
>>>>>>> 872842fa34f86361ecfe2fac134baa146a11c1cc
})
export class AppModule {}
