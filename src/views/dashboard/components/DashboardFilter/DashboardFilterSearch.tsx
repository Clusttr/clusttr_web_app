import styled from 'styled-components';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useState } from 'react';
import colors from '../../../../assets/colors/project_colors';

const DashboardFilterSearch = () => {
  const [toggleFilter, setToggleFilter] = useState(false);

  const toggleFilterFunc = (option: boolean) => setToggleFilter(option);
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchStyle
      onClick={() => toggleFilterFunc(true)}
      onMouseLeave={() => toggleFilterFunc(false)}
    >
      <div className="search_glass">
        <MagnifyingGlass
          className={toggleFilter ? 'toggle_active' : 'toggle_inactive'}
          size={17}
          color="#5D7A76"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search keywords"
          onChange={e => {
            setSearchValue(e.target.value);
          }}
          value={searchValue}
          name="search"
          id="input_search"
        />
      </div>
    </SearchStyle>
  );
};

const SearchStyle = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  .toggle_active {
    transform: rotate(360deg);
    transition: all 0.5s;
  }
  .toggle_inactive {
    transform: rotate(0deg);
    transition: all 0.5s;
  }
  .search_glass {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.darkerLightGreen};
    border-radius: 8px 0 0 8px;
    user-select: none;
    // height: 100%;
    padding: 0.7rem 0 0.7rem 0.7rem;
  }
  #input_search {
    background: ${colors.darkerLightGreen};
    color: ${colors.white};
    outline: none;
    border: none;
    width: 15rem;
    padding: 0.8rem 0.5rem;
    border-radius: 0 8px 8px 0;
    font-weight: 500;
    font-size: calc(12 / 1.6 * 0.1rem);
  }
  #input_search::placeholder {
    color: #355358;
    font-weight: 500;
    font-size: calc(12 / 1.6 * 0.1rem);
  }
`;

export default DashboardFilterSearch;
