import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';

const BottomHeader = () => {
  return (
    <BottomHeaderStyle>
      <div>Overview</div>
    </BottomHeaderStyle>
  );
};

const BottomHeaderStyle = styled.div`
  background-color: ${colors.backgroundColor};
  padding: 10px;
`;

export default BottomHeader;
