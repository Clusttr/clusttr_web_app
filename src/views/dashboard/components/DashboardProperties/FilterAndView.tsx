import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import { useContext, useState } from 'react';
import { PropertiesContext } from '../../../../assets/utils/PropertiesContext';
import Filter from './Filter';
import View from './View';
import ClearCheckBoxes from './ClearCheckBoxes';

const FilterAndView = () => {
  // useState and useContext
  const { checkCount } = useContext(PropertiesContext);
  const [toggleFilter, setToggleFilter] = useState(false);

  // functions
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleFilterFunc: any = () => setToggleFilter(!toggleFilter);
  // style
  const toggleActiveStyle = {
    color: colors.black,
    transform: 'rotate(-180deg)',
    transition: 'all 0.6s',
  };
  const toggleInActiveStyle = {
    color: colors.black,
    transition: 'all 0.6s',
  };

  return (
    <FilterAndViewStyle>
      {/* {isGrid || checkCount === 0 ? (
        ''
      ) : ( */}
      <ClearCheckBoxes
        animate={`clear_checkboxes_animation_${
          checkCount === 0 ? 'end' : 'start'
        }`}
      />
      {/* )} */}

      <Filter
        toggleFilterFunc={toggleFilterFunc}
        toggleFilter={toggleFilter}
        toggleActiveStyle={toggleActiveStyle}
        toggleInActiveStyle={toggleInActiveStyle}
        setToggleFilter={setToggleFilter}
      />
      <View />
    </FilterAndViewStyle>
  );
};

const FilterAndViewStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;

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
`;

export default FilterAndView;
