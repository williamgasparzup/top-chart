import React from 'react';
import ReactEcharts from 'echarts-for-react';

const getOption = () => ({
  tooltip: {
    trigger: 'item',
    formatter: '{c}%'
  },
  xAxis: {
    type: 'category',
    data: ['Nov\n2019', 'Dez\n2019', 'Jan\n2019']
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 100
  },
  series: [{
    data: [5, 35, 40],
    type: 'line',
    color: ['#00CF5A', '#FDD030', '#FF7A00', '#D60019']
  }]
});

const Bar = () => {
  return <ReactEcharts option={getOption()} style={{ height: 300 }} />
}

export default Bar;
