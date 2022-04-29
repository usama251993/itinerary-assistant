import { Address } from '../../../imports/models';
import { EramPersonId, EramLocation } from '../..';

export const EramAddressId = 'person-2-address';

export const EramAddress: Address = new Address({
  id: EramAddressId,
  name: 'Owner',
  room: 'G2',
  wing: '',
  apartment: 'Al-Noor',
  street: 'Mumbai-Pune Road',
  landmark: 'Bharti Chambers',
  locality: 'Takoli Mohalla',
  suburb: 'Kalwa West',
  city: 'Thane',
  state: 'Maharashtra',
  country: 'India',
  zip: '400605',
  personId: EramPersonId,
  location: EramLocation
});
