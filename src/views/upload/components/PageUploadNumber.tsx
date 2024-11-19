import styled from 'styled-components';
import colors from '../../../assets/colors/project_colors';
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { UploadContext } from '../../../assets/utils/UploadContext';

type PageUploadNumbersType = {
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
};
type PageNumberType = {
  isActive: string;
  goTo: () => void;
  details: string;
  page: string;
  isFullyFilled: boolean;
};

const PageNumber = ({
  isActive,
  goTo,
  details,
  page,
  isFullyFilled,
}: PageNumberType) => {
  return (
    <PageNumberStyle>
      <div
        className={`page_number ${isActive}`}
        onClick={isFullyFilled ? goTo : () => {}}
      >
        {page}
      </div>
      <div className="page_number_text">{details}</div>
    </PageNumberStyle>
  );
};

const PageUploadNumbers = ({
  pageNumber,
  setPageNumber,
}: PageUploadNumbersType) => {
  const page = pageNumber.toString();
  const [secondDelay, setSecondDelay] = useState('0s');
  const [firstDelay, setFirstDelay] = useState('0s');
  const { formData } = useContext(UploadContext);

  const goToPageOne = () => {
    setPageNumber(1);
    setFirstDelay('0.55s');
  };
  const goToPageTwo = () => setPageNumber(2);
  const goToPageThree = () => setPageNumber(3);

  useEffect(() => {
    if (pageNumber === 2 || pageNumber === 3) setSecondDelay('0s');
    else setSecondDelay('0.55s');

    setFirstDelay('0s');
  }, [pageNumber]);

  return (
    <PageUploadNumbersStyle
      $page={page}
      $secondDelay={secondDelay}
      $firstDelay={firstDelay}
    >
      <PageNumber
        isActive={
          page === '1' || page === '2' || page === '3' ? 'active' : 'not_active'
        }
        goTo={goToPageOne}
        details={'House Details'}
        page={'1'}
        isFullyFilled={
          formData.propertyName &&
          formData.description &&
          formData.bedrooms &&
          formData.bathrooms
            ? true
            : false
        }
      />
      <div className="line_container">
        <div className="slide_1"></div>
        <div className="line"></div>
      </div>

      <PageNumber
        isActive={page === '2' || page === '3' ? 'active' : 'not_active'}
        goTo={goToPageTwo}
        details={'Property Details'}
        page={'2'}
        isFullyFilled={
          formData.location &&
          formData.landArea &&
          formData.latitude &&
          formData.longitude
            ? true
            : false
        }
      />
      <div className="line_container">
        <div className="slide_2"></div>
        <div className="line"></div>
      </div>

      <PageNumber
        isActive={page === '3' ? 'active' : 'not_active'}
        goTo={goToPageThree}
        details={'Final Details'}
        page={'3'}
        isFullyFilled={
          formData.propertyType &&
          formData.year &&
          formData.multipleImages.length !== 0 &&
          formData.singleImage !== null
            ? true
            : false
        }
      />
    </PageUploadNumbersStyle>
  );
};

const PageNumberStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .active {
    background-color: ${colors.lightLightGreen};
    color: #fafafa;
    transition: all 0.5s linear;
  }
  .not_active {
    background-color: ${colors.lighterLightGreen};
    color: #0c111d;
    transition: all 0.5s linear;
  }
  .page_number {
    font-size: calc(13 / 1.6 * 0.1rem);
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.5s linear;
  }
  .page_number_text {
    font-size: calc(11 / 1.6 * 0.1rem);
    font-weight: 500;
    color: #788b87;
    text-transform: uppercase;
    position: absolute;
    bottom: -70%;
    text-align: center;
    width: 100px;
    // transition: all 0.6s linear;
  }
`;

const PageUploadNumbersStyle = styled.div<{
  $page: string;
  $secondDelay: string;
  $firstDelay: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  .line_container {
    width: 40%;
    position: relative;
  }
  .slide_1 {
    content: '';
    display: block;
    width: calc(50% * ${({ $page }) => $page});
    height: 3px;
    background-color: ${colors.lightLightGreen};
    position: absolute;
    transition: all 0.5s linear ${({ $firstDelay }) => $firstDelay};
  }
  .slide_2 {
    content: '';
    display: block;
    width: calc(50% * (${({ $page }) => $page} - 1));
    height: 3px;
    background-color: ${colors.lightLightGreen};
    position: absolute;
    transition: all 0.5s linear ${({ $secondDelay }) => $secondDelay};
  }
  .line {
    width: 100%;
    height: 3px;
    background-color: ${colors.propertyTabLineColor};
  }
`;
export default PageUploadNumbers;
