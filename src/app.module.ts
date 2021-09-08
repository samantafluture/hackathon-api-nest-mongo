import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';

@Module({
  imports: [MongooseModule.forRoot('MONGO_URL'), EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
