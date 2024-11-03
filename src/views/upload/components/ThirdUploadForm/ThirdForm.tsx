import styled from 'styled-components';
import FormHeader from '../FormHeader';

// type ThirdFormType = {
//   setPageNumber: Dispatch<SetStateAction<number>>;
// };

const ThirdForm = () => {
  return (
    <ThirdFormStyle>
      <FormHeader
        title={'Final Details'}
        subTitle={'All the needed final details'}
      />
      <div>Final Details</div>
    </ThirdFormStyle>
  );
};

const ThirdFormStyle = styled.div`
  > :last-child {
    margin-top: 50px;
    text-align: center;
    color: green;
  }
`;

export default ThirdForm;
