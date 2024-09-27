import { useState, useEffect, useContext } from 'react';
import testPic from '../../../../assets/images/temp_test_pic.jpg';
import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import { getShortString } from './shortString';
import { PropertiesContext } from '../../../../assets/utils/PropertiesContext';
import { PencilSimpleLine, TrashSimple } from '@phosphor-icons/react';

type listType = {
  propertySize: number;
  pricePerFragment: number;
  totalAssetPrice: number;
  location: string;
  propertyName: string;
  idx: number;
};

const PropertiesList = ({
  propertySize,
  pricePerFragment,
  totalAssetPrice,
  location,
  propertyName,
  idx,
}: listType) => {
  const { checked, setChecked } = useContext(PropertiesContext);
  const [shortStrings, setShortStrings] = useState({
    propertySize: propertySize.toLocaleString(),
    pricePerFragment: pricePerFragment.toLocaleString(),
    totalAssetPrice: totalAssetPrice.toLocaleString(),
    location: location,
    propertyName: propertyName,
  });

  const checkBoxClick = () => {
    const newArray = checked.map((item, index) =>
      idx === index ? !item : item
    );
    setChecked(newArray);
  };

  useEffect(() => {
    getShortString(
      `${shortStrings.propertyName}`,
      setShortStrings,
      'propertyName',
      21
    );
    getShortString(`${shortStrings.location}`, setShortStrings, 'location', 24);
    getShortString(
      `${shortStrings.propertySize}`,
      setShortStrings,
      'propertySize',
      5
    );
    getShortString(
      `${shortStrings.totalAssetPrice}`,
      setShortStrings,
      'totalAssetPrice',
      10
    );
    getShortString(
      `${shortStrings.pricePerFragment}`,
      setShortStrings,
      'pricePerFragment',
      12
    );
  }, [
    checked,
    shortStrings.location,
    shortStrings.pricePerFragment,
    shortStrings.propertyName,
    shortStrings.propertySize,
    shortStrings.totalAssetPrice,
  ]);

  return (
    <ListStyle $checked={checked[idx]} $index={idx}>
      <div className="check_box_container">
        <div className="checkmark" onClick={checkBoxClick}></div>
      </div>
      <div className="font_size">{shortStrings.propertyName}</div>
      <div className="location_container">
        <div className="location_image_container">
          <img className="location_image" src={testPic} alt="location_img" />
        </div>
        <div className="location font_size">{shortStrings.location}</div>
      </div>
      <div>
        <div className="add_background_for_size_and_asset property_size font_size">
          {shortStrings.propertySize} m²
        </div>
      </div>
      <div>
        <div className="add_background_for_size_and_asset total_asset_price font_size">
          ${shortStrings.totalAssetPrice}
        </div>
      </div>
      <div className="font_size">${shortStrings.pricePerFragment}</div>
      <div className="action_container">
        <div className="action">
          <PencilSimpleLine size={15} />
        </div>
        <div className="action">
          <TrashSimple size={15.5} />
        </div>
      </div>
    </ListStyle>
  );
};

const ListStyle = styled.div<{ $checked: boolean; $index: number }>`
  display: grid;
  grid-template-columns: 0.2fr 1fr 1.2fr 0.8fr 1fr 1.1fr 0.3fr;
  background-color: ${colors.backgroundColor};
  padding: 5px 18px;
  align-items: center;
  transform: scale(0) translateY(0);
  animation: row_lists 0.6s calc(0.1s * ${({ $index }) => $index})
    ease-in-out forwards;

  @keyframes row_lists {
    0% {
      transform: scale(0) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    
    }
  }

  .check_box_container {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 15px;
  }
  .checkmark {
    position: relative;
    display: block;
    height: ${({ $checked }) => ($checked ? '12px' : '13px')};
    width: ${({ $checked }) => ($checked ? '12px' : '13px')};
    border-radius: 2px;
    border: 1px solid #eee;
    background-color: ${({ $checked }) =>
      $checked ? '#41414194' : 'transparent'};
    transition: all 0.2s;
  }
  .checkmark:hover {
    background-color: #41414194;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: ${({ $checked }) => ($checked ? 'block' : 'none')};
    left: 13%;
    top: 50%;
    border: solid transparent;
    border-width: 0 1px 1px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: checkbox-check 125ms 250ms cubic-bezier(0.5, 0, 0.23, 1) forwards;
  }

  .location_container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .location_image_container {
    display: flex;
    width: 35px;
    height: 33px;
    border-radius: 5px;
    background: linear-gradient(to bottom right, #323232, #101010);
    overflow: hidden;
  }
  .location_image {
    width: 100%;
  }
  .font_size {
    font-size: calc(12.9 / 1.6 * 0.1rem);
    font-weight: 200;
  }
  .add_background_for_size_and_asset {
    display: inline;
    padding: 5px 10px;
    border-radius: 20px;
  }
  .property_size {
    background-color: #036363;
  }
  .total_asset_price {
    background-color: ${colors.lightBGColor};
  }
  .action_container {
    display: flex;
    justify-content: center;
    gap: 7px;
  }
  .action {
    display: flex;
    align-items: center;
    background-color: ${colors.lightBGColor};
    border-radius: 5px;
    padding: 3px;
    cursor: pointer;
  }
  .action:hover {
    color: rgba(255, 255, 255, 0.5);
  }
  @keyframes checkbox-check {
    0% {
      width: 0;
      height: 0;
      border-color: #212121;
      transform: translate3d(0, 0, 0) rotate(45deg);
    }
    33% {
      width: 0.2em;
      height: 0;
      transform: translate3d(0, 0, 0) rotate(45deg);
    }
    100% {
      width: 2.5px;
      height: 7px;
      border-color: white;
      transform: translate3d(0, -0.5em, 0) rotate(45deg);
    }
  }
`;

export default PropertiesList;
