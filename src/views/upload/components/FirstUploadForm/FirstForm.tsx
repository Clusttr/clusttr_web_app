import { Dispatch, SetStateAction, useContext } from 'react';
import styled from 'styled-components';
import FormHeader from '../FormHeader';
import PageBtn from '../PageBtn';
import FirstFormInputs from './FirstFormInputs';
import { UploadContext } from '../../../../assets/utils/UploadContext';

type FirstFormType = {
  setPageNumber: Dispatch<SetStateAction<number>>;
  setIsPageTwoLoading: Dispatch<SetStateAction<boolean>>;
};

const FirstForm = ({ setPageNumber, setIsPageTwoLoading }: FirstFormType) => {
  // const [loading, setIsLoading] = useState(false);
  const { formData } = useContext(UploadContext);

  const goToNextPage = () => {
    // setIsLoading(true);
    // setTimeout(() => {
    // setIsLoading(false);
    setIsPageTwoLoading(true);
    setTimeout(() => {
      setPageNumber(2);
      setIsPageTwoLoading(false);
    }, 1000);
    // }, 500);
  };

  return (
    <FirstFormStyle>
      <FormHeader
        title={'House Details'}
        subTitle={'Details regarding the house itself'}
      />
      <FirstFormInputs />
      <PageBtn
        goToNextPage={goToNextPage}
        loading={false}
        text={'Next'}
        isFullyFilled={
          formData.propertyName &&
          formData.description &&
          formData.bedrooms &&
          formData.bathrooms
            ? true
            : false
        }
      />
    </FirstFormStyle>
  );
};

const FirstFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default FirstForm;
