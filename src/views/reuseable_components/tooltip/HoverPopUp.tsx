import styled from 'styled-components';
import colors from '../../../assets/colors/project_colors';

type PopUpProp = { text: string };

const HoverPopUp = ({ text }: PopUpProp) => {
  return (
    <PopUpStyle className="pop_up_text_container">
      <div className="pop_up_text">{text}</div>
    </PopUpStyle>
  );
};

const PopUpStyle = styled.div`
  display: none;
  position: absolute;
  text-align: center;
  width: 16rem;
  z-index: 30;
  // top: -300%;

  .pop_up_text {
    background-color: rgba(0, 0, 0, 0.9);
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-word;
    border-radius: 7px;
    border: 1px dashed rgba(255, 255, 255, 0.5);
    font-size: calc(11 / 1.6 * 0.1rem);
    color: ${colors.darkWhite};
    height: 60px;
    overflow-y: scroll;
  }

  .pop_up_text:after {
    content: '';
    width: 10px;
    height: 10px;
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    transform: rotate(45deg);
    margin-left: auto;
    margin-right: auto;
  }

  .pop_up_text::-webkit-scrollbar {
    width: 4px;
  }

  .pop_up_text::-webkit-scrollbar-thumb {
    background: #33313183;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
  }

  .pop_up_text::-webkit-scrollbar-thumb:hover {
    background: #5b5959;
    cursor: pointer;
  }
`;
export default HoverPopUp;
