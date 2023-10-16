import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://ylyma:99MOWhPdCACqnasq@localhost:27017', {
      dbName: 'gamedb',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
