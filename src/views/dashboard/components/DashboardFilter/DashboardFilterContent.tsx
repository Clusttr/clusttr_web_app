import styled from 'styled-components';
import DashboardFilterSearch from './DashboardFilterSearch';
import DashboardFilterEndSearch from './DashboardFilterEndSearch';
import DashboardFilterDropdown from './DashboardFilterDropdown';
import DashboardFilterRange from './DashboardFilterRange';

const DashboardFilterContent = () => {
  return (
    <ContentStyle>
      <DashboardFilterSearch />
      <DashboardFilterDropdown />
      <DashboardFilterRange title='Price range' />
      <DashboardFilterRange title='Area range' />
      <DashboardFilterEndSearch/>
    </ContentStyle>
  );
};

const ContentStyle = styled.div`
  display: grid;
 grid-template-columns: 1.5fr 1.5fr 1fr 1.6fr .4fr;
 align-items: center;
  gap: 20px;
`;

export default DashboardFilterContent;
