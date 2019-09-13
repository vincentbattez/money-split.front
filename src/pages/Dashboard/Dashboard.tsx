// External dependencies
import React, { Component } from "react";
import moment from "moment";

// Internal dependencies
import { buildClassPage } from "helpers/classMaker";
import dateConfig from "config/date"
import BankCollection from "components/molecules/BankCollection/BankCollection";
import ResumeContainer from "components/atoms/Resume/Resume.container";

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
        color: '#3b51d5',
      },
      {
        name: 'N26',
        endCardNumber: 4125,
      },
      {
        name: 'Paypal',
        endCardNumber: 9032,
        color: 'lightblue',
      },
    ];

    return (
      <div className={classPage}>
        <ResumeContainer
          money={currentEpargne}
          month={currentMonth}
        />
        <BankCollection
          bankCollection={bankCollection}
        />
      </div>
    );
  }
}
