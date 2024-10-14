import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import DashboardFilterHeader from './DashboardFilterHeader';
import DashboardFilterContent from './DashboardFilterContent';

const DashboardFilter = () => {
  return (
    <DashboardFilterStyle>
      <DashboardFilterHeader />
      <DashboardFilterContent/>
    </DashboardFilterStyle>
  );
};

const DashboardFilterStyle = styled.div`
  background-color: ${colors.backgroundColor};
  margin: 0 20px 15px;
  padding: 20px 30px;
  border-radius: 10px;
  color: ${colors.white};
  height: 170px;
  display:flex;
  flex-direction: column;
  gap: 5px;
`;

export default DashboardFilter;
