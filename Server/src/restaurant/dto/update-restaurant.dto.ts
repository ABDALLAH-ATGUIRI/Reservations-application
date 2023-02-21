import { Specialty } from './../schemas/restaurent.schema';
import { IsString,IsOptional,  IsEnum } from 'class-validator';

export class UpdateRestaurantDto {

  @IsOptional()
  @IsString()
  readonly restaurantName: string;

  @IsOptional()
  @IsString()
  readonly menu: string;

  @IsOptional()
  @IsString()
  readonly location: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsEnum(Specialty , {message : "Please enter correct Specialty."} )
  readonly specialty: Specialty;
}


