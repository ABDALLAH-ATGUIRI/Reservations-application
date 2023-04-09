import { Location, Specialty } from './../schemas/restaurent.schema';
import { IsString, IsOptional, IsEmpty, IsEnum } from 'class-validator';
import { User } from 'src/auth/schema/user.schema';

export class UpdateRestaurantDto {
  @IsOptional()
  @IsString()
  readonly restaurantName: string;

  @IsOptional()
  @IsString()
  readonly menu: string;

  @IsOptional()
  readonly location: Location;

  @IsOptional()
  @IsString()
  readonly phone: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsEnum(Specialty, { message: 'Please enter correct Specialty.' })
  readonly specialty: Specialty;

  @IsEmpty({ message: 'Please enter correct category.' })
  readonly user: User;
}
