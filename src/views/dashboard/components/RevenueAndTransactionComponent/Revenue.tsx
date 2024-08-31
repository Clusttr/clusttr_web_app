import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import RevenueHeader from './RevenueHeader';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { data, options } from './chartData.tsx';

Chart.register(CategoryScale);
const Revenue = () => {
  return (
    <RevenueStyle>
      <RevenueHeader />
      <div>
        <Line data={data} options={options} height="235px" width="200px" />
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
