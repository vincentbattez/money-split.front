import moment from "moment";
import React, { Component } from "react";

import { buildClassPage } from "helpers/classMaker";
import dateConfig from "config/date"
import "./Dashboad.scss"

// Components
import BankCollection from "components/BankCollection/BankCollection";
import Resume from "components/Resume/Resume";

class Dashboard extends Component {
  render() {
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
      }
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

export default Dashboard;
