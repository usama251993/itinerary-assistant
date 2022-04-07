import { Photo } from '../../../imports/models';
import { EramUserId } from '..';

export const EramPhotoIds = {
  Profile: 'user-2-photo-1'
};

export const EramPhotos: Photo[] = [
  new Photo({
    id: EramPhotoIds.Profile,
    large: 'https://randomuser.me/api/portraits/eramshaikh',
    medium: 'https://randomuser.me/api/portraits/medium/eramshaikh',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/eramshaikh',
    userId: EramUserId
  })
];