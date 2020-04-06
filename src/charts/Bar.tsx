import React from 'react';
import ReactEcharts from 'echarts-for-react';

const getOption = () => ({
  legend: {
    bottom: 0
  },
  tooltip: {},
  dataset: {
      dimensions: ['month', 'Transformador', 'Evolutivo Rápido', 'Evolutivo Lento', 'Não Evolutivo'],
      source: [
          {month: 'Nov', 'Transformador': 43.3, 'Evolutivo Rápido': 85.8, 'Evolutivo Lento': 93.7, 'Não Evolutivo': 80},
          {month: 'Dez', 'Transformador': 83.1, 'Evolutivo Rápido': 73.4, 'Evolutivo Lento': 55.1, 'Não Evolutivo': 75.5},
          {month: 'Jan', 'Transformador': 86.4, 'Evolutivo Rápido': 65.2, 'Evolutivo Lento': 82.5, 'Não Evolutivo': 50},
      ]
  },
  xAxis: {type: 'category'},
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
      {type: 'bar', color: ['#D60019']},
      {type: 'bar', color: ['#FF7A00']},
      {type: 'bar', color: ['#FDD030']},
      {type: 'bar', color: ['#00CF5A']},
  ]
});

const Bar = () => {
  return <ReactEcharts option={getOption()} style={{ height: 300 }} />
}

export default Bar;
