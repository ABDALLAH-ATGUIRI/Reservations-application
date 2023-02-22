import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './schemas/restaurent.schema';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';

@Controller('restaurant')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  @Get()
  async getAllRestaurants(@Query() query: ExpressQuery): Promise<Restaurant[]> {
    return this.restaurantService.findAll(query);
  }

  @Post()
  @UseGuards(AuthGuard())
  async createRestaurant(
    @Body() restaurant: CreateRestaurantDto,
    @Req() req,
  ): Promise<Restaurant> {    
    return this.restaurantService.create(restaurant , req.user);
  }

  @Get(':id')
  async getRestaurant(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantService.findById(id);
  }

  @Put(':id')
  async updateRestaurant(
    @Param('id')
    id: string,
    @Body()
    restaurant: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantService.updateById(id, restaurant);
  }

  @Put(':id')
  async deleteRestaurant(
    @Param('id')
    id: string,
  ): Promise<Restaurant> {
    return this.restaurantService.deleteById(id);
  }
}
