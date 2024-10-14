import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import RevenueTopHeader from './RevenueTopHeader';



const RevenueHeader = () => {
  const [isToggled, setIsToggled] = useState(false);
  const toggleActive = {
    color: colors.black,
    transform: 'rotate(-180deg)',
    transition: 'all 0.4s',
  };
  const toggleInActive = { color: colors.black, transition: 'all 0.4s' };

  return (
    <RevenueHeaderStyle>
      <div className="revenue_header_container">
        <RevenueTopHeader />

        <div className="revenue_header_right">
          <div
            className="revenue_header_right_container"
            onClick={() => setIsToggled(!isToggled)}
          >
            <div className="revenue_header_right">Month</div>

            <FontAwesomeIcon
              icon={faAngleDown}
              fontSize={12}
              style={isToggled ? toggleActive : toggleInActive}
            />
          </div>
        </div>
      </div>
    </RevenueHeaderStyle>
  );
};

const RevenueHeaderStyle = styled.div`
  .revenue_header_container {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #242830;
    margin-bottom: 17px;
  }
  .revenue_header_right_container {
    display: flex;
    align-items: center;
    gap: 20px;

    background-color: ${colors.lighterLightGreen};
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
  }
  .revenue_header_right {
    font-size: calc(12 / 1.6 * 0.1rem);
    user-select: none;
    font-weight: 500;
    color: ${colors.black};
  }
`;

export default RevenueHeader;
