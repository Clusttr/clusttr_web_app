import styled from 'styled-components';
import colors from '../../assets/colors/project_colors';
import Header from '../reuseable_components/header/Header';

const Dashboard = () => {
  return (
    <DashboardStyle>
      <Header />
    </DashboardStyle>
  );
};

const DashboardStyle = styled.div`
  color: ${colors.white};

  > :nth-child(2) {
    color: ${colors.black};
  }
  > :nth-child(3) {
    color: ${colors.orange};
  }
`;

export default Dashboard;
