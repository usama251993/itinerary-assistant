import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AddressEntity as Entity } from '../../entities';
import { AddressInput } from '../../inputs';
import { AddressService } from '../../services';

@Resolver()
export class AddressResolver {
  constructor(private _service: AddressService) {}

  @Query(() => Entity)
  async getAddress(@Args('id', { type: () => String }) id: string) {
    return await this._service.getAddress(id);
  }

  @Mutation(() => Entity)
  async createAddress(
    @Args('address', { type: () => AddressInput }) address: Entity
  ) {
    return await this._service.createAddress(address);
  }

  @Mutation(() => Entity)
  async updateAddress(
    @Args('id', { type: () => String }) id: string,
    @Args('address', { type: () => AddressInput }) address: Entity
  ) {
    return await this._service.updateAddress(id, address);
  }

  @Mutation(() => Entity)
  async deleteAddress(@Args('id', { type: () => String }) id: string) {
    return await this._service.deleteAddress(id);
  }

  @Mutation(() => Entity)
  async associateAddressWithPerson(
    @Args('addressId', { type: () => String }) addressId: string,
    @Args('personId', { type: () => String }) personId: string
  ) {
    return await this._service.associateAddressWithPerson({
      addressId,
      personId
    });
  }
}