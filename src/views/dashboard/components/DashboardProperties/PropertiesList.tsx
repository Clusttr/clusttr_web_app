import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import ListCheckBox from './ListCheckBox';
import ListChildren from './ListChildren';

type listType = {
  propertySize: number;
  pricePerFragment: number;
  totalAssetPrice: number;
  location: string;
  propertyName: string;
  idx: number;
  setIsActive: Dispatch<
    SetStateAction<{
      isDeleteActive: boolean;
      isEditActive: boolean;
      isSearchActive: boolean;
    }>
  >;
};

const PropertiesList = ({
  propertySize,
  pricePerFragment,
  totalAssetPrice,
  location,
  propertyName,
  idx,
  setIsActive,
}: listType) => {
  return (
    <ListStyle $index={idx}>
      <ListCheckBox idx={idx} />
      <ListChildren
        propertySize={propertySize}
        pricePerFragment={pricePerFragment}
        totalAssetPrice={totalAssetPrice}
        location={location}
        propertyName={propertyName}
        setIsActive={setIsActive}
      />
    </ListStyle>
  );
};

const ListStyle = styled.div<{
  $index: number;
}>`
  display: grid;
  grid-template-columns: 0.2fr 1fr 1.2fr 0.8fr 1fr 1.1fr 0.3fr;
  background-color: ${colors.backgroundColor};
  padding: 5px 18px;
  align-items: center;
  transform: scale(0) translateY(0);
  animation: row_lists 0.6s calc(0.1s * ${({ $index }) =>
    $index}) ease-in-out forwards;

  @keyframes row_lists {
    0% {
      transform: scale(0) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }


  }
`;

// ? animation for deleting elements in the list
// ${({ $index, $deleteIndex, $isModalClosed }) =>
//   $isModalClosed && $index === $deleteIndex
//     ? `animation: slide_off 1s ease-in-out forwards;`
//     : `animation: row_lists 0.6s calc(0.1s * ${$index}) ease-in-out forwards;`}

// @keyframes slide_off {
//   0% {
//     transform: scale(1) translateY(0);
//   }
//   50% {
//     transform: scale(1) translateX(90%);
//   }
//   100% {
//     transform: scale(0) translateX(100%);
//   }

export default PropertiesList;
