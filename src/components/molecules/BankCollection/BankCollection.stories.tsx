import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import { BankCollectionMock } from 'mocks/Bank.mock'

import BankCollectionContainer from './index';

// export const actions = {
//   colorBlue: action('colorBlue'),
// };

storiesOf('BankCollection', module)
  .add('default', () =>
    <BankCollectionContainer
      bankCollection={BankCollectionMock}
    />
  );
