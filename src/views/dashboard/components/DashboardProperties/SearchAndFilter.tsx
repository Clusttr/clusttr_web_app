import styled from 'styled-components';
import FilterAndView from './FilterAndView';
import Search from '../../../reuseable_components/search/Search';
// import colors from '../../../../assets/colors/project_colors';

type SFProp = {
  setIsGrid: React.Dispatch<React.SetStateAction<boolean>>;
};
const SearchAndFilter = ({
  setIsGrid,
}: SFProp) => {
  return (
    <SearchAndFilterStyle>
      <Search
        inputWidth={13}
        inputHeight={0.5}
        iconHeight={0.3}
        iconWidth={0.9}
        // inputWidth={13}
        // inputHeight={0.65}
        // iconHeight={0.6}
        // iconWidth={0.9}
        text={'Search'}
        background={'#0A2C2C'}
      />
      <FilterAndView setIsGrid={setIsGrid} />
    </SearchAndFilterStyle>
  );
};

const SearchAndFilterStyle = styled.div`
  font-weight: 200;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export default SearchAndFilter;
