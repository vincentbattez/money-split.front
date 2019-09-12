// External dependencies
import React, { memo, FunctionComponent }  from "react";

// Internal dependencies
import './Resume.scss'
import { ResumeProps } from './Resume.type'

const Resume: FunctionComponent<ResumeProps> = (props: ResumeProps) => {
  const formattedMoney = `${props.money} €`;

  return (
    <section className="resume">
      <div className="resume__container">
      <span className="resume__money">
        { formattedMoney }
      </span>
        <span className="resume__month">
        { props.month }
      </span>
      </div>
    </section>
  );
};

export default memo(Resume);
