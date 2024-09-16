import styled from 'styled-components';
// import colors from '../../assets/colors/project_colors';
import Header from '../reuseable_components/header/Header';
import DashboardPropertyTab from './components/DashboardPropertyTabComponent/DashboardPropertyTab';
import RevenueAndTransactions from './components/RevenueAndTransactionComponent/RevenueAndTransactions';
import DashboardProperties from './components/DashboardProperties/DashboardProperties';
import { ContextAPI } from '../../assets/utils/PropertiesContext';

const Dashboard = () => {
  return (
    <DashboardStyle>
      <Header />
      <DashboardPropertyTab />
      <RevenueAndTransactions />
      <ContextAPI>
        <DashboardProperties />
      </ContextAPI>
    </DashboardStyle>
  );
};

const DashboardStyle = styled.div``;

export default Dashboard;
