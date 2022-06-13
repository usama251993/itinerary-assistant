import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver
} from '@nestjs/graphql';

import {
  Coordinates as CoordinatesEntity,
  Location as Entity,
  Timezone as TimezoneEntity
} from '../../imports/entities';
import { LocationInput } from '../../inputs';
import {
  Coordinates as CoordinatesModel,
  Location,
  Timezone as TimezoneModel
} from '../../imports/models';

import { LocationService } from '../../services';

@Resolver(() => Entity)
export class LocationResolver {
  constructor(private _service: LocationService) {}

  @ResolveField(() => CoordinatesEntity, { name: 'coordinates' })
  async getCoordinates(@Parent() { id }: Entity): Promise<CoordinatesModel> {
    return await this._service.getCoordinates(id);
  }

  @ResolveField(() => TimezoneEntity, { name: 'timezone' })
  async getTimezone(@Parent() { id }: Entity): Promise<TimezoneModel> {
    return await this._service.getTimezone(id);
  }

  @Mutation(() => Entity)
  async createLocation(
    @Args('location', { type: () => LocationInput }) location: Location
  ): Promise<Location> {
    return await this._service.createLocation(location);
  }
}
