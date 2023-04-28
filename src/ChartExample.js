import React, {PureComponent} from 'react';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={this.props.allCountriesMain.slice(0, 10)}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Line type="monotone" dataKey="deaths" stroke="#8884d8" activeDot={{r: 8}}/>
        <Line type="monotone" dataKey="day" stroke="#82ca9d"/>
        <Line type="monotone" dataKey="cases" stroke="red"/>
      </LineChart>
    );
  }
}
