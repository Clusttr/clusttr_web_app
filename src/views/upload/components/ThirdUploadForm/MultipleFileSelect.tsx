import { styled } from 'styled-components';
import uploadImage from '../../../../assets/images/upload_image.png';
import Requirements from './Requirements';
import colors from '../../../../assets/colors/project_colors';
import { useContext } from 'react';
import { UploadContext } from '../../../../assets/utils/UploadContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type onAddFileType = { target: { files: any } };

type MultipleFileSelectType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleMultipleUploads: (files: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleMultipleDrops: (e: any) => void;
};

const MultipleFileSelect = ({
  handleMultipleDrops,
  handleMultipleUploads,
}: MultipleFileSelectType) => {
  const { formData, multipleImagesDescription, multipleFilesAreSelected } =
    useContext(UploadContext);

  return (
    <MultipleFileSelectStyle>
      <div className="input_title">extra images</div>
      <div
        className={`input_bg multiple_file_select_container`}
        id={multipleFilesAreSelected ? 'multiple_file_select_active' : ''}
        onDragOver={e => e.preventDefault()}
        onDrop={handleMultipleDrops}
      >
        <div
          className={`file_select ${
            multipleFilesAreSelected ? 'file_is_selected' : ''
          }`}
        >
          <label htmlFor="multiple_images">Select Files</label>
          <input
            type="file"
            name="file"
            onChange={({ target: { files } }: onAddFileType) =>
              handleMultipleUploads(files)
            }
            className="input_file"
            id="multiple_images"
            multiple={true}
            accept="image/jpg, image/png, image/jpeg, image/gif, image/svg"
            style={{ cursor: 'pointer' }}
          />
          <div className="drag_n_drop_container">
            <div className="drag_n_drop_text">drag and drop to upload</div>
            <div className="upload_images">
              <img
                src={uploadImage}
                alt="upload_image"
                className="upload_image"
              />
              <img
                src={uploadImage}
                alt="upload_image"
                className="rotate upload_image"
              />
              <img
                src={uploadImage}
                alt="upload_image"
                className="rotate upload_image"
              />
              <img
                src={uploadImage}
                alt="upload_image"
                className="rotate upload_image"
              />
              <img
                src={uploadImage}
                alt="upload_image"
                className="rotate upload_image"
              />
            </div>
          </div>
        </div>
        {multipleFilesAreSelected ? (
          <div className="multiple_images_list_container">
            {multipleImagesDescription.map((description, i) => (
              <MultipleImageListStyle key={i}>
                <div className="multiple_image_list_left">
                  <div className="multiple_image_list_image_container">
                    <img
                      src={URL.createObjectURL(formData.multipleImages[i])}
                      alt=""
                    />
                  </div>
                  <div>{description.name}</div>
                </div>
                <div className="multiple_image_list_right">right</div>
              </MultipleImageListStyle>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      <Requirements isFileSelected={multipleFilesAreSelected} />
    </MultipleFileSelectStyle>
  );
};

const MultipleImageListStyle = styled.div`
  background-color: #051818;
  padding: 10px 12px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .multiple_image_list_left {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .multiple_image_list_image_container {
    width: 25px;
    height: 25px;
    overflow: hidden;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.backgroundColor};
    cursor: pointer;
  }
  img {
    width: 130%;
  }
  .multiple_image_list_left:hover  img {
  background-color:red;
    width: 140%;
  }
`;

const MultipleFileSelectStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .multiple_file_select_container {
    display: flex;
    flex-direction: column;
    gap: 17px;
    overflow: hidden;
  }
  #multiple_file_select_active {
    padding: 0;
  }
  .file_is_selected {
    padding: 1rem 1rem 0;
  }
  .file_select {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .upload_images {
    position: relative;
    width: 75px;
    height: 20px;
  }
  .upload_images :first-child {
    left: 0;
  }
  .upload_images :nth-child(2) {
    left: 15%;
    rotate: 3deg;
  }
  .upload_images :nth-child(3) {
    left: 33%;
    rotate: 5deg;
  }
  .upload_images :nth-child(4) {
    left: 52%;
    rotate: 7deg;
  }
  .upload_images :last-child {
    rotate: 8deg;
  }
  .multiple_images_list_container {
    background-color: ${colors.ModalBGColor};
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 8px;
  }
`;

export default MultipleFileSelect;
