import styled from 'styled-components';
import PropertiesIcon from '../../../../assets/images/properties_icon.png';

const DashboardPropertiesHeader = () => {
  return (
    <DashboardPropertiesHeaderStyle>
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

const DashboardPropertiesHeaderStyle = styled.div`
  padding-bottom: 10px;
  border-bottom: 2px solid #1e2120;

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
