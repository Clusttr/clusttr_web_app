import { Dispatch, SetStateAction, useContext, useState } from 'react';
import styled from 'styled-components';
import FormHeader from '../FormHeader';
import PageBtn from '../PageBtn';
import { UploadContext } from '../../../../assets/utils/UploadContext';
import SecondFormInputs from './SecondFormInputs';

type SecondFormType = {
  setPageNumber: Dispatch<SetStateAction<number>>;
};

const SecondForm = ({ setPageNumber }: SecondFormType) => {
  const [loading, setIsLoading] = useState(false);
  const { formData } = useContext(UploadContext);

  const goToNextPage = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setTimeout(() => {
      setPageNumber(3);
    }, 2500);
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
        loading={loading}
        text={'Almost Done...'}
        isFullyFilled={
          formData.address &&
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
