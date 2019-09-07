import React, { memo }  from "react";
import PropTypes from 'prop-types';

import './Resume.scss'

const Resume = ({ month, money }) => (
  <section className="resume">
    <div className="resume__container">
      <span className="resume__money">
        { money } €
      </span>
      <span className="resume__month">
        { month }
      </span>
    </div>
  </section>
);

Resume.propTypes = {
  month: PropTypes.string,
  money: PropTypes.number,
};

export default memo(Resume);
