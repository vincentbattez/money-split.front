// External dependencies
import React, { FunctionComponent } from "react";

// Local
import "./Bank.scss"
import { BankProps } from "./Bank.type";

const Bank: FunctionComponent<BankProps> = (props: BankProps) => {
  return (
    <article className="bank" style={props.style}>
      <div className="bank__container">
        <p className="bank__name">{ props.name }</p>
        <p className="bank__card-number">{ props.cardNumber }</p>
      </div>
    </article>
  );
};

export default Bank;
