import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import BankContainer from './Bank.container';

export const name = 'LCO';
export const endCardNumber = 1234;
export const color = 'blue';

// export const actions = {
//   colorBlue: action('colorBlue'),
// };

storiesOf('Bank', module)
  .add('default', () =>
    <BankContainer
      name={name}
      endCardNumber={endCardNumber}
    />
  )
  .add('colorBlue', () =>
    <BankContainer
      name={name}
      endCardNumber={endCardNumber}
      color={color}
    />
  );
