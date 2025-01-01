import styled from 'styled-components';
import { useContext } from 'react';
import { UploadContext } from '../../../../assets/utils/UploadContext';
import Input from '../Input';

//   eslint-disable-next-line @typescript-eslint/no-explicit-any
type onChangeType = { target: { value: any } };

const SecondFormInputs = () => {
  const { formData, setFormData } = useContext(UploadContext);
  const regex = /^\d*$/;
  const decimalRegex = /^\d*\.?\d*$/;
  // to limit amount of digits after the decimal:  const decimalRegex = /^\d*\.?\d{0,2}$/;

  const handleLocation = ({ target: { value } }: onChangeType) => {
    setFormData(prev => {
      return {
        ...prev,
        location: value,
      };
    });
  };

  const handleLandArea = ({ target: { value } }: onChangeType) => {
    if (regex.test(`${value}`))
      setFormData(prev => {
        return {
          ...prev,
          landArea: value,
        };
      });
  };

  const handleLatitude = ({ target: { value } }: onChangeType) => {
    if (decimalRegex.test(`${value}`))
      setFormData(prev => {
        return {
          ...prev,
          latitude: value,
        };
      });
  };

  const handleLongitude = ({ target: { value } }: onChangeType) => {
    if (decimalRegex.test(`${value}`))
      setFormData(prev => {
        return {
          ...prev,
          longitude: value,
        };
      });
  };

  return (
    <SecondFormInputsStyle>
      <Input
        title={'address'}
        placeholder={'1700 Broadway, Suite 550, Denver CO 80290'}
        handleOnChange={handleLocation}
        inputValue={formData.location}
        isHalf={false}
        isTextArea={false}
        isLatOrLong={false}
      />
      <Input
        title={'Land Area (sqm) *'}
        placeholder={'35000 m²'}
        handleOnChange={handleLandArea}
        inputValue={formData.landArea}
        isHalf={false}
        isTextArea={false}
        isLatOrLong={false}
      />
      <Input
        title={'Location (latitude)'}
        placeholder={'48.252156'}
        isHalf={false}
        isTextArea={false}
        handleOnChange={handleLatitude}
        inputValue={formData.latitude}
        isLatOrLong = {true}
      />
      <Input
        title={'Location (longitude)'}
        placeholder={'2.33387'}
        handleOnChange={handleLongitude}
        inputValue={formData.longitude}
        isHalf={false}
        isTextArea={false}
        isLatOrLong = {true}
      />
    </SecondFormInputsStyle>
  );
};

const SecondFormInputsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default SecondFormInputs;
