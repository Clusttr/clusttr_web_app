import styled from 'styled-components';
import windowEdge from '../../../../assets/images/window_edge.png';
import bed from '../../../../assets/images/bed.png';
import bathroom from '../../../../assets/images/bathroom.png';
import coinsIcon from '../../../../assets/images/coins.png';
import dollarIcon from '../../../../assets/images/dollar_icon.png';
import assets from '../../../../assets/images/assets.png';
import testPic from '../../../../assets/images/temp_test_pic.png';
import angle from '../../../../assets/images/angle.png';
import EllipseText from '../../../reuseable_components/ellipsis_text/EllipseText';
import PropertiesGridBoxInfo from './PropertiesGridBoxInfo';
// import colors from '../../../../assets/colors/project_colors';
import { Tooltip } from 'react-tooltip';
import colors from '../../../../assets/colors/project_colors';

type CardType = {
  propertySize: number;
  beds: number;
  bathrooms: number;
  pricePerFragment: number;
  totalAssetPrice: number;
  totalAssetValue: number;
  location: string;
  propertyName: string;
};

const PropertiesGridBox = ({
  propertySize,
  beds,
  bathrooms,
  pricePerFragment,
  totalAssetPrice,
  totalAssetValue,
  location,
  propertyName,
}: CardType) => {
  return (
    <GridBoxStyle>
      <div className="card_img_container">
        <img src={testPic} alt="property image" className="card_img" />
      </div>
      <div className="card_info_container">
        <div className="card_top_info_container">
          <div className="card_top_info_property_name">
            <EllipseText id="propertyName" str={propertyName} len={25} />
            {propertyName.length > 25 ? (
              <Tooltip
                id="propertyName"
                className="tooltip"
                classNameArrow="tooltip_arrow"
                opacity={0.73}
              />
            ) : (
              ''
            )}
          </div>
          <div className="card_top_info_location">
            <EllipseText id="location" str={location} len={60} />
            {`${location}`.length > 60 ? (
              <Tooltip
                id="location"
                className="tooltip"
                classNameArrow="tooltip_arrow"
                opacity={0.73}
              />
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="card_bottom_info_container">
          <PropertiesGridBoxInfo
            str={`${propertySize.toLocaleString()}`}
            angleIcon={''}
            id="propertySize"
            info={
              <EllipseText
                id="propertySize"
                str={`${propertySize.toLocaleString()}`}
                len={9}
              />
            }
            len={9}
            unit="ft"
            icon={windowEdge}
          />
          <PropertiesGridBoxInfo
            str={`${pricePerFragment.toLocaleString()}`}
            angleIcon={angle}
            id="pricePerFragment"
            info={
              <EllipseText
                id="pricePerFragment"
                str={`${pricePerFragment.toLocaleString()}`}
                len={9}
              />
            }
            len={9}
            icon={coinsIcon}
            unit="$"
          />
          <PropertiesGridBoxInfo
            str={''}
            angleIcon={''}
            info={`${beds}`}
            icon={bed}
            unit=""
            id=""
            len={0}
          />
          <PropertiesGridBoxInfo
            str={`${totalAssetPrice.toLocaleString()}`}
            angleIcon={angle}
            id="totalAssetPrice"
            info={
              <EllipseText
                id="totalAssetPrice"
                str={`${totalAssetPrice.toLocaleString()}`}
                len={12}
              />
            }
            len={12}
            icon={dollarIcon}
            unit="$"
          />
          <PropertiesGridBoxInfo
            str={''}
            angleIcon={''}
            info={`${bathrooms}`}
            icon={bathroom}
            unit=""
            id=""
            len={0}
          />
          <PropertiesGridBoxInfo
            str={`${totalAssetValue.toLocaleString()}`}
            angleIcon={''}
            id="totalAssetValue"
            info={
              <EllipseText
                id="totalAssetValue"
                str={`${totalAssetValue.toLocaleString()}`}
                len={9}
              />
            }
            len={9}
            icon={assets}
            unit=""
          />
        </div>
      </div>
    </GridBoxStyle>
  );
};

const GridBoxStyle = styled.div`
  .tooltip {
    border-radius: 5px;
    border: 1px dashed rgba(255, 255, 255, 0.5);
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.black};
    color: ${colors.darkWhite};
    font-size: calc(11 / 1.6 * 0.1rem);
    z-index: 20;
  }
  .tooltip_arrow {
    border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
    border-right: 1px dashed rgba(255, 255, 255, 0.5);
  }

  .card_img_container {
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 15rem;
    background: linear-gradient(to bottom right, #323232, #101010);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .card_top_info_property_name:hover > .pop_up_text_container {
    display: inline-block;
    top: -400%;
    left: 0;
  }
  .card_top_info_location:hover > .pop_up_text_container {
    display: inline-block;
    top: -230%;
    left: 0;
  }
  .pop_up_text:after {
    border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
    border-right: 1px dashed rgba(255, 255, 255, 0.5);
    bottom: -10%;
  }
  .card_img {
    width: 140%;
    transition: all 0.4s;
  }
  .card_img:hover {
    width: 170%;
    transition: all 0.4s;
  }
  .card_info_container {
    padding: 15px 0 0 3px;
    display: flex;
    flex-direction: column;
    gap: 13px;
  }
  .card_top_info_container {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .card_top_info_property_name {
    font-weight: 200;
    font-size: calc(15 / 1.6 * 0.1rem);
    position: relative;
    cursor: pointer;
  }
  .card_top_info_property_name:hover {
    color: rgba(250, 250, 250, 0.85);
    transition: all 0.3s;
  }
  .card_top_info_location {
    font-weight: 200;
    color: #999999;
    font-size: calc(13.2 / 1.6 * 0.1rem);
    position: relative;
    line-height: 1.1rem;
  }
  .card_bottom_info_container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 8px;
  }
`;

export default PropertiesGridBox;
