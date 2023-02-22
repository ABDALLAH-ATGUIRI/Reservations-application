import { User } from './../../auth/schema/user.schema';
import { Specialty } from './../schemas/restaurent.schema';
import { IsNotEmpty, IsString, IsEnum, IsEmpty } from 'class-validator';
export class CreateRestaurantDto {
  @IsNotEmpty()
  @IsString()
  readonly restaurantName: string;

  @IsString()
  readonly menu: string;

  @IsNotEmpty()
  @IsString()
  readonly location: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsEnum(Specialty, { message: 'Please enter correct Specialty.' })
  readonly specialty: Specialty;
  
  @IsEmpty({ message: 'Please enter correct category.' })
  readonly user: User;
}
