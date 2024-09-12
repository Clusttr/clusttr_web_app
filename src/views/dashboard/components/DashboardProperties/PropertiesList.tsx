import { useState, useEffect } from 'react';
import testPic from '../../../../assets/images/temp_test_pic.jpg';
import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';

type listType = {
  propertySize: number;
  pricePerFragment: number;
  totalAssetPrice: number;
  location: string;
  propertyName: string;
};

const PropertiesList = ({
  propertySize,
  pricePerFragment,
  totalAssetPrice,
  location,
  propertyName,
}: listType) => {
  const [shortLocation, setShortLocation] = useState(location);

  useEffect(() => {
    if (location.length > 24)
      setShortLocation(
        location.split('').splice(0, 24).join('').padEnd(27, '.')
      );
  }, [location]);

  return (
    <ListStyle>
      <div className="check_box_container">
        <input type="checkbox" checked={true} id="" />
        <span className="checkmark"></span>
      </div>
      <div className="font_size">{propertyName}</div>
      <div className="location_container">
        <div className="location_image_container">
          <img className="location_image" src={testPic} alt="location_img" />
        </div>
        <div className="location font_size">{shortLocation || location}</div>
      </div>
      <div>
        <div className="property_size font_size">
          {propertySize.toLocaleString()} m²
        </div>
      </div>
      <div>
        <div className="total_asset_price font_size">
          ${totalAssetPrice.toLocaleString()}
        </div>
      </div>
      <div className="font_size">${pricePerFragment.toLocaleString()}</div>
      <div>Action</div>
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr 1.2fr 0.8fr 1fr 1.1fr 0.3fr;
  background-color: ${colors.backgroundColor};
  padding: 5px 18px;
  //   justify-items: center;
  align-items: center;

  .check_box_container {
    /* Customize the label (the container) */
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  .check_box_container input {
    /* Hide the default checkbox */
    display:none;
  }
  .checkmark {
    /* Create a custom checkbox */
    display:block;
    height: 13px;
    width: 13px;
    border-radius: 2px;
    border: 1px solid #eee;
  }
    .check_box_container:hover input ~ .checkmark:hover {
  background-color: ${colors.darkerGrey};
}

  .location_container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .location_image_container {
    display: flex;
    width: 40px;
    height: 37px;
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
  .property_size {
    display: inline;
    background-color: #036363;
    padding: 7px 10px;
    border-radius: 20px;
  }
  .total_asset_price {
    display: inline;
    background-color: #402638;
    padding: 7px 10px;
    border-radius: 20px;
  }
`;

export default PropertiesList;
