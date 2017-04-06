import React ,{Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data){
  var sum = data.reduce((prev,next,index)=>{
    return prev + next
  })
  return Math.round(sum / data.length);
}

export default class Chart extends Component{
  render (){
    return (
    <div>
      <Sparklines data={this.props.data} svgWidth={180} svgHeight={120}>
        <SparklinesLine color={this.props.color || 'red'} />
        <SparklinesReferenceLine tyep="avg" />
      </Sparklines>
      <div>{average(this.props.data)} {this.props.unit}</div>
    </div>
    )
  }
}
