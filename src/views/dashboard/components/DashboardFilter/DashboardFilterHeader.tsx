import styled from 'styled-components';
import houseIcon from '../../../../assets/images/house.png';
import colors from '../../../../assets/colors/project_colors';

const DashboardFilterHeader = () => {
  return (
    <HeaderStyle>
      <div className="header_title">
        <div className="header">Filter</div>
        <div>
          <img className="header_image" src={houseIcon} alt="filter" />
        </div>
      </div>
      <div className="header_subtitle">
        Search for property list
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  .header_title {
    display: flex;
    gap: 5px;
  }
  .header {
    font-size: calc(15 / 1.6 * 0.1rem);
    font-weight: bold;
  }
  .header_image {
    width: 100%;
  }
  .header_subtitle {
    font-weight: 200;
    font-size: calc(12 / 1.6 * 0.1rem);
    color: ${colors.lightGrey};
  }
`;

export default DashboardFilterHeader;
