import moment from "moment";
import React, { Component } from "react";

// Components
import Bank from "components/Bank/Bank";
import Resume from "components/Resume/Resume";

import dateConfig from "config/date"

class Dashboard extends Component {
  render() {
    const currentMonth = moment().format(dateConfig.month);
    const currentEpargne = 7350.21;

    const bankName = 'LCL';
    const endCardNumber = 1080;
    const bankColor = 'red';

    return (
      <div>
        <Resume
          month={currentMonth}
          money={currentEpargne}
        />
        <Bank
          name={bankName}
          endCardNumber={endCardNumber}
          color={bankColor}
        />
        <Bank
          name={bankName}
          endCardNumber={endCardNumber}
        />
      </div>
    );
  }
}

export default Dashboard;
