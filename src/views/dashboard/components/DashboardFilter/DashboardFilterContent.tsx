import styled from 'styled-components';
import DashboardFilterSearch from './DashboardFilterSearch';
import DashboardFilterEndSearch from './DashboardFilterEndSearch';
import DashboardFilterDropdown from './DashboardFilterDropdown';
import DashboardFilterRange from './DashboardFilterRange';
import { Dispatch, SetStateAction } from 'react';


const DashboardFilterContent = ({
  setIsSearchActive,
}: {
  setIsSearchActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <ContentStyle>
      <DashboardFilterSearch />
      <DashboardFilterDropdown />
      <DashboardFilterRange title="Price range" maxValue={4500000} unit="$" />
      <DashboardFilterRange title="Area range" maxValue={2000000} unit="m²" />
      <DashboardFilterEndSearch setIsSearchActive={setIsSearchActive} />
    </ContentStyle>
  );
};

const ContentStyle = styled.div`
  display: grid;
 grid-template-columns: 1.5fr 1.5fr 1fr 1fr .4fr;
 align-items: center;
  gap: 20px;
`;

export default DashboardFilterContent;
