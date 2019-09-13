import { CSSProperties } from 'react'

export interface BankContainerProps {
  name: string,
  endCardNumber: number,
  color?: BANK_DEFAULT_PROPS.color | string,
}

export interface BankProps {
  name: string,
  endCardNumber: string,
  style?: CSSProperties
}

export enum BANK_DEFAULT_PROPS {
  color= 'black'
}
