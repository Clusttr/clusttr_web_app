import styled from 'styled-components';
import colors from '../../assets/colors/project_colors';

const Dashboard = () => {
  return (
    <DashboardStyle>
      <div>Dashboard</div>
      <div>Dashboard</div>
      <div>Dashboard</div>
    </DashboardStyle>
  );
};

const DashboardStyle = styled.div`
  background-color: ${colors.red};
  color: ${colors.white};
  padding: 20px;

  > :nth-child(2) {
    color: ${colors.black};
  }
  > :nth-child(3) {
    color: ${colors.orange};
  }
`;

export default Dashboard;
