import styled from 'styled-components';
import FirstForm from './FirstUploadForm/FirstForm';
import colors from '../../../assets/colors/project_colors';
import { useContext, useEffect, useState } from 'react';
import ThirdForm from './ThirdUploadForm/ThirdForm';
import SecondForm from './SecondUploadForm/SecondForm';
import PageUploadNumbers from './PageUploadNumber';
import FinalPopUp from '../../reuseable_components/final_pop_up/FinalPopUp';
import { UploadContext } from '../../../assets/utils/UploadContext';

const PageLoader = () => {
  return (
    <PageLoaderStyle>
      <span className="page_loader"></span>
    </PageLoaderStyle>
  );
};
const Content = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [isFormUploaded, setIsFormUploaded] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [isModalClosed, setIsModalClosed] = useState(false);
  const [isPageOneLoading, setIsPageOneLoading] = useState(false);
  const [isPageTwoLoading, setIsPageTwoLoading] = useState(false);
  const [isPageThreeLoading, setIsPageThreeLoading] = useState(false);
  const [secondDelay, setSecondDelay] = useState('0s');
  const [firstDelay, setFirstDelay] = useState('0s');
  const {
    formDataDefaults,
    singleImageDescriptionDefault,
    setFormData,
    setMultipleImagesDescription,
    setSingleImageDescription,
    setSingleFileIsSelected,
  } = useContext(UploadContext);

  useEffect(() => {
    setIsPageOneLoading(true);
    setTimeout(() => {
      setPageNumber(1);
      setIsPageOneLoading(false);
    }, 500);
  }, []);

  const closeFunc = () => {
    setIsLoading(true);
    setIsPageOneLoading(true);
    setTimeout(() => {
      setPageNumber(1);
      setIsLoading(false);
      setIsModalClosed(true);
      setIsPageOneLoading(false);
      setTimeout(() => {
        // * return everything back to it's default state
        setIsModalClosed(false);
        setIsFormUploaded(false);
        setFormData(formDataDefaults);
        setMultipleImagesDescription([]);
        setSingleImageDescription(singleImageDescriptionDefault);
        setSingleFileIsSelected(false);
      }, 500);
    }, 1000);
  };

  return (
    <ContentStyle
      $isPageTwoLoading={isPageTwoLoading}
      $isPageThreeLoading={isPageThreeLoading}
      $isPageOneLoading={isPageOneLoading}
    >
      {isFormUploaded ? (
        <div>
          <FinalPopUp
            closeFunc={closeFunc}
            isLoading={loading}
            isModalClosed={isModalClosed}
            title={`Property Details Submitted Successfully`}
            subTitle={`Once approved, you will get a notification about a successful mint.`}
            isUploadForm={true}
          />
          <span onClick={closeFunc}></span>
        </div>
      ) : (
        <></>
      )}
      <div className="content_header">Add Property Information</div>
      <div className="content_outer_container">
        <div className="content_inner_container">
          {/* handle updating the variable that will make the line fill here and pass the variable to the line component.*/}
          <PageUploadNumbers
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            setIsPageTwoLoading={setIsPageTwoLoading}
            setIsPageThreeLoading={setIsPageThreeLoading}
            firstDelay={firstDelay}
            secondDelay={secondDelay}
            setFirstDelay={setFirstDelay}
            setSecondDelay={setSecondDelay}
          />
          {isPageOneLoading ? (
            <PageLoader />
          ) : pageNumber === 1 && !isPageTwoLoading ? (
            <FirstForm
              setPageNumber={setPageNumber}
              setIsPageTwoLoading={setIsPageTwoLoading}
            />
          ) : isPageTwoLoading ? (
            <PageLoader />
          ) : pageNumber === 2 && !isPageThreeLoading ? (
            <SecondForm
              setPageNumber={setPageNumber}
              setIsPageThreeLoading={setIsPageThreeLoading}
            />
          ) : isPageThreeLoading ? (
            <PageLoader />
          ) : pageNumber === 3 ? (
            <ThirdForm setIsFormUploaded={setIsFormUploaded} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </ContentStyle>
  );
};

const PageLoaderStyle = styled.div`
  position: absolute;
  margin-top: 30%;
  right: 45%;

  .page_loader {
    display: inline-block;
    width: 50px;
    height: 50px;
    animation: rotate_loader 0.4s forwards ease-out infinite;
    border-right: 2px solid #fcfcfc;
    border-radius: 30px;
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

const ContentStyle = styled.div<{
  $isPageTwoLoading: boolean;
  $isPageThreeLoading: boolean;
  $isPageOneLoading: boolean;
}>`
  margin: 12px 0 0;
  padding-bottom: 100px;
  background-color: ${colors.backgroundColor};
  ${({ $isPageTwoLoading, $isPageThreeLoading, $isPageOneLoading }) =>
    $isPageTwoLoading || $isPageThreeLoading || $isPageOneLoading
      ? 'height: 90vh'
      : ''};
  border-radius: 7px 7px 0 0;

  .content_header {
    padding: 20px 20px 0 18px;
    font-size: calc(17 / 1.6 * 0.1rem);
    font-weight: bolder;
    color: #fcfcfe;
  }
  .content_header:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background-color: #1e2120;
  }
  .content_outer_container {
    display: flex;
    justify-content: center;
  }
  .content_inner_container {
    width: 40%;
    position: relative;
  }
`;

export default Content;
