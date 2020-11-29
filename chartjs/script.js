let myChart = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart, {
  type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: [
      'Sydney',
      'Melbourne',
      'Brisbane',
      'Perth',
      'Adelaide',
      'Gold Coast',
    ],
    datasets: [
      {
        label: 'Population',
        data: [4627345, 4246375, 2189878, 1896548, 1225235, 591473],
        // backgroundColor: 'green',
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderWidth: 1,
        borderColor: '#777',
        hoverBorderWidth: 3,
        hoverBorderColor: '#000',
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Largest Cities in Australia',
      fontSize: 25,
    },
    legend: {
      display: true,
      position: 'right',
      labels: {
        fontColor: '#000',
      },
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        bottom: 0,
        top: 0,
      },
    },
    tooltips: {
      enabled: true,
    },
  },
});
