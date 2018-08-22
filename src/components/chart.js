import _ from 'lodash';
import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

export default props => {
  const average = data => {
    return _.round(_.sum(data) / data.length);
  };
  return (
    <div>
      <Sparklines data={props.data} width={180} height={120} c={props.c}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
        &nbsp;
        {typeof props.c === 'number'
          ? `${_.round(props.c)}Cº ${_.round(props.f)}Fº`
          : ''}
      </div>
    </div>
  );
};
