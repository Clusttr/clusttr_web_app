import styled from 'styled-components';
import colors from '../../../assets/colors/project_colors';
import { Dispatch, SetStateAction, useState } from 'react';

type supportDataType = {
  title: string;
  message: string;
};
type SupportFormType = {
  supportData: supportDataType;
  setSupportData: Dispatch<SetStateAction<supportDataType>>;
  setIsMessageSent: Dispatch<SetStateAction<boolean>>;
};
//   eslint-disable-next-line @typescript-eslint/no-explicit-any
type onChangeType = { target: { value: any } };

const SupportForm = ({
  setSupportData,
  supportData,
  setIsMessageSent,
}: SupportFormType) => {
  const [loading, setIsLoading] = useState(false);

  const handleTitle = ({ target: { value } }: onChangeType) =>
    setSupportData(prev => {
      return {
        ...prev,
        title: value,
      };
    });
  const handleMessage = ({ target: { value } }: onChangeType) =>
    setSupportData(prev => {
      return {
        ...prev,
        message: value,
      };
    });

  const uploadForm = () => {
    setIsLoading(true);
    setTimeout(async () => {
      setIsLoading(false);

      setTimeout(() => {
        setIsMessageSent(true);
      }, 500);
    }, 2000);
  };

  return (
    <SupportFormStyle>
      <div className="input_container">
        <div className="input_title">title</div>
        <input
          placeholder={`Documents didn't upload`}
          onChange={e => handleTitle(e)}
          value={supportData.title}
          id="input_text"
        />
      </div>
      <div className="input_container text_area_container">
        <div className="input_title">
          description of your message (please be detailed)
        </div>
        <textarea
          placeholder={`The documents do not upload when the button is clicked while using a certain network.`}
          maxLength={1000}
          onChange={e => handleMessage(e)}
          value={supportData.message}
          id="input_text"
        />
      </div>
      <BtnStyle
        onClick={
          supportData.title && supportData.message ? uploadForm : () => {}
        }
      >
        <div
          className={`btn ${
            supportData.title && supportData.message
              ? 'fill_complete'
              : 'fill_not_complete'
          }`}
        >
          {loading ? <span className="loader"></span> : <span>Send</span>}
        </div>
      </BtnStyle>
    </SupportFormStyle>
  );
};

const BtnStyle = styled.div`
  cursor: pointer;
  width: 100%;
  //   position: relative;
  margin-top: 10px;

  .fill_complete {
    background-color: ${colors.lightLightGreen};
  }
  .fill_not_complete {
    background-color: #aaaeb8;
  }
  .btn {
    // position: absolute;
    top: 60px;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fcfcfe;
    border-radius: 20px;
    font-size: calc(13.5 / 1.6 * 0.1rem);
    transition: all 0.3s ease-in-out;
    box-shadow: inset -0.2rem -0.2rem 0.8rem 0.2rem rgba(0, 0, 0, 0.7);
  }
  .btn:hover {
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
const SupportFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .input_container {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .text_area_container {
    height: calc(300 / 1.6 * 0.1rem);
  }
  .input_title {
    text-transform: capitalize;
    color: #b2cac7;
    font-size: calc(12.5 / 1.6 * 0.1rem);
    font-weight: bold;
    padding-left: 2px;
  }
  #input_text {
    // position: absolute;
    display: block;
    // top: 20px;
    background: #0a2c2c;
    color: ${colors.white};
    resize: none;
    line-height: 1.3rem;
    outline: none;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(5, 2, 13, 0.2);
    padding: 0.6rem 1rem;
    border-radius: 12px;
    font-weight: 200;
    font-size: calc(15.5 / 1.6 * 0.1rem);
    box-shadow: inset -0.1rem -0.1rem 0.6rem 0.05rem rgba(255, 255, 255, 0.2);
  }

  #input_text::placeholder {
    color: #355358;
    font-weight: 200;
    font-size: calc(15 / 1.6 * 0.1rem);
    user-select: none;
  }
  /* width */
  #input_text::-webkit-scrollbar {
    width: 5px;
    position: absolute;
  }

  /* Handle */
  #input_text::-webkit-scrollbar-thumb {
    padding: 30px;
    background: #33313183;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
  }

  /* Handle on hover */
  #input_text::-webkit-scrollbar-thumb:hover {
    background: #5b5959;
    cursor: pointer;
  }
`;

export default SupportForm;
