import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  url: { type: String, required: false },
});

export interface Event {
  id: string;
  name: string;
  description: string;
  price: number;
  location: string;
  date: mongoose.Date;
  url: string;
}
