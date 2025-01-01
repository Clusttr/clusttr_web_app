import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import searchIcon from '../../../../assets/images/search_icon.png';

const NoContent = ({ inputText }: { inputText: string }) => {
  return (
    <NoContentStyle
      className={`${
        inputText.toLowerCase().includes('bedroom')
          ? ''
          : 'box_content_container_no_content'
      }`}
    >
      <div className="box_content_icon_container_three">
        <div className="box_content_icon_container_two">
          <div className="box_content_icon_container_one">
            <img
              src={searchIcon}
              alt="search_icon"
              className="box_content_search"
            />
          </div>
        </div>
      </div>
      <div className="box_content_text">Nothing available to display</div>
    </NoContentStyle>
  );
};

const NoContentStyle = styled.div`
  border: 1px solid rgba(1, 227, 212, 0.2);
  border-radius: 12px;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-out;

  .box_content_icon_container_three {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25%;
  }
  .box_content_icon_container_two {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(194, 230, 235, 0.11);
    width: 80px;
    height: 80px;
    border-radius: 100%;
    animation: radar_blink_slowly_two 0.8s forwards alternate infinite;
  }
  @keyframes radar_blink_slowly_two {
    0% {
      width: 65px;
      height: 65px;
    }
    100% {
      width: 80px;
      height: 80px;
    }
  }
  .box_content_icon_container_one {
    background-color: rgba(194, 230, 235, 0.19);
    border-radius: 100%;
    width: 65px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box_content_search {
    width: 50%;
  }
  .box_content_text {
    font-size: calc(12 / 1.6 * 0.1rem);
    font-weight: 500;
    color: ${colors.lightGrey};
  }
`;

export default NoContent;
