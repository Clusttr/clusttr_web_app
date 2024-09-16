import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import { useContext, useState } from 'react';
import { Funnel, ListBullets, SquaresFour } from '@phosphor-icons/react';
import { PropertiesContext } from '../../../../assets/utils/PropertiesContext';

const FilterAndView = () => {
  // useState and useContext
  const { setChecked, checked, isGrid, setIsGrid } =
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

  return (
    <FilterAndViewStyle>
      {isGrid ? (
        ''
      ) : (
        <div
          className="clear_checkboxes"
          onClick={() => setChecked(new Array(checked.length).fill(false))}
        >
          Clear Checkboxes
        </div>
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

  .clear_checkboxes {
    background-color: ${colors.lightRed};
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-size: calc(13.6 / 1.6 * 0.1rem);
    user-select: none;
    font-weight: 500;
    color: ${colors.white};
  }

  .filter_and_view_filter {
    display: flex;
    align-items: center;
    gap: 2px;
    background-color: ${colors.white};
    padding: 6px 16px;
    border-radius: 6px;
    cursor: pointer;
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
  }

  .active {
    background-color: ${colors.white};
    border-radius: 7px;
    transform: rotate(0deg);
    transition: all 0.4s;
  }
`;

export default FilterAndView;
