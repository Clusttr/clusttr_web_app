import styled from 'styled-components';
import TopHeader from './top_header/TopHeader';
import BottomHeader from './bottom_header/BottomHeader';
import NotificationTray from './NotificationTray';
import { useState } from 'react';

const Header = () => {
  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const [closeTray, setCloseTray] = useState(false);

  return (
    <HeaderStyle>
      <TopHeader
        setIsTrayOpen={setIsTrayOpen}
        isTrayOpen={isTrayOpen}
        setCloseTray={setCloseTray}
      />
      <BottomHeader />
      {isTrayOpen ? <NotificationTray closeTray={closeTray} /> : <></>}
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  z-index: 30;
  width: 100%;
  top: 0;
`;

export default Header;
