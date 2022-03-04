import { EntitySchema } from 'typeorm';

import { TripMaster, UserMaster } from '../imports/entities';

export const Entities: (
  | string
  | EntitySchema<unknown>
  | (() => unknown)
)[] = [
  (<unknown>TripMaster) as EntitySchema<unknown>,
  (<unknown>UserMaster) as EntitySchema<unknown>
];
