// External dependencies
import React, { Component } from "react";
import moment from "moment";

// Internal dependencies
import { buildClassPage } from "helpers/classMaker";
import dateConfig from "config/date"
import BankCollection from "components/BankCollection/BankCollection";
import Resume from "components/Resume/Resume";

// Local
import "./Dashboad.scss"


export class Dashboard extends Component {
  render () {
    const classPage = buildClassPage(this);
    const currentMonth = moment().format(dateConfig.month);
    const currentEpargne = 7350.21;

    const bankCollection = [
      {
        name: 'LCL',
        endCardNumber: 1080,
      },
      {
        name: 'N26',
        endCardNumber: 4125,
        color: 'grey',
      },
      {
        name: 'Paypal',
        endCardNumber: 9032,
        color: 'lightblue',
      },
    ];

    return (
      <div className={classPage}>
        <Resume
          month={currentMonth}
          money={currentEpargne}
        />
        <BankCollection
          bankCollection={bankCollection}
        />
      </div>
    );
  }
}
