import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  faAngular,
  faDiscord,
  faFortAwesomeAlt,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const toolbarIcons: IconDefinition[] = [faBars];

const footerIcons: IconDefinition[] = [
  faAngular,
  faDiscord,
  faFortAwesomeAlt,
  faGithub,
  faHeart,
  faLinkedin
];

const sidenavIcons: IconDefinition[] = [];

export const layoutIcons = [...toolbarIcons, ...sidenavIcons, ...footerIcons];