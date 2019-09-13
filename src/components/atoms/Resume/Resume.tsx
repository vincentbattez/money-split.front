// External dependencies
import React, { memo, FunctionComponent }  from "react";

// Internal dependencies
import './Resume.scss'
import { ResumeProps } from './Resume.type'

const Resume: FunctionComponent<ResumeProps> = (props: ResumeProps) => {
  return (
    <section className="resume">
      <div className="resume__container">
      <span className="resume__money">
        { props.money }
      </span>
        <span className="resume__month">
        { props.month }
      </span>
      </div>
    </section>
  );
};

export default memo(Resume);
