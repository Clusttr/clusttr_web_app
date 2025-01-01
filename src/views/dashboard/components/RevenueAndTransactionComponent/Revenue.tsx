import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import RevenueHeader from './RevenueHeader';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import {
  options,
  labels,
  dataSetData,
  chartBackgroundColor,
} from './chartData.tsx';

Chart.register(CategoryScale);
const Revenue = () => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: dataSetData,
        fill: true,
        borderColor: `#01FAB0`,
        pointStyle: 'circle',
        radius: 0,
        backgroundColor: chartBackgroundColor,
      },
    ],
  };
  return (
    <RevenueStyle>
      <RevenueHeader />
      <div style={{ cursor: 'pointer' }}>
        <Line data={data} options={options} height="225px" width="200px" />
      </div>
      <div className="revenue_bottom_container">
        <div>{labels[0]}</div>
        <div>{labels[labels.length - 1]}</div>
      </div>
    </RevenueStyle>
  );
};

const RevenueStyle = styled.div`
  background-color: ${colors.backgroundColor};
  padding: 20px 30px;
  border-radius: 10px;
  color: ${colors.white};

  .revenue_bottom_container {
    display: flex;
    justify-content: space-between;
    margin-left: 45px;
  }
  .revenue_bottom_container > div {
    font-size: calc(12 / 1.6 * 0.1rem);
    font-weight: 200;
    word-spacing: 3px;
    color: ${colors.darkGrey};
  }
`;

export default Revenue;
