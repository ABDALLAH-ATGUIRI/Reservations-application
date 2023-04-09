import { User } from './../../auth/schema/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export enum Specialty {
  FASTFOOD = 'fast food',
  FAMILY = 'Family style',
  COFFEE = 'Coffee',
  BAR = 'Bars & Pubs',
  BUFFET = 'Buffet',
  DESTINATION = 'Destination Restaurant',
  BALDI = 'Baldi',
}
export interface Location {
  latitude: number;
  longitude: number;
}
@Schema({
  timestamps: true,
})
export class Restaurant {
  @Prop()
  restaurantName: String;

  @Prop()
  menu: String;

  @Prop({ type: Object })
  location: Location;

  @Prop()
  description: String;
  
  @Prop()
  phone: string;

  @Prop()
  specialty: Specialty;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
