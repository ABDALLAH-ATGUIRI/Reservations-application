import { Specialty } from './../schemas/restaurent.schema';
export class UpdateRestaurantDto {
  readonly restaurantName: string;
  readonly menu: string;
  readonly location: string;
  readonly description: string;
  readonly specialty: Specialty;
}
