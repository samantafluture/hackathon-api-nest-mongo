/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';

@Module({
  imports: [MongooseModule.forRoot(`${process.env.MONGODB_URL}`), EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
