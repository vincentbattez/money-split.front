// External dependencies
import React, { FunctionComponent } from "react";

// Local
import Bank from "./Bank";
import { BANK_DEFAULT_PROPS, BankContainerProps } from "./Bank.type";

const BankContainer: FunctionComponent<BankContainerProps> = (props: BankContainerProps) => {
  const formattedCardNumber = `**** **** **** ${props.endCardNumber}`;
  const style = {
    backgroundColor: props.color,
  };

  return (
    <Bank
      style={style}
      name={props.name}
      endCardNumber={formattedCardNumber}
    />
  );
};

BankContainer.defaultProps = {
  color: BANK_DEFAULT_PROPS.color
};

export default BankContainer;
