import { Dispatch, SetStateAction, useContext } from 'react';
import styled from 'styled-components';
import FormHeader from '../FormHeader';
import PageBtn from '../PageBtn';
import { UploadContext } from '../../../../assets/utils/UploadContext';
import SecondFormInputs from './SecondFormInputs';

type SecondFormType = {
  setPageNumber: Dispatch<SetStateAction<number>>;
  setIsPageThreeLoading: Dispatch<SetStateAction<boolean>>;
};

const SecondForm = ({
  setPageNumber,
  setIsPageThreeLoading,
}: SecondFormType) => {
  // const [loading, setIsLoading] = useState(false);
  const { formData } = useContext(UploadContext);

  const goToNextPage = () => {
    // setIsLoading(true);
    // setTimeout(() => {
    //   setIsLoading(false);
    setIsPageThreeLoading(true);
    setTimeout(() => {
      setPageNumber(3);
      setIsPageThreeLoading(false);
    }, 1000);
    // }, 1000);
  };

  return (
    <SecondFormStyle>
      <FormHeader
        title={'Property Details'}
        subTitle={'Details regarding the general property'}
      />
      <SecondFormInputs />
      <PageBtn
        goToNextPage={goToNextPage}
        loading={false}
        text={'Almost Done...'}
        isFullyFilled={
          formData.location &&
          formData.landArea &&
          formData.latitude &&
          formData.longitude
            ? true
            : false
        }
      />
    </SecondFormStyle>
  );
};

const SecondFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default SecondForm;
