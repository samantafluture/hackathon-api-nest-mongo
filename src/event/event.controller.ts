import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.model';

@Controller('event')
export class EventController {
  constructor(private service: EventService) {}

  @Get('all')
  async findAll() {
    return this.service.findAll();
  }

  @Get('find/:id')
  get(@Param() params) {
    return this.service.findById(params.id);
  }

  @Post('create')
  create(@Body() event: Event) {
    return this.service.create(event);
  }

  @Put('update/:id')
  update(@Param() params, @Body() event: Event) {
    return this.service.update(params.id, event);
  }

  @Delete('delete/:id')
  remove(@Param() params) {
    return this.service.remove(params.id);
  }
}
