import moment from "moment";

import React, { Component } from "react";

import Resume from "components/Resume/Resume";

class Dashboard extends Component {
  render() {
    const currentMonth = moment().format('MMMM');

    return (
      <div>
        <h1>Dashboad</h1>
        <Resume
          month={currentMonth}
          money={7540}
        />
      </div>
    );
  }
}

export default Dashboard;
