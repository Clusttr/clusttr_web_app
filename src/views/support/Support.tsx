import styled from 'styled-components';
import colors from '../../assets/colors/project_colors';
import { Dispatch, SetStateAction, useState } from 'react';
import FinalPopUp from '../reuseable_components/final_pop_up/FinalPopUp';
import SupportForm from './components/SupportForm';
import closeIcon from '../../assets/images/close_circle.png';

type supportType = {
  closeSupport: boolean;
  isSupportOpen: boolean;
  setIsSupportOpen: Dispatch<SetStateAction<boolean>>;
  setCloseSupport: Dispatch<SetStateAction<boolean>>;
};

const Support = ({
  closeSupport,
  isSupportOpen,
  setCloseSupport,
  setIsSupportOpen,
}: supportType) => {
  const supportDataDefault = {
    title: '',
    message: '',
  };
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [isModalClosed, setIsModalClosed] = useState(false);
  const [supportData, setSupportData] = useState(supportDataDefault);

  const closeSupportFunc = () => {
    if (isSupportOpen) {
      setCloseSupport(true);
      setTimeout(() => {
        setIsSupportOpen(false);
        setCloseSupport(false);
      }, 600);
      return;
    }
    setIsSupportOpen(true);
  };

  const closeFunc = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalClosed(true);
      setSupportData(supportDataDefault);
      setTimeout(() => {
        // * return everything back to it's default state
        setIsModalClosed(false);
        setIsMessageSent(false);
      }, 500);
    }, 1000);
  };

  return (
    <SupportStyle
      style={{
        animation: `${
          closeSupport ? 'slide_out_support' : 'slide_in_support'
        } 0.5s linear forwards`,
      }}
    >
      {/* <Header /> */}
      <ContentStyle>
        <div className="content_header_container">
          <div className="content_header">
            <div className="content_header_title">Contact Support</div>
            <img
              src={closeIcon}
              alt="close_icon"
              className="close_icon"
              onClick={closeSupportFunc}
            />
          </div>
        </div>
        {isMessageSent ? (
          <div>
            <FinalPopUp
              closeFunc={closeFunc}
              isLoading={loading}
              isModalClosed={isModalClosed}
              title={`Message sent Successfully`}
              subTitle={`An admin will get back to you as soon as possible`}
              isUploadForm={false}
            />
            <span onClick={closeFunc}></span>
          </div>
        ) : (
          <></>
        )}
        <div className="content_outer_container">
          <div className="content_inner_container">
            <SupportForm
              setSupportData={setSupportData}
              supportData={supportData}
              setIsMessageSent={setIsMessageSent}
            />
          </div>
        </div>
      </ContentStyle>
    </SupportStyle>
  );
};

const SupportStyle = styled.div`
  position: absolute;
  width: 100%;

  @keyframes slide_in_support {
    0% {
      top: 100vh;
    }
    100% {
      top: 100%;
    }
  }
  @keyframes slide_out_support {
    0% {
      top: 100%;
    }
    100% {
      top: 100vh;
    }
  }
`;

const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 12px 0 0;
  padding-bottom: 100px;
  background-color: ${colors.backgroundColor};
  border-radius: 7px 7px 0 0;

  .content_header_container {
    margin-left: 20px;
    margin-right: 20px;
  }
  .content_header_container:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #1e2120;
    margin-top: 10px;
  }
  .content_header {
    padding: 20px 5px 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content_header_title {
    font-size: calc(17 / 1.6 * 0.1rem);
    font-weight: bolder;
    color: #fcfcfe;
  }
  .close_icon {
    cursor: pointer;
  }
  .content_outer_container {
    display: flex;
    justify-content: center;
  }
  .content_inner_container {
    width: 40%;
    position: relative;
  }
`;
export default Support;
