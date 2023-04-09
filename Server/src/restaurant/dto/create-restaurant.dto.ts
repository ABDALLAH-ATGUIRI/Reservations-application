import { User } from './../../auth/schema/user.schema';
import { Location, Specialty } from './../schemas/restaurent.schema';
import {
  IsNotEmpty,
  IsString,
  IsEnum,
  IsEmpty,
  isObject,
  IsObject,
} from 'class-validator';
export class CreateRestaurantDto {
  @IsNotEmpty()
  @IsString()
  readonly restaurantName: string;

  @IsString()
  readonly menu: string;

  @IsNotEmpty()
  @IsObject()
  readonly location: Location;

  @IsNotEmpty()
  @IsString()
  readonly phone: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsEnum(Specialty, { message: 'Please enter correct Specialty.' })
  readonly specialty: Specialty;

  @IsEmpty({ message: 'Please enter correct category.' })
  readonly user: User;
}
