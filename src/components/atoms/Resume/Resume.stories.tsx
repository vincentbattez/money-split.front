import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import { ResumeMock } from 'mocks/Resume.mock'

import Resume from './index';

// export const actions = {
//   colorBlue: action('colorBlue'),
// };

storiesOf('Resume', module)
  .add('default', () =>
    <Resume
      money={ResumeMock.money}
      month={ResumeMock.month}
    />
  );
