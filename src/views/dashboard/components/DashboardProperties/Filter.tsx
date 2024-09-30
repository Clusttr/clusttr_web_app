import styled from 'styled-components';
import { Funnel } from '@phosphor-icons/react';
import colors from '../../../../assets/colors/project_colors';
import FilterDropDown from './FilterDropDown';

type FilterProp = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toggleFilterFunc: any;
  toggleFilter: boolean;
  setToggleFilter: React.Dispatch<React.SetStateAction<boolean>>;
};

const Filter = ({
  toggleFilter,
  toggleFilterFunc,
  setToggleFilter,
}: FilterProp) => {
  return (
    <FilterStyle $toggleFilter={toggleFilter}>
      <div className="filter" onClick={toggleFilterFunc}>
        <div className={toggleFilter ? 'toggle_active' : 'toggle_inactive'}>
          <Funnel size={14} color={`${colors.black}`} />
        </div>
        <div className="filter_text">Filter</div>
      </div>
      {toggleFilter ? <FilterDropDown setToggleFilter={setToggleFilter} /> : ''}
    </FilterStyle>
  );
};

const FilterStyle = styled.div<{ $toggleFilter: boolean }>`
  z-index: 1;
  position: relative;

  .filter {
    display: flex;
    gap: 2px;
    align-items: center;
    background-color: ${colors.white};
    padding: 6px 16px;
    border-radius: 6px;
  }
  .filter:hover {
    background-color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    margin-top: ${({ $toggleFilter }) => ($toggleFilter ? '0' : '2px')};
    transition: background-color 0.4s, margin-top 0.25s;
  }

  .filter_text {
    font-size: calc(13.6 / 1.6 * 0.1rem);
    user-select: none;
    font-weight: 500;
    color: ${colors.black};
  }

  .toggle_active {
    color: ${colors.black};
    transform: rotate(-180deg);
    transition: all 0.6s;
  }
  .toggle_inactive {
    color: ${colors.black};
    transition: all 0.6s;
  }
`;

export default Filter;
