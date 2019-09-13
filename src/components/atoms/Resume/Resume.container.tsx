// External dependencies
import React, { memo, FunctionComponent }  from "react";

// Internal dependencies
import { ResumeContainerProps } from './Resume.type'
import Resume from "./Resume";

const ResumeContainer: FunctionComponent<ResumeContainerProps> = (props: ResumeContainerProps) => {
  const formattedMoney = `${props.money} €`;

  return (
    <Resume
      money={formattedMoney}
      month={props.month}
    />
  );
};

export default memo(ResumeContainer);
