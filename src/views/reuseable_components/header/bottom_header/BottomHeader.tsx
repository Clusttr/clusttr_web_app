import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';

const BottomHeader = () => {
  return (
    <BottomHeaderStyle>
      <div className="overview">Overview</div>
    </BottomHeaderStyle>
  );
};

const BottomHeaderStyle = styled.div`
  background-color: ${colors.backgroundColor};
  border-top: 1px solid ${colors.lightGreenBorder};
  border-bottom: 1px solid ${colors.lightGreenBorder};

  .overview {
    width: 3.5%;
    padding: 10px 0px;
    color: white;
    font-size: 0.7rem;
    font-weight: 200;
    margin-left: 15px;
    border-top: 2px solid ${colors.lightLightGreen};
  }
`;

export default BottomHeader;
