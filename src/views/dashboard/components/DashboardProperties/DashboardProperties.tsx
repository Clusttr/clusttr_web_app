import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import DashboardPropertiesHeader from './DashboardPropertiesHeader';
import SearchAndFilter from './SearchAndFilter';
import PropertiesGridBox from './PropertiesGridBox';
import fakePropertyData from './fakePropertyData';
import { useContext } from 'react';
import DashboardListBox from './DashboardListBox';
import { PropertiesContext } from '../../../../assets/utils/PropertiesContext';

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
type CheckCountType = {
  checkCount: number;
  animate: string;
};
const CheckCountComponent = ({ checkCount, animate }: CheckCountType) => {
  return (
    <div className={`check_count ${animate}`}>
      <div className="count_info">
        {checkCount === 0 ? '1' : checkCount} properties selected, what would
        you like to do?
      </div>
      <div className="request_container">
        <div
          className="request request_edit"
          onClick={() => console.log('request edit')}
        >
          Request Edit
        </div>
        <div
          className="request request_delete"
          onClick={() => console.log('request delete')}
        >
          Request Delete
        </div>
      </div>
    </div>
  );
};

const DashboardProperties = () => {
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
          <DashboardListBox />
        )}
      </div>
      {/* {isGrid || checkCount === 0 ? (
        <CheckCountComponent
          checkCount={checkCount}
          animate="check_count_animation_end"
        />
      ) : ( */}
      <CheckCountComponent
        checkCount={checkCount}
        animate={`check_count_animation_${checkCount === 0 ? 'end' : 'start'}`}
      />
      {/* )} */}
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

  .check_count {
    position: fixed;
    bottom: -50px;
    left: 0;
    right: 0;
    background-color: ${colors.lightBlack};
    padding: 7px 15px;
    border-radius: 15px;
    margin-inline: auto;
    width: fit-content;
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 20px;
    box-shadow: 0px 0px 1.7px ${colors.white};
    display: ${({ $isGrid }) => ($isGrid ? 'none' : 'flex')};
  }
  .check_count_animation_start {
    animation: slide_check_count_start 0.4s forwards;
  }
  .check_count_animation_end {
    animation: slide_check_count_end 0.4s backwards;
  }
  .count_info {
    font-size: calc(13.6 / 1.6 * 0.1rem);
    font-weight: 200;
  }
  .request_container {
    display: flex;
    gap: 10px;
  }
  .request {
    top: 0;
    padding: 8px 16px;
    border-radius: 6px;
    text-wrap: nowrap;
    font-size: calc(13.6 / 1.6 * 0.1rem);
    font-weight: 500;
  }
  .request_edit {
    background-color: ${colors.white};
    color: ${colors.black};
  }
  .request_delete {
    left: 110%;
    background-color: ${colors.lightRed};
    color: ${colors.white};
  }
  .request:hover {
    cursor: pointer;
    transition: all 0.4s;
  }
  .request_edit:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  .request_delete:hover {
    background-color: red;
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
