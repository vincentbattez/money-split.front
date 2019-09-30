import { CSSProperties } from 'react'

export interface BankContainerProps {
  name: string,
  endCardNumber: number,
  money: number,
  color?: BANK_DEFAULT_PROPS.color | string,
}

export interface BankProps {
  name: string,
  cardNumber: string,
  money: number,
  style?: CSSProperties
}

export enum BANK_DEFAULT_PROPS {
  color= 'black'
}
