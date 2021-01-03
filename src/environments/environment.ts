
import { baseEnvironment } from './base.environment';

export const environment = {
  ...baseEnvironment,
  production: false,
  nebular: {
    userPictureOnly: false,
    userMenus: [{ title: 'Profile' }, { title: 'Log out' }],
  },
};
