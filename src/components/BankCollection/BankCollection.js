import { arrayOf, shape } from "prop-types";
import React, { memo } from "react";

import "./BankCollection.scss"
import Bank from "components/Bank/Bank";
import bankType from "types/Bank.type";

function BankList(bankCollection) {
  if (!bankCollection) {
    return
  }

  return (
    bankCollection.map(({ name, endCardNumber, color }) => {
      const key = `${name}-${endCardNumber}`;

      return (
        <Bank
          key={key}
          name={name}
          endCardNumber={endCardNumber}
          color={color}
        />
      )
    })
  )
}

function BankCollection({ bankCollection }) {
  return (
    <section className="bank-collection">
      { BankList(bankCollection) }
    </section>
  );
}

BankCollection.propTypes = {
  bankCollection: arrayOf(shape(bankType))
};

export default memo(BankCollection);
