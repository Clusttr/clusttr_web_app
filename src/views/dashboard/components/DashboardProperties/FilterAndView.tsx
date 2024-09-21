import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import { useContext, useState } from 'react';
import { Funnel, ListBullets, SquaresFour } from '@phosphor-icons/react';
import { PropertiesContext } from '../../../../assets/utils/PropertiesContext';

type CCBoxesTypes = {
  animate: string;
  checked: boolean[];
  setChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
};

const ClearCheckBoxes = ({ animate, setChecked, checked }: CCBoxesTypes) => {
  return (
    <div
      className={`clear_checkboxes ${animate}`}
      onClick={() => setChecked(new Array(checked.length).fill(false))}
    >
      Clear Checkboxes
    </div>
  );
};

const FilterAndView = () => {
  // useState and useContext
  const { setChecked, checked, isGrid, setIsGrid, checkCount } =
    useContext(PropertiesContext);
  const [toggleFilter, setToggleFilter] = useState(false);

  // functions
  const toggleFilterFunc = () => setToggleFilter(!toggleFilter);
  // style
  const toggleActiveStyle = {
    color: colors.black,
    transform: 'rotate(-180deg)',
    transition: 'all 0.4s',
  };
  const toggleInActiveStyle = {
    color: colors.black,
    transition: 'all 0.4s',
  };

  // ?animate the clear checkboxes

  return (
    <FilterAndViewStyle>
      {isGrid || checkCount === 0 ? (
        <ClearCheckBoxes
          animate="clear_checkboxes_animation_end"
          checked={checked}
          setChecked={setChecked}
        />
      ) : (
        <ClearCheckBoxes
          animate="clear_checkboxes_animation_start"
          checked={checked}
          setChecked={setChecked}
        />
      )}
      <div className="filter_and_view_filter" onClick={toggleFilterFunc}>
        <div style={toggleFilter ? toggleActiveStyle : toggleInActiveStyle}>
          <Funnel size={14} color={`${colors.black}`} />
        </div>
        <div className="filter_and_view_filter_text">Filter</div>
      </div>
      <div className="filter_and_view_view">
        <div
          className={isGrid ? '' : 'active'}
          onClick={() => setIsGrid(false)}
        >
          <ListBullets
            size={22}
            color={isGrid ? `${colors.white}` : `${colors.black}`}
          />
        </div>
        <div className={isGrid ? 'active' : ''} onClick={() => setIsGrid(true)}>
          <SquaresFour
            size={22}
            color={isGrid ? `${colors.black}` : `${colors.white}`}
          />
        </div>
      </div>
    </FilterAndViewStyle>
  );
};

const FilterAndViewStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;

  .clear_checkboxes {
    position: absolute;
    right: 110%;
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
  }
  .clear_checkboxes_animation_start {
    animation: slide_button_start 0.4s forwards;
  }
  .clear_checkboxes_animation_end {
    animation: slide_button_end 0.4s backwards;
  }
  .clear_checkboxes:hover {
    background-color: red;
    cursor: pointer;
    margin-top: 2px;
    transition: background-color 0.4s, margin-top 0.25s;
  }

  .filter_and_view_filter {
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 2px;
    background-color: ${colors.white};
    padding: 6px 16px;
    border-radius: 6px;
    cursor: pointer;
  }
  .filter_and_view_filter:hover {
    background-color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    margin-top: 2px;
    transition: background-color 0.4s, margin-top 0.25s;
  }

  .filter_and_view_filter_text {
    font-size: calc(13.6 / 1.6 * 0.1rem);
    user-select: none;
    font-weight: 500;
    color: ${colors.black};
  }
  .filter_and_view_view {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .filter_and_view_view > * {
    display: flex;
    padding: 4px;
    transform: rotate(-180deg);
    transition: transform 0.4s;
    cursor: pointer;
    border-radius: 7px;
  }

  .active {
    background-color: ${colors.white};
    transform: rotate(0deg);
    transition: all 0.4s;
  }
  .active:hover {
    background-color: rgba(255, 255, 255, 0.85);
    cursor: pointer;
    transition: all 0.2s;
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
      opacity: 1;
    }
    50% {
      top: 10%;
      opacity: 0.7;
    }
    60% {
      top: -5%;
      opacity: 0.5;
    }
    100% {
      top: -70%;
      opacity: 0;
    }
  }
`;

export default FilterAndView;
