import { Restaurant } from './schemas/restaurent.schema';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModule: mongoose.Model<Restaurant>,
  ) {}

  async findAll() {
    const restaurants = await this.restaurantModule.find();
    return restaurants;
  }

  async create(restaurant: Restaurant): Promise<Restaurant> {
    const res = await this.restaurantModule.create(restaurant);
    return res;
  }

  async findById(id: string): Promise<Restaurant> {
    const restaurant = await this.restaurantModule.findById(id);

    if (!restaurant) {
      throw new NotFoundException('Restaurant not found.');
    }

    return restaurant;
  }

  async updateById(id: string, restaurant: Restaurant): Promise<Restaurant> {
    return await this.restaurantModule.findByIdAndUpdate(id, restaurant, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Restaurant> {
    return await this.restaurantModule.findByIdAndUpdate(id);
  }
}
