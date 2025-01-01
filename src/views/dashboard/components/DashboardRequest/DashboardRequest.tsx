import styled from 'styled-components';
import DashboardRequestBox from './DashboardRequestBox';
import { Dispatch, SetStateAction, useState } from 'react';
import DashboardRequestSent from './DashboardRequestSent';

type RequestPropType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  closeModal: any;
  isModalClosed: boolean;
  title: string;
  request: string;
  setIsModalClosed: Dispatch<SetStateAction<boolean>>;
};

const DashboardRequest = ({
  closeModal,
  isModalClosed,
  title,
  request,
  setIsModalClosed,
}: RequestPropType) => {
  const [isSendBtn, setIsSendBtn] = useState(false);

  const closeUpModal = () => {
    setIsModalClosed(true);
    setTimeout(() => closeModal(), 500);
  };

  return (
    <RequestStyle>
      {isSendBtn ? (
        <DashboardRequestSent
          request={request}
          isModalClosed={isModalClosed}
          setIsModalClosed={setIsModalClosed}
          closeModal={closeModal}
        />
      ) : (
        <DashboardRequestBox
          isModalClosed={isModalClosed}
          closeUpModal={closeUpModal}
          setIsSendBtn={setIsSendBtn}
          title={title}
        />
      )}
      <span onClick={() => closeUpModal()}></span>
    </RequestStyle>
  );
};

const RequestStyle = styled.div``;

export default DashboardRequest;
