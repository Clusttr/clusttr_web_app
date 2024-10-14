import styled from "styled-components"
import revenueIcon from '../../../../assets/images/revenue_icon.png';
import colors from "../../../../assets/colors/project_colors";

const RevenueTopHeader = () => {
  return (
    <HeaderStyle>
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
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  .revenue_header_left_top {
    display: flex;
    gap: 5px;
  }
  .revenue_header_left_top_text {
    font-size: calc(15 / 1.6 * 0.1rem);
    font-weight: bold;
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
    padding: 9px 0 13px;
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

export default RevenueTopHeader