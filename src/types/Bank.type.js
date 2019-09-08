import { shape, number, string } from 'prop-types';

export const bankType = shape({
  name: string.isRequired,
  endCardNumber: number.isRequired,
  color: string,
});
