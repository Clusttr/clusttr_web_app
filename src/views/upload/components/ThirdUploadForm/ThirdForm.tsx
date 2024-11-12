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
    setFormData,
    maxSize,
    maxWidth,
    maxHeight,
    allowedTypes,
    setSingleImageDescription,
    setMultipleImagesDescription,
    setSingleFileIsSelected,
  } = useContext(UploadContext);

  // ? Gets the image dimensions (height and width)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getImageDescription = async (file: any) => {
    const newImg = new Image();
    newImg.src = URL.createObjectURL(file);
    await newImg.decode();
    const imgUrl = URL.createObjectURL(file);
    return {
      name: file.name,
      size: file.size,
      width: newImg.width,
      height: newImg.height,
      type: file.type,
      url: imgUrl,
    };
  };

  // ? Handles the click to upload file
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSingleUpload = async (files: any) => {
    const file = files[0];
    // * prevent error from occurring when the user cancels selecting a file
    if (!file) {
      console.log('okay 1');
      return;
    }
    const imageDescription = await getImageDescription(files[0]);

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
        singleImage: files[0],
      };
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMultipleUploads = async (files: any) => {
    const filesArray = [...files];
    const formDataLength = formData.multipleImages.length;

    // * check the amount of files needed to complete the formData.multipleImages array and deletes the rest
    if (formDataLength !== 5)
      filesArray.splice(
        5 - formDataLength,
        files.length - (5 - formDataLength)
      );
    if (formDataLength >= 5) return;

    // * loop through the filesArray that is needed to complete the formData.multipleImages array
    filesArray.map(async file => {
      const imageDescription = await getImageDescription(file);

      // * check if the file passes these checks else return
      if (
        !allowedTypes.includes(file.type) ||
        (file.size * 0.001) / 1024 > maxSize ||
        imageDescription.width > maxWidth ||
        imageDescription.height > maxHeight
      )
        return;

      // * run this if the file passes the checks
      setMultipleImagesDescription(prev => [...prev, imageDescription]);
      setFormData(prev => {
        return {
          ...prev,
          multipleImages: [...prev.multipleImages, file],
        };
      });
    });
  };

  // ? Handle Drag and Drop
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSingleDrop = (e: any) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) handleSingleUpload(droppedFiles);
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
        //   setFormData({
        //       propertyName: '',
        //       location: '',
        //       description: '',
        //       propertyType: '',
        //       year: '',
        //       propertySize: 0,
        //       bedrooms: 0,
        //       bathrooms: 0,
        //       pricePerFragment: 0,
        //       totalAssetPrice: 0,
        //       totalAssetValue: 0,
        //       landArea: 0,
        //       latitude: 0,
        //       longitude: 0,
        //       singleImage: null,
        //       multipleImages: [],
        //     });
        //     setPageNumber(1);
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
