import styled from 'styled-components';
import TopHeader from './top_header/TopHeader';
import BottomHeader from './bottom_header/BottomHeader';

const Header = () => {
  return (
    <HeaderStyle>
      <TopHeader />
      <BottomHeader />
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Header;
