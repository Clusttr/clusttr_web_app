import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import { XCircle } from '@phosphor-icons/react';
import { useState } from 'react';
import NoContent from './NoContent';
import Content from './Content';

type SearchBoxType = { isModalClosed: boolean; closeUpModal: () => void };

const DashboardSearchBox = ({ isModalClosed, closeUpModal }: SearchBoxType) => {
  const [inputText, setInputText] = useState('');

  return (
    <SearchBoxStyle $isModalClosed={isModalClosed}>
      <div className="box_header">
        <div className="box_header_text">Search</div>
        <div onClick={() => closeUpModal()} className="x_cancel">
          <XCircle size={18} />
        </div>
      </div>
      <div className="box_search_container">
        <input
          className="box_search"
          type="text"
          placeholder="Search"
          value={inputText}
          onChange={({ target: { value } }) => setInputText(value)}
        />
      </div>

      {inputText.toLowerCase().includes('bedroom') ? (
        <Content inputText={inputText} />
      ) : (
        <NoContent inputText={inputText} />
      )}
    </SearchBoxStyle>
  );
};

const SearchBoxStyle = styled.div<{ $isModalClosed: boolean }>`
  position: fixed;
  z-index: 31;
  color: ${colors.white};
  background-color: #051818;
  border-radius: 16px;
  padding: 15px 18px;
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%) rotate(0);
  border: 1px solid #132325;
  width: 37%;
  height: 490px;
  display: flex;
  flex-direction: column;
  gap: 10px;

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

  .box_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box_header_text {
    font-weight: 500;
    font-size: calc(11.2 / 1.6 * 0.1rem);
    color: ${colors.darkWhite};
    text-transform: uppercase;
    padding-left: 3px;
  }
  .x_cancel {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .x_cancel::before {
    content: '';
    position: absolute;
    background-color: #051818;
    padding: 2px 1.5px;
    top: 2.4px;
    left: 2.5px;
    border-radius: 50px;
    transform: rotate(45deg);
  }
  .box_search_container {
    display: flex;
    justify-content: left;
  }
  .box_search {
    outline: none;
    border: 1px solid ${colors.propertyTabLineColor};
    border-radius: 12px;
    width: 100%;
    padding: 10px;
    font-size: calc(12.5 / 1.6 * 0.1rem);
    font-weight: 500;
    background-color: ${colors.darkerLightGreen};
    color: ${colors.lightGreenTextColor};
    transition: all 1s;
  }
  .box_search:placeholder {
    color: #355358;
  }
  .box_content_container_content {
    display: flex;
    flex-direction: column;
    gap: 7px;
    background-color: ${colors.ModalBGColor};
    overflow-y: scroll;
    padding: 7px;
  }
  /* width */
  .box_content_container_content::-webkit-scrollbar {
    width: 4px;
  }

  /* Handle */
  .box_content_container_content::-webkit-scrollbar-thumb {
    background: #33313183;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
  }

  /* Handle on hover */
  .box_content_container_content::-webkit-scrollbar-thumb:hover {
    background: #5b5959;
    cursor: pointer;
  }
  .box_content_container_no_content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    background-color: ${colors.darkerLightGreen};
  }
`;

export default DashboardSearchBox;
