import styled from 'styled-components';
import colors from '../../../assets/colors/project_colors';

type PageBtnType = {
  goToNextPage: () => void;
  loading: boolean;
  text: string;
  isFullyFilled: boolean;
};

const PageBtn = ({
  goToNextPage,
  loading,
  text,
  isFullyFilled,
}: PageBtnType) => {
  return (
    <BtnStyle onClick={isFullyFilled ? goToNextPage : () => {}}>
      <div
        className={`btn ${
          isFullyFilled ? 'fill_complete' : 'fill_not_complete'
        }`}
      >
        {loading ? <span className="loader"></span> : <span>{text}</span>}
      </div>
    </BtnStyle>
  );
};

const BtnStyle = styled.div`
  cursor: pointer;
  width: 100%;
  //   position: relative;
  margin-top: 10px;

  .fill_complete {
    background-color: ${colors.lightLightGreen};
  }
  .fill_not_complete {
    background-color: #aaaeb8;
  }
  .btn {
    // position: absolute;
    top: 60px;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fcfcfe;
    border-radius: 20px;
    font-size: calc(13.5 / 1.6 * 0.1rem);
    transition: all 0.3s ease-in-out;
    box-shadow: inset -0.2rem -0.2rem 0.8rem 0.2rem rgba(0, 0, 0, 0.7);
  }
  .btn:hover {
    opacity: 0.9;
    margin-top: 2.5px;
    margin-right: 2px;
  }
  .loader {
    width: 17px;
    height: 17px;
    animation: rotate_loader 0.4s forwards ease-out infinite;
    border-right: 2px solid ${colors.ModalBGColor};
    border-radius: 10px;
  }
  @keyframes rotate_loader {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default PageBtn;
