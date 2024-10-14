import styled from 'styled-components';
// import colors from '../../../../assets/colors/project_colors';
import { useContext } from 'react';
import { PropertiesContext } from '../../../../assets/utils/PropertiesContext';
// import Filter from './Filter';
import View from './View';
import ClearCheckBoxes from './ClearCheckBoxes';

const ClearCheckboxesAndView = () => {
  // useState and useContext
  const { checkCount } = useContext(PropertiesContext);
  // const [toggleFilter, setToggleFilter] = useState(false);

  // const toggleFilterFunc: any = () => setToggleFilter(!toggleFilter);

  return (
    <ClearCheckboxesAndViewStyle>
      <ClearCheckBoxes
        animate={`clear_checkboxes_animation_${
          checkCount === 0 ? 'end' : 'start'
        }`}
      />
      {/* <Filter
        toggleFilterFunc={toggleFilterFunc}
        toggleFilter={toggleFilter}
        setToggleFilter={setToggleFilter}
      /> */}
      <View />
    </ClearCheckboxesAndViewStyle>
  );
};

const ClearCheckboxesAndViewStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
`;

export default ClearCheckboxesAndView;
