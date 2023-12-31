import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GameSchema } from 'schema/game.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GameController } from './game/game.controller';
import { GameService } from './game/game.service';
import { SessionGateway } from './session/session.gateway';
import { SessionModule } from './session/session.module';

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
    SessionModule
  ],
  controllers: [AppController, GameController],
  providers: [AppService, GameService],
})
export class AppModule {}
