import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Event } from './event.model';
import { Model } from 'mongoose';

@Injectable()
export class EventService {
  constructor(
    @InjectModel('Event') private readonly eventModel: Model<Event>,
  ) {}

  async create(event: Event) {
    const result = await new this.eventModel(event).save();
    return result.id;
  }

  async findAll() {
    return this.eventModel.find().exec();
  }

  async filter(query) {
    const { value } = query;
    return this.eventModel.find(value).exec();
  }

  async findById(event: Event) {
    return await this.eventModel.findById(event).exec();
  }

  async update(id: any, event: Event) {
    return await this.eventModel.findByIdAndUpdate(id, event).exec();
  }

  async remove(event: Event) {
    return await this.eventModel.findByIdAndDelete(event).exec();
  }
}
