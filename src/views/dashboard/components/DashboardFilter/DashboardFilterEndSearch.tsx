import { MagnifyingGlass } from '@phosphor-icons/react';
import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import { Dispatch, SetStateAction } from 'react';

const DashboardFilterEndSearch = ({
  setIsSearchActive,
}: {
  setIsSearchActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <EndSearchStyle onClick={() => setIsSearchActive(true)}>
      <MagnifyingGlass size={16} color="#001423" />
      <div className="text">Search</div>
    </EndSearchStyle>
  );
};

const EndSearchStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.lightLightGreen};
  padding: 9px 17px;
  margin-left: 20px;
  border-radius: 8px;
  gap: 5px;
  cursor: pointer;

  .text {
    font-size: calc(11.5 / 1.6 * 0.1rem);
    color: #222c35;
  }
`;

export default DashboardFilterEndSearch;
