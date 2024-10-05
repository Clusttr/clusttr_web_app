import styled from 'styled-components';
import { PropertiesContext } from '../../../../assets/utils/PropertiesContext';
import { useContext } from 'react';
import colors from '../../../../assets/colors/project_colors';

type CCBoxesTypes = {
  animate: string;
};

const ClearCheckBoxes = ({ animate }: CCBoxesTypes) => {
  const { setChecked, checked, isGrid, checkCount } =
    useContext(PropertiesContext);

  return (
    <CCBoxesStyle
      $isGrid={isGrid}
      $CC={checkCount}
      onClick={() => setChecked(new Array(checked.length).fill(false))}
    >
      <div className={`clear_checkboxes `} id={animate}>
        Clear Checkboxes
      </div>
    </CCBoxesStyle>
  );
};

const CCBoxesStyle = styled.div<{ $isGrid: boolean; $CC: number }>`
  .clear_checkboxes {
    position: absolute;
    right: 220%;
    top: -120%;
    z-index: 0;
    background-color: ${colors.lightRed};
    padding: 7px 16px;
    border-radius: 6px;
    text-wrap: nowrap;
    font-size: calc(13.6 / 1.6 * 0.1rem);
    font-weight: 500;
    color: ${colors.white};
    transition: top 0.4s ease-out;
    display: ${({ $isGrid }) => ($isGrid ? 'none' : 'flex')};
    transition: background-color 0.4s linear, margin-top 0.3s ease-in-out;
    box-shadow: inset -0.2rem -0.4rem 0.8rem 0.2rem rgba(0, 0, 0, 0.7);
  }
  #clear_checkboxes_animation_start {
    animation: slide_button_start 0.4s forwards;
  }
  #clear_checkboxes_animation_end {
    animation: slide_button_end 0.4s backwards;
  }
  .clear_checkboxes:hover {
    background-color: red;
    cursor: pointer;
    margin-top: 2px;
  }

  @keyframes slide_button_start {
    0% {
      top: -50%;
      padding: 7px 16px;
      opacity: 0;
    }
    25% {
      top: -25%;
      opacity: 0.3;
    }
    50% {
      top: -10%%;
      opacity: 0.6;
    }
    60% {
      top: 5%;
      opacity: 0.8;
    }
    70% {
      top: 15%;
      opacity: 1;
    }
    100% {
      top: 10%;
    }
  }
  @keyframes slide_button_end {
    0% {
      top: 30%;
      padding: 7px 16px;
      opacity: ${({ $CC }) => ($CC > 0 ? 1 : 0)};
    }
    50% {
      top: 10%;
      opacity: ${({ $CC }) => ($CC > 0 ? 0.7 : 0)};
    }
    60% {
      top: -5%;
      opacity: ${({ $CC }) => ($CC > 0 ? 0.5 : 0)};
    }
    100% {
      top: -70%;
      opacity: 0;
    }
  }
`;

export default ClearCheckBoxes;
