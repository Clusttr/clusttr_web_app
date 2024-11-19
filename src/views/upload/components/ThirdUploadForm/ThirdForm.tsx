import styled from 'styled-components';
import FormHeader from '../FormHeader';
import { UploadContext } from '../../../../assets/utils/UploadContext';
import { useContext, useState, SetStateAction, Dispatch } from 'react';
import PageBtn from '../PageBtn';
import ThirdFormInputs from './ThirdFormInputs';

type ThirdFormType = {
  //   setPageNumber: Dispatch<SetStateAction<number>>;
  setIsFormUploaded: Dispatch<SetStateAction<boolean>>;
};

const ThirdForm = ({ setIsFormUploaded }: ThirdFormType) => {
  const [loading, setIsLoading] = useState(false);
  const {
    formData,
    maxSize,
    maxWidth,
    maxHeight,
    allowedTypes,
    setFormData,
    setSingleImageDescription,
    setMultipleImagesDescription,
    setSingleFileIsSelected,
  } = useContext(UploadContext);

  // ? Gets the image dimensions (height and width)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getImageDescription = async (file: any) => {
    const url = URL.createObjectURL(file);
    const newImg = new Image();
    newImg.src = url;
    await newImg.decode();
    return {
      name: file.name,
      size: file.size,
      width: newImg.width,
      height: newImg.height,
      type: file.type,
      url: url,
    };
  };

  // ? Handles the click to upload file
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSingleUpload = async (file: any) => {
    // const file = files[0];
    // * prevent error from occurring when the user cancels selecting a file
    if (!file) return;

    const imageDescription = await getImageDescription(file);

    // * check if the file passes these checks else return
    if (
      !allowedTypes.includes(file?.type) ||
      (file.size * 0.001) / 1024 > maxSize ||
      imageDescription.width > maxWidth ||
      imageDescription.height > maxHeight
    )
      return;

    //  * run this if the file passes the checks
    setSingleImageDescription(imageDescription);
    setSingleFileIsSelected(true);
    setFormData(prev => {
      return {
        ...prev,
        singleImage: file,
      };
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMultipleUploads = async (files: any) => {
    const filesArray = [...files];
    const formDataLength = formData.multipleImages.length;
    const amountOfFilesLimit = 5;
    // * counts the files that passed the checks which it's limit is 5 by starting from the amount already in the array, eg. If there are 4 files only 1 file will be sent and if there are no files then the count starts from 0 hence 5 files will be added.
    let passedFileCount = formDataLength;

    if (formDataLength >= amountOfFilesLimit) return;

    filesArray.map(async file => {
      const imageDescription = await getImageDescription(file);

      // * check if the file passes these checks else return
      if (
        !allowedTypes.includes(file.type) ||
        (file.size * 0.001) / 1024 > maxSize ||
        imageDescription.width > maxWidth ||
        imageDescription.height > maxHeight ||
        passedFileCount >= amountOfFilesLimit
      )
        return;

      // * count the files that passed the test/checks
      passedFileCount++;

      // * run this if the file passes the checks
      setMultipleImagesDescription(prev => [imageDescription, ...prev]);
      setFormData(prev => {
        return {
          ...prev,
          multipleImages: [file, ...prev.multipleImages],
        };
      });
    });
  };

  // ? Handle Drag and Drop
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSingleDrop = (e: any) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) handleSingleUpload(droppedFiles[0]);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMultipleDrops = (e: any) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) handleMultipleUploads(droppedFiles);
  };

  const uploadForm = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {

        setIsFormUploaded(true);
      }, 500);
    }, 2000);
  };

  return (
    <ThirdFormStyle>
      <FormHeader
        title={'Final Details'}
        subTitle={'All the needed final details'}
      />
      <ThirdFormInputs
        handleSingleUpload={handleSingleUpload}
        handleMultipleUploads={handleMultipleUploads}
        handleSingleDrop={handleSingleDrop}
        handleMultipleDrops={handleMultipleDrops}
      />
      <PageBtn
        goToNextPage={uploadForm}
        loading={loading}
        text={'Submit'}
        isFullyFilled={
          formData.propertyType &&
          formData.year &&
          formData.multipleImages.length !== 0 &&
          formData.singleImage !== null
            ? true
            : false
        }
      />
    </ThirdFormStyle>
  );
};

const ThirdFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default ThirdForm;
