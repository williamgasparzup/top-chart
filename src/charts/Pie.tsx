import React from 'react';
import ReactEcharts from 'echarts-for-react';

const getOption = () => ({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'horizontal',
    left: '30%',
    bottom: 0,
    pageTextStyle: {
      fontSize: 12
    },
    data: ['Transformador', 'Evolutivo Rápido', 'Evolutivo Lento', 'Não Evolutivo', 'Não sei Avaliar']
  },
  series: [
    {
      color: ['#00CF5A', '#FDD030', '#FF7A00', '#D60019', '#259CC1'],
      name: 'Persona',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: true,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '14',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 40, name: 'Transformador' },
        { value: 25, name: 'Evolutivo Rápido' },
        { value: 15, name: 'Evolutivo Lento' },
        { value: 15, name: 'Não Evolutivo' },
        { value: 5, name: 'Não sei Avaliar' }
      ]
    }
  ]
});

const Pie = () => {
  return <ReactEcharts option={getOption()} style={{ height: 300 }} />
}

export default Pie;
