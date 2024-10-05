import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import { Dispatch, SetStateAction, useState } from 'react';

type RequestSentPropType = {
  request: string;
  isModalClosed: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  closeModal: any;
  setIsModalClosed: Dispatch<SetStateAction<boolean>>;
};

const DashboardRequestSent = ({
  request,
  isModalClosed,
  closeModal,
  setIsModalClosed,
}: RequestSentPropType) => {
  const [loading, setIsLoading] = useState(false);

  const closeFunc = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalClosed(true);
    }, 2000);
    setTimeout(() => closeModal(), 2500);
  };

  return (
    <RequestSentStyle $isModalClosed={isModalClosed}>
      <div className="request_sent_header">{request} request sent</div>
      <BtnStyle onClick={closeFunc}>
        <div className="close_btn">
          {loading ? <span className="loader"></span> : <span>Close</span>}
        </div>
      </BtnStyle>
    </RequestSentStyle>
  );
};

const RequestSentStyle = styled.div<{ $isModalClosed: boolean }>`
  position: fixed;
  z-index: 31;
  color: white;
  background-color: ${colors.ModalBGColor};
  border-radius: 16px;
  padding: 20px;
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%) rotate(0);
  border: 1px solid #132325;
  width: 28%;
  height: 170px;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  align-items: center;
  gap: 40px;
  animation: ${({ $isModalClosed }) => ($isModalClosed ? 'pop_out' : 'pop_in')}
    0.6s ease-in-out;

  @keyframes pop_in {
    0% {
      transform: translate(-50%, 100%) rotate(90deg);
    }
    50% {
      transform: translate(-50%, -50%) rotate(0);
    }
    50% {
      transform: translate(-50%, -50%) rotate(-2deg);
    }
    62.5% {
      transform: translate(-50%, -50%) rotate(2deg);
    }
    75% {
      transform: translate(-50%, -50%) rotate(-2deg);
    }
    87.5% {
      transform: translate(-50%, -50%) rotate(2deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-2deg);
    }
  }
  @keyframes pop_out {
    0% {
      transform: translate(-50%, -50%) rotate(0);
    }
    12.5 {
      transform: translate(-50%, -50%) rotate(2deg);
    }
    22% {
      transform: translate(-50%, -50%) rotate(-2deg);
    }
    37.5% {
      transform: translate(-50%, -50%) rotate(2deg);
    }
    50% {
      transform: translate(-50%, -50%) rotate(-2deg);
    }
    50% {
      transform: translate(-50%, -50%) rotate(0);
    }
    100% {
      transform: translate(-50%, 100%) rotate(90deg);
    }
  }

  .request_sent_header {
    font-size: calc(15 / 1.6 * 0.1rem);
    font-weight: bolder;
    margin-top: 15px;
  }
  ~ span {
    z-index: 30;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    bottom: 0;
  }
`;

const BtnStyle = styled.div`
  cursor: pointer;
  width: 100%;
  position: relative;

  .close_btn {
    position: absolute;
    top: 0;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.white};
    color: ${colors.black};
    border-radius: 20px;
    font-size: calc(13.5 / 1.6 * 0.1rem);
    box-shadow: inset -0.2rem -0.2rem 0.7rem 0.2rem rgba(0, 0, 0, 0.7);
    transition: all 0.3s ease-in-out;
  }
  .close_btn:hover {
    opacity: 0.9;
    margin-top: 2.5px;
    margin-right: 2px;
  }
  .loader {
    width: 17px;
    height: 17px;
    animation: rotate_loader 0.4s forwards ease-out infinite;
    border-right: 2px solid ${colors.ModalBGColor};
    border-radius: 10px;
  }
  @keyframes rotate_loader {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default DashboardRequestSent;
