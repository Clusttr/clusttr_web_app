import { styled } from 'styled-components';
import uploadImage from '../../../../assets/images/upload_image.png';
import Requirements from './Requirements';
import colors from '../../../../assets/colors/project_colors';
import { useContext } from 'react';
import { UploadContext } from '../../../../assets/utils/UploadContext';
import { Tooltip } from 'react-tooltip';
import EllipseText from '../../../reuseable_components/ellipsis_text/EllipseText';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type onAddFileType = { target: { files: any } };

type SingleFileSelectType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSingleUpload: (files: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSingleDrop: (e: any) => void;
};

const SingleFileSelect = ({
  handleSingleDrop,
  handleSingleUpload,
}: SingleFileSelectType) => {
  const { singleImageDescription, singleFileIsSelected } =
    useContext(UploadContext);

  const singleType = singleImageDescription?.type?.split('/')[1];
  const singleSize = ((singleImageDescription?.size * 0.001) / 1024).toFixed(1);
  const singleName = singleImageDescription?.name;
  const singleHeight = singleImageDescription?.height;
  const singleWidth = singleImageDescription?.width;

  return (
    <SingleFileSelectStyle $singleFileIsSelected={singleFileIsSelected}>
      <div className="input_title">display image</div>
      <div
        className="input_bg file_select single_file_select"
        onDragOver={e => e.preventDefault()}
        onDrop={handleSingleDrop}
      >
        <label htmlFor="single_image">
          {singleFileIsSelected ? 'Change' : 'Select Files'}
        </label>
        <input
          type="file"
          onChange={({ target: { files } }: onAddFileType) =>
            handleSingleUpload(files[0])
          }
          className="input_file"
          id="single_image"
          accept="image/jpg, image/png, image/jpeg, image/gif, image/svg"
          style={{ cursor: 'pointer' }}
        />
        {singleFileIsSelected ? (
          <div className="single_file_details">
            <div className="single_file_type_bg">
              <div className="single_file_type">{singleType}</div>
            </div>
            <div className="single_file_more_details">
              <div className="single_file_name">
                <EllipseText id="single_file_name" str={singleName} len={21} />

                {singleName.length > 21 ? (
                  <Tooltip
                    id="single_file_name"
                    className="tooltip"
                    classNameArrow="tooltip_arrow"
                    opacity={0.9}
                  />
                ) : (
                  <></>
                )}
              </div>
              <div className="single_file_dimension_n_size">
                {singleWidth}x{singleHeight}px size: {singleSize}MB
              </div>
            </div>
          </div>
        ) : (
          <div className="drag_n_drop_container">
            <div className="drag_n_drop_text">drag and drop to upload</div>
            <img src={uploadImage} alt="upload_image" />
          </div>
        )}
      </div>
      <Requirements isFileSelected={singleFileIsSelected} />
    </SingleFileSelectStyle>
  );
};

const SingleFileSelectStyle = styled.div<{ $singleFileIsSelected: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .single_file_select {
    flex-direction: ${({ $singleFileIsSelected }) =>
      $singleFileIsSelected ? 'row-reverse' : 'row'};
  }
  .file_select {
    padding: 0.7rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .single_file_details {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 0 5px 0;
  }
  .single_file_type_bg {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${colors.lightLightGreen};
    border-radius: 100%;
    width: 40px;
    height: 40px;
  }
  .single_file_type {
    color: ${colors.lightLightGreen};
    font-size: calc(11 / 1.6 * 0.1rem);
    font-weight: 500;
    text-transform: uppercase;
  }
  .single_file_name {
    color: ${colors.lightLightGreen};
    font-size: calc(13.5 / 1.6 * 0.1rem);
    font-weight: 500;
  }
  .tooltip {
    border-radius: 5px;
    border: 1px dashed rgba(255, 255, 255, 0.5);
    min-width: 5%;
    max-width: 20%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.black};
    color: ${colors.darkWhite};
    font-size: calc(11 / 1.6 * 0.1rem);
    z-index: 20;
  }
  .tooltip_arrow {
    border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
    border-right: 1px dashed rgba(255, 255, 255, 0.5);
  }
  .single_file_dimension_n_size {
    color: #2a4446;
    font-size: calc(11.5 / 1.6 * 0.1rem);
    font-weight: 100;
    padding-left: 2px;
  }
`;

export default SingleFileSelect;
