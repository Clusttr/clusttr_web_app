import styled from 'styled-components';
import revenueIcon from '../../../../assets/images/revenue_icon.png';
import colors from '../../../../assets/colors/project_colors';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const SubHeader = () => {
  return (
    <SubHeaderStyle>
      <div className="revenue_header_left_top">
        <div className="revenue_header_left_top_text">Revenue</div>
        <div>
          <img
            className="revenue_header_left_top_icon"
            src={revenueIcon}
            alt="revenue"
          />
        </div>
      </div>
      <div className="revenue_header_left_middle">
        Showing total revenue for the last months
      </div>
      <div className="revenue_header_left_bottom">
        <div>$3,450,829.29</div>
        <div>-11% vs last month</div>
      </div>
    </SubHeaderStyle>
  );
};

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
        <SubHeader />

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

const SubHeaderStyle = styled.div`
  .revenue_header_left_top {
    display: flex;
    gap: 5px;
  }
  .revenue_header_left_top_text {
    font-size: calc(15 / 1.6 * 0.1rem);
  }
  .revenue_header_left_top_icon {
    width: 100%;
  }
  .revenue_header_left_middle {
    padding-top: 3px;
    font-weight: 200;
    font-size: calc(12 / 1.6 * 0.1rem);
    color: ${colors.lightGrey};
  }
  .revenue_header_left_bottom {
    display: flex;
    padding: 9px 0 10px;
    align-items: center;
    gap: 8px;
  }
  .revenue_header_left_bottom :first-child {
    font-size: calc(19 / 1.6 * 0.1rem);
    font-weight: 500;
    color: ${colors.lightGreenTextColor};
  }

  .revenue_header_left_bottom :last-child {
    font-size: calc(12 / 1.6 * 0.1rem);
    font-weight: 200;
    color: ${colors.red};
  }
`;

const RevenueHeaderStyle = styled.div`
  .revenue_header_container {
    display: flex;
    justify-content: space-between;
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
