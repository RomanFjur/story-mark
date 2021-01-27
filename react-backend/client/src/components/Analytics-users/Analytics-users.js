import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './Analytics-users.module.css';
import MainTitle from '../Main-title/Main-title';
import AdvancedTitle from '../Advanced-title/Advanced-title';
import moment from 'moment';
import { connect } from 'react-redux';
// import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Chart.plugins.unregister(ChartDataLabels);

class AnalyticsUsers extends React.Component {
  componentDidMount() {
    this.props.socketGetUsers();
  }

  chartDataGenerator = () => {
    let dateArr = [];
    for (let i = 29; i >= 0; i--) {
      dateArr.push(moment().subtract(i, 'days').format('D'));
    }
    let chartData = {
      labels: [],
      datasets: [{
          label: 'number of registered users', 
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
    for (let i = 0; i < 30; i++) {
      chartData.labels.push(dateArr[i]);
      chartData.datasets[0].data = this.props.socketData;
      chartData.datasets[0].backgroundColor.push(`rgba(255, ${this.props.socketData[i] * 8.5}, 80, 0.2)`);
      chartData.datasets[0].borderColor.push(`rgba(255, ${this.props.socketData[i] * 8.5}, 80, 1)`);
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
        }],
        xAxes: [{
          gridLines: {
            display: false
          },
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
          <MainTitle styling='analyticsTitle'>Analytics: Users</MainTitle>
          <AdvancedTitle styling='analyticsTitle'>Gives clear undestranding of how many people registered per 30 days period</AdvancedTitle>
        </div>
        <Bar 
          data={() => this.chartDataGenerator()} 
          width={Number(775)} 
          height={Number(385)} 
          options={() => this.chartOptionsGenerator()} 
          plugins={[ChartDataLabels]}/>
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
    socketGetUsers: () => {
      dispatch({type: "SOCKET_GET_USERS"});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsUsers);