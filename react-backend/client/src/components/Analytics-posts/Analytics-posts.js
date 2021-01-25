import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './Analytics-posts.module.css';
import MainTitle from '../Main-title/Main-title';
import AdvancedTitle from '../Advanced-title/Advanced-title';
import {monthsLabels, monthsDatas} from '../../constants.js';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const AnalyticsPosts = () => {
  const myData = {
    labels: monthsLabels,
    datasets: [{
        label: 'number of registered users', 
        data: monthsDatas,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top'
        }
    }]
  }
  
  const myOptions = {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

  return (
    <div className={styles.analytics}>
      <div className={styles.analyticsTitle}>
        <MainTitle styling='analyticsTitle'>Analytics: Posts</MainTitle>
        <AdvancedTitle styling='analyticsTitle'>Gives clear undestranding of how many posts was created in different months (per 3 months)</AdvancedTitle>
      </div>
      <Bar data={myData} width={Number(775)} height={Number(385)} options={myOptions} />
    </div>
  );
}

export default AnalyticsPosts;