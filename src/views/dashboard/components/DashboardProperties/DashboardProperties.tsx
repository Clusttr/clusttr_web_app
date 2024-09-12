import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import DashboardPropertiesHeader from './DashboardPropertiesHeader';
import SearchAndFilter from './SearchAndFilter';
import PropertiesGridBox from './PropertiesGridBox';
import fakePropertyData from './fakePropertyData';
import { useState } from 'react';
import DashboardListBox from './DashboardListBox';

type fakeDataProp = {
  propertySize: number;
  beds: number;
  bathrooms: number;
  pricePerFragment: number;
  totalAssetPrice: number;
  totalAssetValue: number;
  location: string;
  propertyName: string;
};

const DashboardProperties = () => {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <DashboardPropertiesStyle isGrid={isGrid}>
      <DashboardPropertiesHeader />
      <SearchAndFilter setIsGrid={setIsGrid} />
      <div
        className={
          isGrid ? 'property_grid_container' : 'property_list_container'
        }
      >
        {isGrid ? (
          fakePropertyData.map(
            ({
              propertySize,
              beds,
              bathrooms,
              pricePerFragment,
              totalAssetPrice,
              totalAssetValue,
              location,
              propertyName,
            }: fakeDataProp) => (
              <PropertiesGridBox
                propertySize={propertySize}
                beds={beds}
                bathrooms={bathrooms}
                pricePerFragment={pricePerFragment}
                totalAssetPrice={totalAssetPrice}
                totalAssetValue={totalAssetValue}
                location={location}
                propertyName={propertyName}
              />
            )
          )
        ) : (
          <DashboardListBox />
        )}
      </div>
    </DashboardPropertiesStyle>
  );
};

const DashboardPropertiesStyle = styled.div<{ isGrid: boolean }>`
  background-color: ${({ isGrid }) =>
    isGrid ? colors.propertiesBGColor : colors.backgroundColor};
  margin: 15px 20px;
  padding: 20px;
  border-radius: 10px;
  color: ${colors.white};
  // height: 550px;
  overflow: hidden;
  transition: all 0.4s;

  .property_grid_container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-top: 10px;
    padding: 5px 10px 0 0;
    user-select: none;
    height: 410px;
    overflow: scroll;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  .property_list_container {
    padding-top: 15px;
    user-select: none;
  }
  // .property_grid_container::-webkit-scrollbar {
  //   display: none;
  // }
  .property_grid_container::-webkit-scrollbar {
    width: 4px;
  }

  .property_grid_container::-webkit-scrollbar-thumb {
    background: #33313183;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
  }

  .property_grid_container::-webkit-scrollbar-thumb:hover {
    background: #5b5959;
    cursor: pointer;
  }
`;

export default DashboardProperties;
