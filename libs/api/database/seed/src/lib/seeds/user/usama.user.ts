import { User } from '../../imports/models';
import {
  UsamaAddress,
  UsamaIdentifications,
  UsamaPhotos,
  UsamaSocialConnections,
  UsamaUserName
} from '..';

export const UsamaUserId = 'user-1';

export const UsamaUser: User = new User({
  id: 'user-1',
  username: UsamaUserName,
  dateOfBirth: new Date(1993, 9, 25),
  email: 'usama251993@gmail.com',
  phone: '+91 80977 28350',
  website: 'https://usamaansari.com',
  address: UsamaAddress,
  identifications: UsamaIdentifications,
  photos: UsamaPhotos,
  socialConnections: UsamaSocialConnections
});