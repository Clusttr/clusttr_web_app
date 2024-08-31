import colors from '../../../../assets/colors/project_colors';

export const labels = [
  '23 January, 2020',
  '12 February, 2020',
  '10 March, 2020',
  '25 April, 2020',
  '11 May, 2020',
  '4 June, 2020',
  '30 July, 2020',
  '23 January, 2021',
  '12 February, 2021',
  '10 March, 2021',
  '25 April, 2021',
  '11 May, 2021',
  '4 June, 2021',
  '30 July, 2021',
  '23 January, 2022',
  '12 February, 2022',
  '10 March, 2022',
  '25 April, 2022',
  '11 May, 2022',
  '4 June, 2022',
  '30 July, 2022',
  '23 January, 2023',
  '12 February, 2023',
  '10 March, 2023',
  '25 April, 2023',
  '11 May, 2023',
  '4 June, 2023',
  '30 July, 2023',
  '23 January, 2024',
  '12 February, 2024',
  '10 March, 2024',
  '25 April, 2024',
  '11 May, 2024',
  '4 June, 2024',
  '30 July, 2024',
  '29 August, 2024',
];

export const dataSetData = [
  1500000, 2400430, 1400987, 2609780, 1300003, 1300000, 2900000, 2050000,
  1200000, 1250000, 1500300, 1300000, 2405000, 650000, 2200000, 1000000, 1700000,
  750000, 2705000, 2400200, 2850055, 1100000, 800000, 1700000, 1300000, 1250000,
  700000, 2600000, 2000000, 2300000, 2400000, 2100000, 1500000, 1900000,
  1300000, 1200000,
];

export const options: object = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tickFormat: {
      prefix: '$',
      notation: 'compact',
    },
  },
  animations: {
    tension: {
      duration: 1000,
      easing: 'linear',
      from: 0.4,
      to: 0.4,
      // loop: true,
    },
  },
  scales: {
    y: {
      // defining min and max so hiding the dataset does not change scale range
      min: 0,
      max: 3000000,
      stacked: true,
      grid: {
        lineWidth: 0.3,
        tickColor: 'rgb(0,0,0,0)',
        tickLength: 8,
        color: `#3D3D3D`,
      },
      ticks: {
        // stepSize: 250000,
        color: `${colors.darkGrey}`,
        font: {
          size: 14,
        },

        callback: (val: number) => {
          if (!val) return 0;
          const units = ['', 'K', 'M', 'B'];
          const k = 1000;
          const magnitude = Math.floor(Math.log(val) / Math.log(k));
          return `${val / Math.pow(k, magnitude)}${units[magnitude]}`;
        },
      },
    },
    x: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

export const chartBackgroundColor = (ctx: any) => {
  const chart = ctx.chart;
  const { ctx: context, chartArea } = chart;
  if (!chartArea) {
    return null;
  }
  const gradient = context.createLinearGradient(
    0,
    chartArea.bottom,
    0,
    chartArea.top
  );
  gradient.addColorStop(0, 'rgba(36, 35, 35, 0.8)');
  gradient.addColorStop(1, 'rgba(0, 193, 135, 1)');
  return gradient;
};