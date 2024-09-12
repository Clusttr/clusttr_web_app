import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import { useState } from 'react';
import { Funnel, ListBullets, SquaresFour } from '@phosphor-icons/react';

type SFProp = {
  setIsGrid: React.Dispatch<React.SetStateAction<boolean>>;
};
const FilterAndView = ({ setIsGrid }: SFProp) => {
  const [isList, setIsList] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);
  const toggleActiveStyle = {
    color: colors.black,
    transform: 'rotate(-180deg)',
    transition: 'all 0.4s',
  };
  const toggleInActiveStyle = {
    color: colors.black,
    transition: 'all 0.4s',
  };
  const toggleFilterFunc = () => setToggleFilter(!toggleFilter);
  const toggleView = (option: boolean) => setIsList(option);

  const switchView = (toggle: boolean, isGrid: boolean) => {
    toggleView(toggle);
    setIsGrid(isGrid);
  };

  return (
    <FilterAndViewStyle>
      <div className="filter_and_view_filter" onClick={toggleFilterFunc}>
        <div style={toggleFilter ? toggleActiveStyle : toggleInActiveStyle}>
          <Funnel size={14} color={`${colors.black}`} />
        </div>
        <div className="filter_and_view_filter_text">Filter</div>
      </div>
      <div className="filter_and_view_view">
        <div
          className={isList ? 'active' : ''}
          onClick={() => switchView(true, false)}
        >
          <ListBullets
            size={22}
            color={isList ? `${colors.black}` : `${colors.white}`}
          />
        </div>
        <div
          className={isList ? '' : 'active'}
          onClick={() => switchView(false, true)}
        >
          <SquaresFour
            size={22}
            color={isList ? `${colors.white}` : `${colors.black}`}
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

  .filter_and_view_filter {
    display: flex;
    align-items: center;
    gap: 2px;
    background-color: ${colors.white};
    padding: 5px 14px;
    border-radius: 6px;
    cursor: pointer;
  }
  .filter_and_view_filter_text {
    font-size: calc(12.5 / 1.6 * 0.1rem);
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
    padding: 3px;
    transform: rotate(-180deg);
    transition: transform 0.4s;
  }

  .active {
    background-color: ${colors.white};
    border-radius: 7px;
    transform: rotate(0deg);
    transition: all 0.4s;
  }
`;

export default FilterAndView;
