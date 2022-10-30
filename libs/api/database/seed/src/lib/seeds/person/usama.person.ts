import { Person } from '../../imports/models';

const id = 'person-1';

const UsamaPerson = new Person({
  id,
  fullName: 'Usama Ansari',
  dateOfBirth: new Date(1993, 9, 25),
  email: 'usama251993@gmail.com',
  phone: '+91 80977 28350',
  website: 'https://usamaansari.com'
});

export { UsamaPerson };