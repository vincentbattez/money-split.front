// External dependencies
import React, { Component } from "react";
import moment from "moment";

// Internal dependencies
import { buildClassPage } from "helpers/classMaker";
import dateConfig from "config/date"

// Local
import Dashboard from "./Dashboard";

export default class DashboardContainer extends Component<{}> {
  render () {
    const page = {
      classPage: buildClassPage(this),
    };
    const resume = {
      money: 7350.21,
      month: moment().format(dateConfig.month),
    };
    const bankCollection = {
      bankCollection: [
        {
          id: 1,
          name: 'LCL',
          endCardNumber: 1080,
          color: '#3b51d5',
          money: 2540.50,
        },
        {
          id: 2,
          name: 'N26',
          endCardNumber: 4125,
          money: 600,
        },
        {
          id: 3,
          name: 'Paypal',
          endCardNumber: 9032,
          color: 'lightblue',
          money: 21.03,
        },
      ]
    };

    return (
      <Dashboard
        page={page}
        resume={resume}
        bankCollection={bankCollection}
      />
    );
  }
}
