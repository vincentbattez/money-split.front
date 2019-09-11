// External dependencies
import React, {FunctionComponent, memo} from "react";

// Internal dependencies
import Bank from "components/Bank/Bank";
import { BankProps } from "components/Bank/Bank.type";

// Local
import "./BankCollection.scss"
import { BankCollectionProps } from "./BankCollection.type";

const BankList = (bankCollection: BankProps[]) => {
  return (
    bankCollection.map((bank: BankProps) => {
      const key = `${bank.name}-${bank.endCardNumber}`;

      return (
        <Bank
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
