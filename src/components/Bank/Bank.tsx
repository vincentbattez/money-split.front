// External dependencies
import React, {FunctionComponent, memo} from "react";

// Local
import "./Bank.scss"
import { BankProps } from "./Bank.type";

const Bank: FunctionComponent<BankProps> = (props: BankProps) => {
  const formattedCardNumber = `**** **** **** ${props.endCardNumber}`;
  const style = {
    backgroundColor: props.color,
  };

  return (
    <article className="bank" style={style}>
      <div className="bank__container">
        <p className="bank__name">{ props.name }</p>
        <p className="bank__card-number">{ formattedCardNumber }</p>
      </div>
    </article>
  );
};

export default memo(Bank);
