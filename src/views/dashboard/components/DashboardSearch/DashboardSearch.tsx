import styled from 'styled-components';
import DashboardSearchBox from './DashboardSearchBox';
import { Dispatch, SetStateAction } from 'react';

type SearchPropType = {
  isModalClosed: boolean;
  setIsModalClosed: Dispatch<SetStateAction<boolean>>;
  closeSearchBox: () => void;
};

const DashboardSearch = ({
  isModalClosed,
  setIsModalClosed,
  closeSearchBox,
}: SearchPropType) => {
  const closeUpModal = () => {
    setIsModalClosed(true);
    setTimeout(() => closeSearchBox(), 500);
  };
  return (
    <DashboardSearchStyle>
      <DashboardSearchBox
        closeUpModal={closeUpModal}
        isModalClosed={isModalClosed}
      />
      <span onClick={() => closeUpModal()}></span>
    </DashboardSearchStyle>
  );
};

const DashboardSearchStyle = styled.div``;

export default DashboardSearch;
