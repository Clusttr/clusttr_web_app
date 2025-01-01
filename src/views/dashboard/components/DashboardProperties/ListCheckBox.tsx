import { useContext } from 'react';
import styled from 'styled-components';
import { PropertiesContext } from '../../../../assets/utils/PropertiesContext';

const ListCheckBox = ({ idx }: { idx: number }) => {
  const { checked, setChecked } = useContext(PropertiesContext);

  const checkBoxClick = () => {
    const newArray = checked.map((item, index) =>
      idx === index ? !item : item
    );
    setChecked(newArray);
  };

  return (
    <ListCheckBoxStyle $checked={checked[idx]}>
      <div className="checkmark" onClick={checkBoxClick}></div>
    </ListCheckBoxStyle>
  );
};

const ListCheckBoxStyle = styled.div<{ $checked: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 15px;

  .checkmark {
    position: relative;
    display: block;
    height: ${({ $checked }) => ($checked ? '12px' : '13px')};
    width: ${({ $checked }) => ($checked ? '12px' : '13px')};
    border-radius: 2px;
    border: 1px solid #eee;
    background-color: ${({ $checked }) =>
      $checked ? '#41414194' : 'transparent'};
    transition: all 0.2s;
  }
  .checkmark:hover {
    background-color: #41414194;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: ${({ $checked }) => ($checked ? 'block' : 'none')};
    left: 13%;
    top: 50%;
    border: solid transparent;
    border-width: 0 1px 1px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: checkbox-check 125ms 250ms cubic-bezier(0.5, 0, 0.23, 1) forwards;
  }
  @keyframes checkbox-check {
    0% {
      width: 0;
      height: 0;
      border-color: #212121;
      transform: translate3d(0, 0, 0) rotate(45deg);
    }
    33% {
      width: 0.2em;
      height: 0;
      transform: translate3d(0, 0, 0) rotate(45deg);
    }
    100% {
      width: 2.5px;
      height: 7px;
      border-color: white;
      transform: translate3d(0, -0.5em, 0) rotate(45deg);
    }
  }
`;

export default ListCheckBox;
