import React from 'react'
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash'

export default (props)=> {

  function avarage(data) {
    return _.round(_.sum(data)/data.length);
  }
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data} >
          <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type="avg" />
          <div>{avarage(props.data)} {props.units}</div>
      </Sparklines>
    </div>
  );
}
