import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import { UploadContext } from '../../../../assets/utils/UploadContext';
import colors from '../../../../assets/colors/project_colors';
import MultipleFileSelect from './MultipleFileSelect';
import SingleFileSelect from './SingleFileSelect';
import Input from '../Input';

//   eslint-disable-next-line @typescript-eslint/no-explicit-any
type onChangeType = { target: { value: any } };

type ThirdFormInputsType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSingleUpload: (files: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleMultipleUploads: (files: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSingleDrop: (e: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleMultipleDrops: (e: any) => void;
};

const ThirdFormInputs = ({
  handleSingleUpload,
  handleMultipleUploads,
  handleSingleDrop,
  handleMultipleDrops,
}: ThirdFormInputsType) => {
  const {
    formData,
    setFormData,
    multipleImagesDescription,
    singleImageDescription,
  } = useContext(UploadContext);
  const regex = /^\d*$/;

  // ? Temporary
  useEffect(() => {
    console.log(formData);
    console.log(multipleImagesDescription, 'gath');
    console.log(singleImageDescription, 'seth');
  }, [formData, multipleImagesDescription, singleImageDescription]);

  const handlePropertyType = ({ target: { value } }: onChangeType) => {
    setFormData(prev => {
      return {
        ...prev,
        propertyType: value,
      };
    });
  };
  const handleYear = ({ target: { value } }: onChangeType) => {
    if (regex.test(`${value}`))
      setFormData(prev => {
        return {
          ...prev,
          year: value,
        };
      });
  };
  return (
    <ThirdFormInputsStyle>
      <Input
        title={'property type'}
        placeholder={'Duplex'}
        handleOnChange={handlePropertyType}
        inputValue={formData.propertyType}
        isHalf={false}
        isTextArea={false}
        isLatOrLong={false}
      />
      <Input
        title={'year'}
        placeholder={'2024'}
        handleOnChange={handleYear}
        inputValue={formData.year}
        isHalf={false}
        isTextArea={false}
        isLatOrLong={false}
      />
      <SingleFileSelect
        handleSingleDrop={handleSingleDrop}
        handleSingleUpload={handleSingleUpload}
      />
      <MultipleFileSelect
        handleMultipleUploads={handleMultipleUploads}
        handleMultipleDrops={handleMultipleDrops}
      />
    </ThirdFormInputsStyle>
  );
};

const ThirdFormInputsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .input_title {
    text-transform: capitalize;
    color: #b2cac7;
    font-size: calc(12.5 / 1.6 * 0.1rem);
    font-weight: bold;
    padding-left: 2px;
  }
  .input_bg {
    background: #0a2c2c;
    color: ${colors.white};
    line-height: 1.3rem;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(5, 2, 13, 0.2);
    padding: 0.6rem 1rem;
    border-radius: 12px;
    font-weight: 200;
    font-size: calc(15.5 / 1.6 * 0.1rem);
    box-shadow: inset -0.1rem -0.1rem 0.6rem 0.05rem rgba(255, 255, 255, 0.2);
  }
  label {
    background-color: ${colors.white};
    font-size: calc(13.7 / 1.6 * 0.1rem);
    padding: 6px 12px;
    border-radius: 8px;
    color: #17231f;
    font-weight: 500;
    cursor: pointer;
  }
  .input_file {
    display: none;
  }
  .drag_n_drop_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  .drag_n_drop_text {
    color: ${colors.darkGrey};
    font-size: calc(13.5 / 1.6 * 0.1rem);
    font-weight: 100;
  }
  .upload_image {
    position: absolute;
    right: 0;
  }
`;

export default ThirdFormInputs;
