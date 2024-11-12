import styled from 'styled-components';
import { useContext } from 'react';
import { UploadContext } from '../../../../assets/utils/UploadContext';
import Input from '../Input';

//   eslint-disable-next-line @typescript-eslint/no-explicit-any
type onChangeType = { target: { value: any } };

const FirstFormInputs = () => {
  const { formData, setFormData } = useContext(UploadContext);
  const regex = /^\d*$/;

  const handlePropertyName = ({ target: { value } }: onChangeType) => {
    setFormData(prev => {
      return {
        ...prev,
        propertyName: value,
      };
    });
  };
  const handleDescription = ({ target: { value } }: onChangeType) => {
    setFormData(prev => {
      return {
        ...prev,
        description: value,
      };
    });
  };
  const handleBedrooms = ({ target: { value } }: onChangeType) => {
    if (regex.test(`${value}`))
      setFormData(prev => {
        return {
          ...prev,
          bedrooms: +value,
        };
      });
  };
  const handleBathrooms = ({ target: { value } }: onChangeType) => {
    if (regex.test(`${value}`))
      setFormData(prev => {
        return {
          ...prev,
          bathrooms: +value,
        };
      });
  };

  return (
    <FirstFormInputsStyle>
      <Input
        title={'name'}
        placeholder={'St. Crescent Apartments'}
        handleOnChange={handlePropertyName}
        inputValue={formData.propertyName}
        isHalf={false}
        isTextArea={false}
      />

      <Input
        title={'description'}
        placeholder={
          'Close to the big bull statue on the front of the tyler tower.'
        }
        handleOnChange={handleDescription}
        inputValue={formData.description}
        isHalf={false}
        isTextArea={true}
      />
      <div className="double_input_container">
        <Input
          title={'number of bedrooms'}
          placeholder={'4'}
          handleOnChange={handleBedrooms}
          inputValue={formData.bedrooms}
          isHalf={true}
          isTextArea={false}
        />
        <Input
          title={'number of bathrooms'}
          placeholder={'2'}
          handleOnChange={handleBathrooms}
          inputValue={formData.bathrooms}
          isHalf={true}
          isTextArea={false}
        />
      </div>
    </FirstFormInputsStyle>
  );
};

const FirstFormInputsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .text_area_container {
    height: calc(300 / 1.6 * 0.1rem);
  }
  .double_input_container {
    display: flex;
    width: 100%;
    gap: 20px;
  }
  .half_input_search {
    width: 50%;
  }
`;

export default FirstFormInputs;
