import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './Analytics-posts.module.css';
import MainTitle from '../Main-title/Main-title';
import AdvancedTitle from '../Advanced-title/Advanced-title';
import moment from 'moment';
import { connect } from 'react-redux';
// import Chart from 'chart.js';
// import ChartDataLabels from 'chartjs-plugin-datalabels';

class AnalyticsPosts extends React.Component {
  componentDidMount() {
    this.props.socketGetPosts();
  }

  chartDataGenerator = () => {
    let dateArr = [];
    for (let i = 2; i >= 0; i--) {
      dateArr.push(moment().subtract(i, 'months').subtract(moment().date() - 1, 'days').format('MMMM'));
    }
    let chartData = {
      labels: [],
      datasets: [{
          label: 'number of registered posts', 
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 1,
          datalabels: {
            anchor: 'end',
            align: 'top'
          }
      }]
    };
    for (let i = 0; i < 3; i++) {
      chartData.labels.push(dateArr[i]);
      chartData.datasets[0].data = this.props.socketData;
      chartData.datasets[0].backgroundColor.push(`rgba(${this.props.socketData[i] * 2.5}, 255, 90, 0.2)`);
      chartData.datasets[0].borderColor.push(`rgba(${this.props.socketData[i] * 2.5}, 255, 90, 1)`);
    }
    return chartData;
  }

  chartOptionsGenerator = () => {
    let chartOptions = {
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
    return chartOptions;
  }

  render() {
    return (
      <div className={styles.analytics}>
        <div className={styles.analyticsTitle}>
          <MainTitle styling='analyticsTitle'>Analytics: Posts</MainTitle>
          <AdvancedTitle styling='analyticsTitle'>Gives clear undestranding of how many posts was created in different months (per 3 months)</AdvancedTitle>
        </div>
        <Bar 
          data={() => this.chartDataGenerator()} 
          width={Number(775)} 
          height={Number(385)} 
          options={() => this.chartOptionsGenerator()} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    socketData: state.socketData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    socketGetPosts: () => {
      dispatch({type: "SOCKET_GET_POSTS"});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsPosts);