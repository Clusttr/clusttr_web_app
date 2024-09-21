import styled from 'styled-components';
import PropertiesIcon from '../../../../assets/images/properties_icon.png';
import { PropertiesContext } from '../../../../assets/utils/PropertiesContext';
import { useContext } from 'react';
import colors from '../../../../assets/colors/project_colors';

const DashboardPropertiesHeader = () => {
  const { isGrid } = useContext(PropertiesContext);


  return (
    <DashboardPropertiesHeaderStyle $isGrid={isGrid}>
      <div className="dashboard_properties_header_top">
        <div className="dashboard_properties_header_top_text">Properties</div>
        <div>
          <img
            className="dashboard_properties_header_top_icon"
            src={PropertiesIcon}
            alt="Dashboard Properties"
          />
        </div>
      </div>
      <div className="dashboard_properties_header_bottom">
        List of properties you own.
      </div>
    </DashboardPropertiesHeaderStyle>
  );
};

const DashboardPropertiesHeaderStyle = styled.div<{ $isGrid: boolean }>`
  position: relative;
  padding-bottom: 10px;
  border-bottom: 2px solid #1e2120;
  z-index: 3;
  background-color: ${({ $isGrid }) =>
    $isGrid ? colors.propertiesBGColor : colors.backgroundColor};
  transition: all 0.4s;

  .dashboard_properties_header_top {
    display: flex;
    gap: 8px;
  }
  .dashboard_properties_header_top_text {
    font-size: calc(15 / 1.6 * 0.1rem);
  }
  .dashboard_properties_header_top_icon {
    width: 100%;
  }

  .dashboard_properties_header_bottom {
    color: #9aaba6;
    padding-top: 2px;
    font-size: calc(13 / 1.6 * 0.1rem);
    font-weight: 200;
  }
`;

export default DashboardPropertiesHeader;
