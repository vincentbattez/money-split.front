import React, { memo } from "react";

import "./Bank.scss"

function Bank({ name, endCardNumber, color }) {
  const formattedCardNumber = `**** **** **** ${endCardNumber}`;
  const style = {
    backgroundColor: color,
  };

  return (
    <article className="bank" style={style}>
      <div className="bank__container">
        <p className="bank__name">{ name }</p>
        <p className="bank__card-number">{ formattedCardNumber }</p>
      </div>
    </article>
  );
}

export default memo(Bank);
