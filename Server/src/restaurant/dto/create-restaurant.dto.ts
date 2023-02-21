import { Specialty } from './../schemas/restaurent.schema';
import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
export class CreateRestaurantDto {
  @IsNotEmpty()
  @IsString()
  readonly restaurantName: string;

  @IsNotEmpty()
  @IsString()
  readonly menu: string;

  @IsNotEmpty()
  @IsString()
  readonly location: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsEnum(Specialty , {message : "Please enter correct Specialty."} )
  readonly specialty: Specialty;
}


