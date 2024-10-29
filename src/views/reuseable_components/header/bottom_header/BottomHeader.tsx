import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

type TopStrokeType = {
  isPropertyActive: boolean;
  isProperty: boolean;
};

const TopStroke = ({ isPropertyActive, isProperty }: TopStrokeType) => {
  return (
    <TopStrokeStyle
      style={
        isPropertyActive
          ? { backgroundColor: isProperty ? colors.lightLightGreen : '' }
          : { backgroundColor: !isProperty ? colors.lightLightGreen : '' }
      }
    ></TopStrokeStyle>
  );
};

const BottomHeader = () => {
  const { pathname: windowPathname } = useLocation();
  const [isPropertyActive, setIsPropertyActive] = useState(true);

  const switchActiveState = (value: boolean) => setIsPropertyActive(value);

  return (
    <BottomHeaderStyle>
      <div className="bottom_text_container">
        <div
          className={`bottom_text ${
            isPropertyActive ? 'active' : 'not_active'
          }`}
          onClick={() => switchActiveState(true)}
        >
          <TopStroke isProperty={true} isPropertyActive={isPropertyActive} />
          {windowPathname === '/' && 'Overview'}
          {windowPathname === '/upload' && 'Upload Docs'}
          {windowPathname === '/properties' && 'Property'}
          {windowPathname === '/financials' && 'Financials'}
        </div>
      </div>
      <div className="bottom_text_container">
        {windowPathname === '/properties' && (
          <div
            className={`bottom_text ${
              isPropertyActive ? 'not_active' : 'active'
            }`}
            onClick={() => switchActiveState(false)}
          >
            <TopStroke isProperty={false} isPropertyActive={isPropertyActive} />
            Add Property
          </div>
        )}
      </div>
    </BottomHeaderStyle>
  );
};

const TopStrokeStyle = styled.div`
  content: '';
  height: 2px;
  border-radius: 10px;
  margin-bottom: 8px;
`;

const BottomHeaderStyle = styled.div`
  background-color: ${colors.backgroundColor};
  border-top: 1px solid ${colors.darkerLightGreen};
  border-bottom: 1px solid ${colors.darkerLightGreen};
  display: flex;
  gap: 10px;

  .bottom_text_container {
    margin-left: 15px;
    cursor: pointer;
  }
  .not_active {
    color: ${colors.navLinkColor};
  }
  .active {
    color: ${colors.white};
  }
  .bottom_text {
    padding: 0 0 10px;
    font-size: calc(12 / 1.6 * 0.1rem);
    font-weight: 200;
    display: inline-block;
  }
`;

export default BottomHeader;
