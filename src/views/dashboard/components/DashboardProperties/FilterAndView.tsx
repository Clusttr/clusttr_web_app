import styled from 'styled-components';
// import colors from '../../../../assets/colors/project_colors';
import { useContext, useState } from 'react';
import { PropertiesContext } from '../../../../assets/utils/PropertiesContext';
import Filter from './Filter';
import View from './View';
import ClearCheckBoxes from './ClearCheckBoxes';

const FilterAndView = () => {
  // useState and useContext
  const { checkCount } = useContext(PropertiesContext);
  const [toggleFilter, setToggleFilter] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleFilterFunc: any = () => setToggleFilter(!toggleFilter);

  return (
    <FilterAndViewStyle>
      <ClearCheckBoxes
        animate={`clear_checkboxes_animation_${
          checkCount === 0 ? 'end' : 'start'
        }`}
      />
      <Filter
        toggleFilterFunc={toggleFilterFunc}
        toggleFilter={toggleFilter}
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
`;

export default FilterAndView;
