import styled from 'styled-components';
import closeIcon from '../../../assets/images/close_circle.png';
import colors from '../../../assets/colors/project_colors';
import check from '../../../assets/images/check.png';
type FinalPopUpType = {
  closeFunc: () => void;
  isModalClosed: boolean;
  isLoading: boolean;
  title: string;
  subTitle: string;
  isUploadForm: boolean;
};

const FinalPopUp = ({
  closeFunc,
  isModalClosed,
  isLoading,
  title,
  subTitle,
  isUploadForm
}: FinalPopUpType) => {
  return (
    <FinalPopUpStyle $isModalClosed={isModalClosed}>
      <div onClick={closeFunc} className="close_icon">
        <img src={closeIcon} alt="circle_x_mark" />
      </div>
      <div className="check_icon_container">
        <div className="check_icon_background_color_three general_check_icon_background">
          <div className="check_icon_background_color_two general_check_icon_background">
            <div className="check_icon_background_color_one general_check_icon_background">
              <div className="check_icon_background general_check_icon_background">
                <img src={check} alt="check_mark" className="check_icon " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FinalPopUpContentStyle>
        <div className="content_text_container">
          <div className="title">{title}</div>
          <div className={`sub_title ${isUploadForm? 'sub_title_upload':'sub_title_support'}`}>{subTitle}</div>
        </div>
        <div onClick={closeFunc} className="close_btn">
          {isLoading ? <span className="loader"></span> : <>Close</>}
        </div>
      </FinalPopUpContentStyle>
    </FinalPopUpStyle>
  );
};

const FinalPopUpStyle = styled.div<{ $isModalClosed: boolean }>`
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
  width: 26%;
  height: 390px;
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

  ~ span {
    z-index: 30;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    bottom: 0;
    backdrop-filter: blur(5px);
  }
  .close_icon {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }
  .check_icon_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35%;
  }
  .general_check_icon_background {
    border-radius: 50px;
    box-shadow: 0rem 0.1rem 0rem 0rem rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .check_icon {
    opacity: 0.9;
    width: 80%;
  }
  .check_icon_background {
    width: 30px;
    height: 30px;
    padding: 5px;
    background-color: rgb(0, 193, 135, 0.35);
  }
  .check_icon_background_color_one {
    width: 40px;
    height: 40px;
    background-color: rgb(0, 193, 135, 0.32);
    animation: radar_blink_slowly_one 0.8s forwards alternate infinite;
  }
  @keyframes radar_blink_slowly_one {
    0% {
      width: 40px;
      height: 40px;
    }
    100% {
      width: 60px;
      height: 60px;
    }
  }
  .check_icon_background_color_two {
    width: 50px;
    height: 50px;
    background-color: rgb(0, 193, 135, 0.2);
    animation: radar_blink_slowly_two 0.8s forwards alternate infinite;
  }
  @keyframes radar_blink_slowly_two {
    0% {
      width: 50px;
      height: 50px;
    }
    100% {
      width: 75px;
      height: 75px;
    }
  }
  .check_icon_background_color_three {
    width: 60px;
    height: 60px;
    overflow: hidden;
    background-color: rgb(0, 193, 135, 0.1);
    animation: radar_blink_slowly_three 0.8s forwards alternate infinite;
  }
  @keyframes radar_blink_slowly_three {
    0% {
      width: 60px;
      height: 60px;
    }
    100% {
      width: 90px;
      height: 90px;
    }
  }
`;

const FinalPopUpContentStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: space-between;

  .content_text_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .title {
    font-size: calc(17.2 / 1.6 * 0.1rem);
    font-weight: bolder;
  }
  .sub_title {
    font-size: calc(13.5 / 1.6 * 0.1rem);
    line-height: 1.3rem;
    font-weight: 500;
    color: ${colors.lightGrey};
  }
  .sub_title_upload {
    width: 90%;
  }
  .sub_title_support {
    width: 100%;
  }

  .close_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    background-color: ${colors.lightLightGreen};
    color: #0d0f0f;
    width: 100%;
    height: 40px;
    border-radius: 20px;
    font-size: calc(13.5 / 1.6 * 0.1rem);
    box-shadow: inset -0.2rem -0.2rem 0.7rem 0.2rem rgba(0, 0, 0, 0.7);
    transition: all 0.3s ease-in-out;
  }
  .close_btn:hover {
    opacity: 0.85;
    margin-top: 2.5px;
    margin-right: 2px;
    transition: all 0.3s linear;
  }
  .loader {
    display: inline-block;
    width: 16px;
    height: 16px;
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

export default FinalPopUp;
