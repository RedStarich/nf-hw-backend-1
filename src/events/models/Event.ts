import mongoose, { Document, Schema } from 'mongoose';

export interface IEvent extends Document {
  id: number;
  name: string;
  description: string;
  date: string;
  location: string;
  duration: string;
}

const EventSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  duration: { type: String, required: true },
});
const EventModel = mongoose.model<IEvent>('Event', EventSchema);

export default EventModel;
