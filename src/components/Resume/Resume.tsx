import React, { memo }  from "react";

import './Resume.scss'
import resumeType from 'types/Resume.type'

const Resume = ({ month, money }:any) => {
  const formattedMoney = `${money} €`;

  return (
    <section className="resume">
      <div className="resume__container">
      <span className="resume__money">
        { formattedMoney }
      </span>
        <span className="resume__month">
        { month }
      </span>
      </div>
    </section>
  );
};

Resume.propTypes = resumeType;

export default memo(Resume);
