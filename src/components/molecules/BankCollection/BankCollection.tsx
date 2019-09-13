// External dependencies
import React, { FunctionComponent, memo } from "react";

// Internal dependencies
import BankContainer from "components/atoms/Bank/Bank.container";
import { BankContainerProps } from "components/atoms/Bank/Bank.type";

// Local
import "./BankCollection.scss"
import { BankCollectionProps } from "./BankCollection.type";

const BankList = (bankCollection: BankContainerProps[]) => {
  return (
    bankCollection.map((bank: BankContainerProps) => {
      const key = `${bank.name}-${bank.endCardNumber}`;

      return (
        <BankContainer
          key={key}
          name={bank.name}
          endCardNumber={bank.endCardNumber}
          color={bank.color}
        />
      )
    })
  )
};

const BankCollection: FunctionComponent<BankCollectionProps> = (props: BankCollectionProps) => (
  <section className="bank-collection">
    {BankList(props.bankCollection)}
  </section>
);

export default memo(BankCollection);