import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import { BankCollectionMock } from 'mocks/Bank.mock'

import BankContainer from './index';

// export const actions = {
//   colorBlue: action('colorBlue'),
// };

storiesOf('Bank', module)
  .add('default', () =>
    <BankContainer
      name={BankCollectionMock[0].name}
      endCardNumber={BankCollectionMock[0].endCardNumber}
    />
  )
  .add('colorBlue', () =>
    <BankContainer
      name={BankCollectionMock[1].name}
      endCardNumber={BankCollectionMock[1].endCardNumber}
      color={BankCollectionMock[1].color}
    />
  );
