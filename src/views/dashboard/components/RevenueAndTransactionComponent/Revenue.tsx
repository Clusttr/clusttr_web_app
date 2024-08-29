import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import RevenueHeader from './RevenueHeader';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);
const Revenue = () => {
  const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ],
    datasets: [
      {
        data: [
          65, 59, 80, 81, 26, 55, 20, 65, 59, 30, 41, 26, 55, 40, 65, 59, 30,
          81, 26, 55, 40, 65, 59, 80, 81, 26, 55, 40,
        ],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  return (
    <RevenueStyle>
      <RevenueHeader />
      <div>
        <Line
          data={data}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            animations: {
              tension: {
                duration: 1000,
                easing: 'linear',
                from: 0.8,
                to: 0.5,
                loop: true,
              },
            },
            scales: {
              y: {
                // defining min and max so hiding the dataset does not change scale range
                min: 0,
                max: 2500000,
                stacked: true,
                ticks: {
                  stepSize: 250000,
                  color: `${colors.darkGrey}`,
                  font: {
                    size: 12,
                  },
                },
              },
              x: {
                display: false,
              },
            },
            maintainAspectRatio: false,
          }}
          height="385px"
          width="200px"
        />
      </div>
    </RevenueStyle>
  );
};

const RevenueStyle = styled.div`
  background-color: ${colors.backgroundColor};
  padding: 20px 30px;
  border-radius: 10px;
  color: ${colors.white};
`;

export default Revenue;
