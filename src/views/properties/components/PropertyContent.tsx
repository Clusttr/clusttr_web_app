import styled from 'styled-components';
import colors from '../../../assets/colors/project_colors';
import LeftPropertyContent from './LeftPropertyContent';
import RightPropertyContent from './RightPropertyContent';

const PropertyContent = () => {
  return (
    <PropertyContentStyle>
      <div className="property_content_header">
        <div className="header_title">
          Properties Details - <span>Charles Wuse Property</span>
        </div>
        <div className="header_subtitle">Details regarding this property</div>
      </div>
      <div className="property_content_content">
        <LeftPropertyContent />
        <RightPropertyContent />
      </div>
    </PropertyContentStyle>
  );
};

const PropertyContentStyle = styled.div`
  margin: 15px 20px;
  border: 1px solid rgba(1, 227, 212, 0.2);
  box-shadow: 0 0 1.5px 0 rgba(1, 227, 212, 0.2);
  border-radius: 8px;

  .property_content_header {
    padding: 20px;
    border-bottom: 1px solid rgba(1, 227, 212, 0.2);
  }
  .header_title {
    color: ${colors.white};
    font-size: calc(15 / 1.6 * 0.1rem);
    font-weight: bold;
  }
  .header_title > span {
    color: ${colors.darkWhite};
  }
  .header_subtitle {
    color: ${colors.darkGrey};
    font-size: calc(12.5 / 1.6 * 0.1rem);
    font-weight: 500;
    padding-top: 7px;
  }
  .property_content_content {
    display:grid;
    grid-template-columns: 2.2fr 1fr;
    gap: 20px;
    padding: 20px;
  }
`;

export default PropertyContent;
