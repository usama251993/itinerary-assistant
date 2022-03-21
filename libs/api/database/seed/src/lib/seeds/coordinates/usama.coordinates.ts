import { Coordinates } from '../../imports/models';
import { UsamaLocationId } from '..';

export const UsamaCoordinatesId = 'user-1-address-location-coordinates';

export const UsamaCoordinates: Coordinates = new Coordinates({
  id: UsamaCoordinatesId,
  latitude: 19.0628191,
  longitude: 72.8808394,
  locationId: UsamaLocationId
});