export interface BankProps {
  name: string,
  endCardNumber: number,
  color?: BANK_DEFAULT_PROPS.color | string,
}

export enum BANK_DEFAULT_PROPS {
  color= 'black'
}
