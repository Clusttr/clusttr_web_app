import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import fakePropertyData from './fakePropertyData';
import PropertiesList from './PropertiesList';
import { useContext, useEffect } from 'react';
import { PropertiesContext } from '../../../../assets/utils/PropertiesContext';

type fakeDataProp = {
  propertySize: number;
  pricePerFragment: number;
  totalAssetPrice: number;
  location: string;
  propertyName: string;
};
type ListBoxProp = {
  setIsActive: Dispatch<
    SetStateAction<{
      isDeleteActive: boolean;
      isEditActive: boolean;
      isSearchActive: boolean;
    }>
  >;
};

const DashboardListBox = ({ setIsActive }: ListBoxProp) => {
  const { setChecked } = useContext(PropertiesContext);

  useEffect(() => {
    setChecked(new Array(fakePropertyData.length).fill(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ListBoxStyle>
      <div className="list_box_header">
        <div></div>
        <div>property name</div>
        <div>location</div>
        <div>property size</div>
        <div>total asset price</div>
        <div>price per fragment</div>
        <div>action</div>
      </div>
      <div className="list_box_lists">
        {fakePropertyData.map(
          (
            {
              propertySize,
              pricePerFragment,
              totalAssetPrice,
              location,
              propertyName,
            }: fakeDataProp,
            index
          ) => (
            <div key={index}>
              <PropertiesList
                idx={index}
                propertySize={propertySize}
                pricePerFragment={pricePerFragment}
                totalAssetPrice={totalAssetPrice}
                location={location}
                propertyName={propertyName}
                setIsActive={setIsActive}
              />
            </div>
          )
        )}
      </div>
    </ListBoxStyle>
  );
};

const ListBoxStyle = styled.div`
  background-color: ${colors.propertiesBGColor};
  box-shadow: 0.2px 0.2px 2px #01e3d4cc;
  border-radius: 8px;
  //   height: 450px;
  overflow: hidden;

  .list_box_header {
    background-color: ${colors.lightBlack};
    color: ${colors.darkWhite};
    padding: 18px 20px;
    display: grid;
    grid-template-columns: 0.2fr 1.09fr 1.28fr 0.83fr 1fr 1.3fr 0.3fr;
  }
  .list_box_header > div {
    text-transform: uppercase;
    font-weight: 200;
    font-size: calc(11.5 / 1.6 * 0.1rem);
  }
  .list_box_lists {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 415px;
    padding: 10px 0 10px 0;
    overflow: scroll;
    overflow-x: hidden;
  }
  .list_box_lists::-webkit-scrollbar {
    width: 4px;
  }

  .list_box_lists::-webkit-scrollbar-thumb {
    background: #33313183;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
  }

  .list_box_lists::-webkit-scrollbar-thumb:hover {
    background: #5b5959;
    cursor: pointer;
  }
`;

export default DashboardListBox;
