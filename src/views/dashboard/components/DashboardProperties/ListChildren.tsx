import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import testPic from '../../../../assets/images/location_image.png';
import { PencilSimpleLine, TrashSimple } from '@phosphor-icons/react';
import EllipseText from '../../../reuseable_components/ellipsis_text/EllipseText';
import { Tooltip } from 'react-tooltip';
import colors from '../../../../assets/colors/project_colors';

type listType = {
  propertySize: number;
  pricePerFragment: number;
  totalAssetPrice: number;
  location: string;
  propertyName: string;
  setIsActive: Dispatch<
    SetStateAction<{
      isDeleteActive: boolean;
      isEditActive: boolean;
      isSearchActive: boolean;
    }>
  >;
};

const ListChildren = ({
  propertySize,
  pricePerFragment,
  totalAssetPrice,
  location,
  propertyName,
  setIsActive,
}: listType) => {
  const editRequest = () => {
    console.log('request edit');
    setIsActive({
      isEditActive: true,
      isDeleteActive: false,
      isSearchActive: false,
    });
  };
  const deleteRequest = () => {
    console.log('request delete');
    // setDeleteIndex(idx);
    setIsActive({
      isEditActive: false,
      isDeleteActive: true,
      isSearchActive: false,
    });
  };

  return (
    <>
      <PropertyNameStyle>
        <div className="font_size">
          <EllipseText id="propertyName" str={propertyName} len={21} />
        </div>
        {propertyName.length > 21 ? (
          <Tooltip
            id="propertyName"
            className="tooltip"
            classNameArrow="tooltip_arrow"
            opacity={0.9}
          />
        ) : (
          ''
        )}
      </PropertyNameStyle>
      <LocationStyle>
        <div className="location_image_container">
          <img className="location_image" src={testPic} alt="location_img" />
        </div>
        <div>
          <div className="font_size">
            <EllipseText id="location" str={location} len={24} />
          </div>
          {location.length > 24 ? (
            <Tooltip
              id="location"
              className="tooltip"
              classNameArrow="tooltip_arrow"
              opacity={0.9}
            />
          ) : (
            ''
          )}
        </div>
      </LocationStyle>
      <PropertySizeStyle>
        <div className="property_size font_size">
          <EllipseText
            id="propertySize"
            str={`${propertySize.toLocaleString()}`}
            len={5}
          />
          m²
        </div>
        {`${propertySize.toLocaleString()}`.length > 5 ? (
          <Tooltip
            id="propertySize"
            className="tooltip"
            classNameArrow="tooltip_arrow"
            opacity={0.9}
          />
        ) : (
          ''
        )}
      </PropertySizeStyle>
      <TotalAssetPriceStyle>
        <div>
          <div className="font_size total_asset_price">
            $
            <EllipseText
              id="totalAssetPrice"
              str={`${totalAssetPrice.toLocaleString()}`}
              len={10}
            />
          </div>
          {`${totalAssetPrice.toLocaleString()}`.length > 10 ? (
            <Tooltip
              id="totalAssetPrice"
              className="tooltip"
              classNameArrow="tooltip_arrow"
              opacity={0.9}
            />
          ) : (
            ''
          )}
        </div>
      </TotalAssetPriceStyle>
      <PricePerFragmentStyle>
        <div className="font_size">
          $
          <EllipseText
            id="pricePerFragment"
            str={`${pricePerFragment.toLocaleString()}`}
            len={12}
          />
        </div>
        {`${pricePerFragment.toLocaleString()}`.length > 12 ? (
          <Tooltip
            id="pricePerFragment"
            className="tooltip"
            classNameArrow="tooltip_arrow"
            opacity={0.9}
          />
        ) : (
          ''
        )}
      </PricePerFragmentStyle>
      <ActionStyle>
        <div className="action" onClick={editRequest}>
          <PencilSimpleLine size={15} />
        </div>
        <div className="action" onClick={deleteRequest}>
          <TrashSimple size={15.5} />
        </div>
      </ActionStyle>
    </>
  );
};

const PropertyNameStyle = styled.div`
  .tooltip {
    border-radius: 5px;
    border: 1px dashed rgba(255, 255, 255, 0.5);
    width: 20%;
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

  .font_size {
    font-size: calc(12.9 / 1.6 * 0.1rem);
    font-weight: 200;
    display: inline;
  }
`;
const LocationStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .tooltip {
    border-radius: 5px;
    border: 1px dashed rgba(255, 255, 255, 0.5);
    width: 20%;
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

  .font_size {
    font-size: calc(12.9 / 1.6 * 0.1rem);
    font-weight: 200;
    display: inline;
  }

  .location_image_container {
    display: flex;
    width: 35px;
    height: 35px;
    border-radius: 5px;
    background: linear-gradient(to bottom right, #323232, #101010);
    overflow: hidden;
  }
  .location_image {
    width: 100%;
  }
`;
const PropertySizeStyle = styled.div`
  .tooltip {
    border-radius: 5px;
    border: 1px dashed rgba(255, 255, 255, 0.5);
    width: 13%;
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
  .font_size {
    font-size: calc(12.9 / 1.6 * 0.1rem);
    font-weight: 200;
    display: inline;
  }
  .property_size {
    background-color: #036363;
    display: inline;
    padding: 5px 10px;
    border-radius: 20px;
  }
`;
const TotalAssetPriceStyle = styled.div`
  .tooltip {
    border-radius: 5px;
    border: 1px dashed rgba(255, 255, 255, 0.5);
    width: 13%;
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
  .font_size {
    font-size: calc(12.9 / 1.6 * 0.1rem);
    font-weight: 200;
    display: inline;
  }
  .total_asset_price {
    background-color: ${colors.lightBGColor};
    display: inline;
    padding: 5px 10px;
    border-radius: 20px;
  }
`;
const PricePerFragmentStyle = styled.div`
  .tooltip {
    border-radius: 5px;
    border: 1px dashed rgba(255, 255, 255, 0.5);
    width: 13%;
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
  .font_size {
    font-size: calc(12.9 / 1.6 * 0.1rem);
    font-weight: 200;
    display: inline;
  }
`;
const ActionStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;

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
`;

export default ListChildren;
