// External dependencies
import React, { FunctionComponent } from "react";

// Internal dependencies
import ResumeContainer from "components/atoms/Resume";
import BankCollectionContainer from "components/molecules/BankCollection";

// Local
import "./Dashboad.scss"
import { DashboardPropsType } from "./Dashboard.type";


const Dashboard: FunctionComponent<DashboardPropsType> = ({page, resume, bankCollection}: DashboardPropsType) => (
  <div className={page.classPage}>
    <ResumeContainer
      money={resume.money}
      month={resume.month}
    />
    <BankCollectionContainer
      bankCollection={bankCollection.bankCollection}
    />
  </div>
);

export default Dashboard
