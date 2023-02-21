import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Specialty {
  FASTFOOD = 'fast food',
  FAMILY = 'Family style',
  COFFEE = 'Coffee',
  BAR = 'Bars & Pubs',
  BUFFET = 'Buffet',
  DESTINATION = 'Destination Restaurant',
  BALDI = 'Baldi',
}

@Schema({
  timestamps: true,
})

export class Restaurant {
  @Prop()
  restaurantName: String;

  @Prop()
  menu: String;

  @Prop()
  location: String;

  @Prop()
  description: String;

  @Prop()
  specialty: Specialty;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
