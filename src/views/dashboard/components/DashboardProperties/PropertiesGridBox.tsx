import styled from 'styled-components';
import windowEdge from '../../../../assets/images/window_edge.png';
import bed from '../../../../assets/images/bed.png';
import bathroom from '../../../../assets/images/bathroom.png';
import coinsIcon from '../../../../assets/images/coins.png';
import dollarIcon from '../../../../assets/images/dollar_icon.png';
import assets from '../../../../assets/images/assets.png';
import testPic from '../../../../assets/images/temp_test_pic.png';
import angle from '../../../../assets/images/angle.png';
import { useEffect, useState } from 'react';
import { getShortString } from './shortString';
// import colors from '../../../../assets/colors/project_colors';

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

const Info = ({
  info,
  icon,
  angleIcon,
}: {
  info: string;
  icon: string;
  angleIcon: string;
}) => {
  const [rotateAngle, setRotateAngle] = useState(true);

  return (
    <div
      className="card_bottom_info"
      onClick={() => setRotateAngle(!rotateAngle)}
    >
      <img src={icon} alt="" />
      <div>{info}</div>
      <img
        src={angleIcon}
        alt=""
        className={rotateAngle ? 'rotate_angle' : 'return_to_default'}
      />
    </div>
  );
};

// ?add shortstring on here

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

  const [shortStrings, setShortStrings] = useState({
    propertySize: propertySize.toLocaleString(),
    pricePerFragment: pricePerFragment.toLocaleString(),
    totalAssetPrice: totalAssetPrice.toLocaleString(),
    location: location,
    propertyName: propertyName,
  });

  
  useEffect(() => {
    getShortString(
      `${shortStrings.propertyName}`,
      setShortStrings,
      'propertyName',
      25
    );
    getShortString(`${shortStrings.location}`, setShortStrings, 'location', 60);
    getShortString(
      `${shortStrings.propertySize}`,
      setShortStrings,
      'propertySize',
      9
    );
    getShortString(
      `${shortStrings.totalAssetPrice}`,
      setShortStrings,
      'totalAssetPrice',
      12
    );
    getShortString(
      `${shortStrings.pricePerFragment}`,
      setShortStrings,
      'pricePerFragment',
      9
    );
  }, [
    shortStrings.location,
    shortStrings.pricePerFragment,
    shortStrings.propertyName,
    shortStrings.propertySize,
    shortStrings.totalAssetPrice,
  ]);

  return (
    <GridBoxStyle>
      <div className="card_img_container">
        <img src={testPic} alt="property image" className="card_img" />
      </div>
      <div className="card_info_container">
        <div className="card_top_info_container">
          <div className="card_top_info_property_name">{shortStrings.propertyName}</div>
          <div className="card_top_info_location">{shortStrings.location}</div>
        </div>
        <div className="card_bottom_info_container">
          <Info
            angleIcon={''}
            info={`${shortStrings.propertySize} ft`}
            icon={windowEdge}
          />
          <Info
            angleIcon={angle}
            info={`$${shortStrings.pricePerFragment}`}
            icon={coinsIcon}
          />
          <Info angleIcon={''} info={`${beds}`} icon={bed} />
          <Info
            angleIcon={angle}
            info={`$${shortStrings.totalAssetPrice}`}
            icon={dollarIcon}
          />
          <Info angleIcon={''} info={`${bathrooms}`} icon={bathroom} />
          <Info angleIcon={''} info={`${totalAssetValue.toLocaleString()}`} icon={assets} />
        </div>
      </div>
    </GridBoxStyle>
  );
};

const GridBoxStyle = styled.div`
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
    line-height: 1.1rem;
  }
  .card_bottom_info_container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 8px;
  }
  .card_bottom_info {
    display: flex;
    align-items: center;
    gap: 8px;
    overflow: hidden;
  }
  .card_bottom_info > div:nth-child(2) {
    font-size: calc(12.5 / 1.6 * 0.1rem);
    font-weight: 200;
  }
  .rotate_angle {
    transform: rotate(180deg);
    transition: all 0.4s;
  }
  .return_to_default {
    transform: rotate(0deg);
    transition: all 0.4s;
  }
`;

export default PropertiesGridBox;
