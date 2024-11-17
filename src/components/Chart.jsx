import React from 'react'
import ApexCharts from 'react-apexcharts'

export const DEFAULT_OPTIONS = {
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    lineCap: 'round',
  },
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  }
}

export const Chart = (props) => {
  return <ApexCharts {...props} />
}
