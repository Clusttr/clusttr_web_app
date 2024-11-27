import styled from 'styled-components';
import propertyImage from '../../../assets/images/temp_property_pic.png';
import colors from '../../../assets/colors/project_colors';
import windowEdge from '../../../assets/images/window_edge.png';
import bed from '../../../assets/images/bed.png';
import bathroom from '../../../assets/images/bathroom.png';
import coinsIcon from '../../../assets/images/coins.png';
import dollarIcon from '../../../assets/images/dollar_icon.png';
import assets from '../../../assets/images/assets.png';
import angle from '../../../assets/images/angle.png';
import PropertiesGridBoxInfo from '../../reuseable_components/PropertiesGridBoxInfo';
import EllipseText from '../../reuseable_components/ellipsis_text/EllipseText';

const LeftPropertyContent = () => {
  return (
    <LeftContentStyle>
      <div className="property_image_container">
        <img
          src={propertyImage}
          alt="property_image"
          className="property_image"
        />
      </div>
      <div>
        <div className="left_property_header">
          <div className="left_property_title">Charles Wuse property</div>
          <div className="left_property_header_subtitle">
            Plot 22 FHA Nyanya Extension, besides mana rise, wuse, Abuja.
          </div>
        </div>
        <div className="left_property_attributes">
          <div>
            <PropertiesGridBoxInfo
              str={`22,350.75`}
              angleIcon={''}
              id="propertySize"
              info={<EllipseText id="propertySize" str={`22,350.75`} len={9} />}
              len={9}
              unit="ft"
              icon={windowEdge}
            />
            <PropertiesGridBoxInfo
              str={''}
              angleIcon={''}
              info={`3`}
              icon={bed}
              unit=""
              id=""
              len={0}
            />
            <PropertiesGridBoxInfo
              str={''}
              angleIcon={''}
              info={`3`}
              icon={bathroom}
              unit=""
              id=""
              len={0}
            />
          </div>
          <div>
            <PropertiesGridBoxInfo
              str={`2,456.05`}
              angleIcon={angle}
              id="pricePerFragment"
              info={
                <EllipseText id="pricePerFragment" str={`2,456.05`} len={9} />
              }
              len={9}
              icon={coinsIcon}
              unit="$"
            />
            <PropertiesGridBoxInfo
              str={`1,374,573.54`}
              angleIcon={angle}
              id="totalAssetPrice"
              info={
                <EllipseText
                  id="totalAssetPrice"
                  str={`1,374,573.54`}
                  len={12}
                />
              }
              len={12}
              icon={dollarIcon}
              unit="$"
            />
            <PropertiesGridBoxInfo
              str={`1305`}
              angleIcon={''}
              id="totalAssetValue"
              info={<EllipseText id="totalAssetValue" str={`1305`} len={9} />}
              len={9}
              icon={assets}
              unit=""
            />
          </div>
        </div>
        <div className="left_property_details_container">
          <div className="left_property_title">Property details </div>
          <div className="left_property_details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </div>
        </div>
      </div>
    </LeftContentStyle>
  );
};

const LeftContentStyle = styled.div`
  .property_image_container {
    background: linear-gradient(
      to bottom right,
      ${colors.darkGrey},
      ${colors.lightBlack}
    );
    width: 862px;
    height: 420px;
    border-radius: 8px;
    overflow: hidden;
  }
  .property_image {
    width: 100%;
  }
  .left_property_header {
    padding: 20px 0 0 3px;
  }
  .left_property_title {
    color: ${colors.white};
    font-size: calc(15 / 1.6 * 0.1rem);
    font-weight: bold;
  }
  .left_property_header_subtitle {
    color: #999999;
    font-size: calc(13.5 / 1.6 * 0.1rem);
    font-weight: 500;
    padding-top: 7px;
  }
  .left_property_attributes {
    display: flex;
    justify-content: space-between;
    padding: 20px 3px 20px 0;
  }
  .left_property_attributes > div {
    display: flex;
    gap: 10px;
  }
  .left_property_details {
    font-size: calc(14.1 / 1.6 * 0.1rem);
    letter-spacing: 0.1px;
    line-height: 1.3rem;
    font-weight: 500;
    color: ${colors.lightGrey};
    margin-top: 8px;
  }
`;
export default LeftPropertyContent;
