import styled from 'styled-components';
import EllipseText from '../../../reuseable_components/ellipsis_text/EllipseText';
import { Tooltip } from 'react-tooltip';
import trashIcon from '../../../../assets/images/trash.png';
import rotateIcon from '../../../../assets/images/rotate_left.png';
import { useContext } from 'react';
import { UploadContext } from '../../../../assets/utils/UploadContext';
import colors from '../../../../assets/colors/project_colors';

type TabType = {
  description: {
    name: string;
    size: number;
    width: number;
    height: number;
    type: string;
    url: string;
  };
  index: number;
};

const MultipleFileSelectListTab = ({ description, index }: TabType) => {
  const {
    formData,
    setFormData,
    setMultipleImagesDescription,
    multipleImagesDescription,
  } = useContext(UploadContext);

  const deleteFile = (i: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filterCondition = (_: any, idx: number) => i !== idx;
    const newImageArray = formData.multipleImages.filter(filterCondition);
    const newImageDescription =
      multipleImagesDescription.filter(filterCondition);

    setFormData(prev => {
      return {
        ...prev,
        multipleImages: newImageArray,
      };
    });
    setMultipleImagesDescription(newImageDescription);
  };

  return (
    <MultipleImageListStyle key={index}>
      <div className="multiple_image_list_left">
        <div className="multiple_image_list_image_container">
          <img
            src={description.url}
            alt="selected_image"
            className="selected_image"
          />
        </div>
        <div className="multiple_image_list_name">
          <EllipseText id="description_name" str={description.name} len={21} />
          {description.name.length > 21 ? (
            <Tooltip
              id="description_name"
              className="tooltip"
              classNameArrow="tooltip_arrow"
              opacity={0.9}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="multiple_image_list_right">
        <img src={rotateIcon} alt="rotate_icon" onClick={() => {}} />
        <img
          src={trashIcon}
          alt="trash_icon"
          onClick={() => deleteFile(index)}
        />
      </div>
    </MultipleImageListStyle>
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
    padding-left: 2px;
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
  }
  .selected_image {
    width: 100%;
    aspect-ratio: 16/16;
  }
  .multiple_image_list_name {
    font-size: calc(13.5 / 1.6 * 0.1rem);
    color: #fcfcfe;
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
  .multiple_image_list_right {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-right: 7px;
  }
  .multiple_image_list_right > img {
    width: 70%;
    cursor: pointer;
  }
`;

export default MultipleFileSelectListTab;
