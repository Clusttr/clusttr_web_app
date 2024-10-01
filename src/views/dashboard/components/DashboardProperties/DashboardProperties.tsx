import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import DashboardPropertiesHeader from './DashboardPropertiesHeader';
import SearchAndFilter from './SearchAndFilter';
import PropertiesGridBox from './PropertiesGridBox';
import fakePropertyData from './fakePropertyData';
import { useContext } from 'react';
import DashboardListBox from './DashboardListBox';
import { PropertiesContext } from '../../../../assets/utils/PropertiesContext';
import CheckCountComponent from './CheckCountComponent';

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
type DashboardPropertiesProp = {
  setIsActive: Dispatch<
    SetStateAction<{
      isDeleteActive: boolean;
      isEditActive: boolean;
      isSearchActive: boolean;
    }>
  >;
};

const DashboardProperties = ({ setIsActive }: DashboardPropertiesProp) => {
  const { isGrid, checkCount } = useContext(PropertiesContext);

  return (
    <DashboardPropertiesStyle $isGrid={isGrid} $CC={checkCount}>
      <DashboardPropertiesHeader />
      <SearchAndFilter />
      <div
        className={
          isGrid ? 'property_grid_container' : 'property_list_container'
        }
      >
        {isGrid ? (
          fakePropertyData.map(
            (
              {
                propertySize,
                beds,
                bathrooms,
                pricePerFragment,
                totalAssetPrice,
                totalAssetValue,
                location,
                propertyName,
              }: fakeDataProp,
              index
            ) => (
              <div key={index}>
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
              </div>
            )
          )
        ) : (
          <DashboardListBox setIsActive={setIsActive} />
        )}
      </div>

      <CheckCountComponent
        checkCount={checkCount}
        animate={`check_count_animation_${checkCount === 0 ? 'end' : 'start'}`}
        setIsActive={setIsActive}
      />
    </DashboardPropertiesStyle>
  );
};

const DashboardPropertiesStyle = styled.div<{ $isGrid: boolean; $CC: number }>`
  background-color: ${({ $isGrid }) =>
    $isGrid ? colors.propertiesBGColor : colors.backgroundColor};
  margin: 15px 20px;
  padding: 20px;
  border-radius: 10px;
  color: ${colors.white};
  // height: 550px;
  overflow: hidden;
  transition: all 0.4s;

  .check_count_animation_start {
    animation: slide_check_count_start 0.4s forwards;
  }
  .check_count_animation_end {
    animation: slide_check_count_end 0.4s backwards;
  }
  @keyframes slide_check_count_start {
    0% {
      bottom: -50px;
      opacity: 0;
    }
    60% {
      opacity: 0.5;
      bottom: 0;
    }
    70% {
      opacity: 0.6;
      bottom: 40px;
    }
    80% {
      opacity: 0.8;
      bottom: 30px;
    }
    90% {
      opacity: 0.9;
      bottom: 40px;
    }
    100% {
      opacity: 1;
      bottom: 30px;
    }
  }
  @keyframes slide_check_count_end {
    0% {
      bottom: 30px;
      opacity: ${({ $CC }) => ($CC === 0 ? 0 : 1)};
    }
    20% {
      opacity: ${({ $CC }) => ($CC === 0 ? 0 : 0.5)};
    }
    40% {
      bottom: 20px;
      opacity: ${({ $CC }) => ($CC === 0 ? 0 : 0.4)};
    }
    70% {
      bottom: 40px;
      opacity: ${({ $CC }) => ($CC === 0 ? 0 : 0.2)};
    }
    100% {
      bottom: -50px;
      opacity: 0;
    }
  }
  .list_box_header > div {
    text-transform: uppercase;
    font-weight: 200;
    font-size: calc(11.5 / 1.6 * 0.1rem);
  }

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
