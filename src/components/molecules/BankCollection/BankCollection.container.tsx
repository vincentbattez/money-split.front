// External dependencies
import React, { FunctionComponent, memo } from "react";

// Local
import { BankCollectionContainerProps } from "./BankCollection.type";
import BankCollection from "./BankCollection";

const BankCollectionContainer: FunctionComponent<BankCollectionContainerProps> = (props: BankCollectionContainerProps) => (
  <BankCollection
    bankCollection={props.bankCollection}
  />
);

export default memo(BankCollectionContainer);
