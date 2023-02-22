import { Restaurant } from './schemas/restaurent.schema';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
import { User } from 'src/auth/schema/user.schema';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModule: mongoose.Model<Restaurant>,
  ) {}

  async findAll(query: Query) {
    const resPerPage = 2;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? { restaurantName: { $regex: query.keyword, $options: 'i' } }
      : {};

    const restaurants = await this.restaurantModule
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);
    return restaurants;
  }

  async create(restaurant: Restaurant, user: User): Promise<Restaurant> {
    const data = Object.assign(restaurant , {user: user._id})
    const res = await this.restaurantModule.create(restaurant);
    return res;
  }

  async findById(id: string): Promise<Restaurant> {
    const isValidId = mongoose.isValidObjectId(id);

    if (!isValidId) {
      throw new BadRequestException('Please enter correct id.');
    }

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
