import { Specialty } from './../schemas/restaurent.schema';
export class CreateRestaurantDto {
  readonly restaurantName: string;
  readonly menu: string;
  readonly location: string;
  readonly description: string;
  readonly specialty: Specialty;
}
