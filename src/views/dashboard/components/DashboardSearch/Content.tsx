import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import EllipseText from '../../../reuseable_components/ellipsis_text/EllipseText';
import fakePropertyData from '../DashboardProperties/fakePropertyData';
import { Tooltip } from 'react-tooltip';

type fakeDataProp = {
  propertySize: number;
  totalAssetPrice: number;
  propertyName: string;
};

const Content = ({ inputText }: { inputText: string }) => {
  return (
    <ContentStyle
      className={`${
        inputText.toLowerCase().includes('bedroom')
          ? 'box_content_container_content'
          : ''
      }`}
    >
      {' '}
      {fakePropertyData.map(
        (
          { propertySize, totalAssetPrice, propertyName }: fakeDataProp,
          index
        ) => (
          <>
            <div className="box_content_list_container" key={index}>
              <div className="box_content_list">
                <EllipseText id="propertyName" str={propertyName} len={13} />
                {propertyName.length > 13 ? (
                  <Tooltip
                    id="propertyName"
                    className="tooltip"
                    classNameArrow="tooltip_arrow"
                    opacity={0.9}
                  />
                ) : (
                  <></>
                )}
              </div>
              <div className="box_content_list property_size">
                <div>
                  <EllipseText
                    id="propertySize"
                    str={`${propertySize.toLocaleString()}`}
                    len={5}
                  />{' '}
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
                  <></>
                )}
              </div>
              <div className="box_content_list total_asset_price">
                $
                <EllipseText
                  id="totalAssetPrice"
                  str={`${totalAssetPrice.toLocaleString()}`}
                  len={10}
                />
                {`${totalAssetPrice.toLocaleString()}`.length > 10 ? (
                  <Tooltip
                    id="totalAssetPrice"
                    className="tooltip"
                    classNameArrow="tooltip_arrow"
                    opacity={0.9}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </>
        )
      )}
    </ContentStyle>
  );
};

const ContentStyle = styled.div`
  border: 1px solid rgba(1, 227, 212, 0.2);
  border-radius: 12px;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-out;

  .box_content_list_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // gap: 50px;
    background-color: #051818;
    color: white;
    padding: 8px 16px;
    border-radius: 12px;
    cursor: pointer;
  }
  .box_content_list {
    font-size: calc(13 / 1.6 * 0.1rem);
    font-weight: 500;
  }
  .property_size {
    text-align: center;
    background-color: #036363;
    padding: 5px 10px;
    border-radius: 20px;
    min-width: 15%;
    width: 20%;
  }
  .total_asset_price {
    text-align: center;
    background-color: ${colors.lightBGColor};
    display: inline;
    padding: 5px 10px;
    border-radius: 20px;
    width: 26%;
  }
  .tooltip {
    border-radius: 5px;
    border: 1px dashed rgba(255, 255, 255, 0.5);
    min-width: 10%;
    max-width: 40%;
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
`;

export default Content;
