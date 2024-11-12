import styled from 'styled-components';
import FirstForm from './FirstUploadForm/FirstForm';
import colors from '../../../assets/colors/project_colors';
import { useEffect, useState } from 'react';
import ThirdForm from './ThirdUploadForm/ThirdForm';
import SecondForm from './SecondUploadForm/SecondForm';
import PageUploadNumbers from './PageUploadNumber';
import DashboardRequestBox from '../../dashboard/components/DashboardRequest/DashboardRequestBox';

const Content = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [isFormUploaded, setIsFormUploaded] = useState(false);

  useEffect(() => {
    setPageNumber(1);
  }, []);

  return (
    <ContentStyle>
      {isFormUploaded ? (
        <div>
          <DashboardRequestBox
            isModalClosed={isFormUploaded}
            closeUpModal={() => setIsFormUploaded(false)}
            setIsSendBtn={() => {}}
            title={'lorem ipsum dolor sit down, consectetur'}
          />
          <span onClick={() => setIsFormUploaded(false)}></span>
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
          />
          {pageNumber === 1 ? (
            <FirstForm setPageNumber={setPageNumber} />
          ) : pageNumber === 2 ? (
            <SecondForm setPageNumber={setPageNumber} />
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

const ContentStyle = styled.div`
  background-color: ${colors.backgroundColor};
  margin: 15px 0 0;
  padding-bottom: 100px;
  // height: 200vh;
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
  }
`;

export default Content;
