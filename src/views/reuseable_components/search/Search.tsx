import styled from 'styled-components';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useState } from 'react';

type SearchProp = {
  inputWidth: number;
  inputHeight: number;
  iconHeight: number;
  iconWidth: number;
  text: string;
  background: string;
};

type SearchStyleProp = {
  $bgColor: string;
  $inputWidth: number;
  $inputHeight: number;
  $iconHeight: number;
  $iconWidth: number;
};

const Search = ({
  inputWidth,
  iconHeight,
  iconWidth,
  inputHeight,
  text,
  background,
}: SearchProp) => {
  const [toggleFilter, setToggleFilter] = useState(false);

  const toggleFilterFunc = (option: boolean) => setToggleFilter(option);
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchStyle
      $bgColor={background}
      $inputWidth={inputWidth}
      $inputHeight={inputHeight}
      $iconHeight={iconHeight}
      $iconWidth={iconWidth}
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
          placeholder={text}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) => {
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

const SearchStyle = styled.div<SearchStyleProp>`
  display: flex;

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
    background: ${({ $bgColor }) => $bgColor};
    padding: ${({ $iconHeight }) => $iconHeight}rem;
    padding-left: ${({ $iconWidth }) => $iconWidth}rem;
    padding-right: 0;
    border-radius: 10px 0 0 10px;
    user-select: none;
  }
  #input_search {
    background: ${({ $bgColor }) => $bgColor};
    color: #355358;
    outline: none;
    border: none;
    width: ${({ $inputWidth }) => $inputWidth}rem;
    padding: ${({ $inputHeight }) => $inputHeight}rem;
    border-radius: 0 10px 10px 0;
    font-weight: 200;
    font-size: calc(12.5 / 1.6 * 0.1rem);
  }
  #input_search::placeholder {
    color: #355358;
    font-weight: 200;
    font-size: calc(12.5 / 1.6 * 0.1rem);
    user-select: none;
  }
`;

export default Search;
