// import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import { WarningOctagon } from '@phosphor-icons/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type RequestBoxPropType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  closeModal: any;
  title: string;
  isModalClosed: boolean;
  setIsModalClosed: Dispatch<SetStateAction<boolean>>;
  setIsSendBtn: Dispatch<SetStateAction<boolean>>;
};

const DashboardRequestBox = ({
  closeModal,
  title,
  isModalClosed,
  setIsModalClosed,
  setIsSendBtn,
}: RequestBoxPropType) => {
  const [textValue, setTextValue] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [isTextEmpty, setIsTextEmpty] = useState(false);

  const cancelFunc = () => {
    setIsModalClosed(true);
    setTimeout(() => closeModal(), 500);
  };

  const sendFunc = () => {
    if (textValue === '') {
      setIsTextEmpty(true);
      return;
    }

    setIsLoading(true);
    console.log(textValue);
    setTimeout(() => {
      setIsLoading(false);
      setIsSendBtn(true);
    }, 2000);
  };

  useEffect(() => {
    if (textValue !== '') {
      setIsTextEmpty(false);
    }
  }, [textValue]);

  return (
    <DeleteAndEditStyle $isModalClosed={isModalClosed}>
      <div className="caution_icon_container">
        <div className="caution_icon_background_color_three caution_icon_background">
          <div className="caution_icon_background_color_two caution_icon_background">
            <div className="caution_icon_background_color_one caution_icon_background">
              <WarningOctagon size={20} style={{ opacity: 0.9 }} />
            </div>
          </div>
        </div>
      </div>
      <ContentStyle>
        <div className="content_text_container">
          <div className="title">{title}</div>
          <div className="sub_title">
            Please state the reason(s) for this request and an admin will get to
            you in a moment.
          </div>
        </div>
        <div className="text_area_container">
          <textarea
            placeholder={'Text'}
            maxLength={300}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => {
              setTextValue(e.target.value);
            }}
            style={
              isTextEmpty
                ? {
                    border: `2px solid ${colors.lightRed}`,
                    opacity: 0.8,
                    animation: 'blinkRadar 1s linear',
                  }
                : {}
            }
            value={textValue}
            id="input_search"
          />
        </div>
        <div className="buttons_container">
          <div onClick={cancelFunc} className="btn">
            <div className="cancel_btn">Cancel</div>
          </div>
          <div onClick={sendFunc} className="btn">
            <div className="send_btn">
              {loading ? <span className="loader"></span> : <>Send</>}
            </div>
          </div>
        </div>
      </ContentStyle>
    </DeleteAndEditStyle>
  );
};

const DeleteAndEditStyle = styled.div<{ $isModalClosed: boolean }>`
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
  height: 450px;
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
  }

  .caution_icon_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35%;
  }
  .caution_icon_background {
    border-radius: 50px;
    box-shadow: 0rem 0.1rem 0rem 0rem rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .caution_icon_background_color_three {
    width: 50px;
    height: 50px;
    overflow: hidden;
    background-color: rgba(255, 91, 91, 0.1);
    animation: radar_blink_slowly_one 0.8s forwards alternate infinite;
  }
  @keyframes radar_blink_slowly_one {
    0% {
      width: 50px;
      height: 50px;
    }
    100% {
      width: 80px;
      height: 80px;
    }
  }
  .caution_icon_background_color_two {
    width: 50px;
    height: 50px;
    background-color: rgba(255, 91, 91, 0.2);
    animation: radar_blink_slowly_two 0.8s forwards alternate infinite;
  }
  @keyframes radar_blink_slowly_two {
    0% {
      width: 50px;
      height: 50px;
    }
    100% {
      width: 65px;
      height: 65px;
    }
  }
  .caution_icon_background_color_one {
    width: 50px;
    height: 50px;
    background-color: rgba(255, 91, 91, 0.37);
  }
`;

const ContentStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .content_text_container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    // margin-bottom: 20px;
  }
  .title {
    font-size: calc(15 / 1.6 * 0.1rem);
    font-weight: bolder;
  }
  .sub_title {
    font-size: calc(12 / 1.6 * 0.1rem);
    line-height: 1.3rem;
    font-weight: 500;
    color: ${colors.lightGrey};
  }
  .text_area_container {
    position: relative;
    height: calc(120 / 1.6 * 0.1rem);
  }
  #input_search {
    position: absolute;
    display: block;
    background: #0a2c2c;
    color: ${colors.white};
    resize: none;
    outline: none;
    width: 100%;
    height: 100%;
    border: 2px solid ${colors.ModalBGColor};
    padding: 0.6rem;
    border-radius: 12px;
    font-weight: 200;
    font-size: calc(12.5 / 1.6 * 0.1rem);
    box-shadow: inset -0.1rem -0.1rem 0.6rem 0.05rem rgba(255, 255, 255, 0.2);
  }
  @keyframes blinkRadar {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(-9deg);
    }
    62.5% {
      transform: rotate(3deg);
    }
    75% {
      transform: rotate(-3deg);
    }
    87.5% {
      transform: rotate(3deg);
    }
    100% {
      transform: rotate(-3deg);
    }
  }
  #input_search::placeholder {
    color: #355358;
    font-weight: 200;
    font-size: calc(12.5 / 1.6 * 0.1rem);
    user-select: none;
  }
  /* width */
  #input_search::-webkit-scrollbar {
    width: 5px;
    position: absolute;
  }

  /* Handle */
  #input_search::-webkit-scrollbar-thumb {
    padding: 30px;
    background: #33313183;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
  }

  /* Handle on hover */
  #input_search::-webkit-scrollbar-thumb:hover {
    background: #5b5959;
    cursor: pointer;
  }
  .buttons_container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .btn {
    width: 40%;
    font-size: calc(13.5 / 1.6 * 0.1rem);
    cursor: pointer;
    position: relative;
  }
  .btn > div {
    position: absolute;
    top: 0;
    width: 100%;
    border-radius: 20px;
    padding: 11.5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
  }
  .cancel_btn {
    background-color: white;
    color: black;
    box-shadow: inset -0.2rem -0.2rem 0.7rem 0.2rem rgba(0, 0, 0, 0.7);
  }
  .cancel_btn:hover {
    opacity: 0.85;
    margin-top: 2px;
    margin-right: 1px;
  }
  .send_btn {
    background-color: ${colors.lightLightGreen};
    color: white;
    box-shadow: inset -0.2rem -0.2rem 0.7rem 0.2rem rgba(0, 0, 0, 0.7);
  }
  .send_btn:hover {
    color: white;
    opacity: 0.85;
    margin-top: 2px;
    margin-right: 1px;
  }
  .loader {
    width: 16px;
    height: 16px;
    // border: 1px solid white;
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

export default DashboardRequestBox;
