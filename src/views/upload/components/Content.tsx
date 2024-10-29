import styled from 'styled-components';
import FirstForm from './FirstUploadForm/FirstForm';
import colors from '../../../assets/colors/project_colors';

const Content = () => {
  return (
    <ContentStyle>
      <div className="content_header">Add Property Information</div>
      <FirstForm />
    </ContentStyle>
  );
};

const ContentStyle = styled.div`
  background-color: ${colors.backgroundColor};
  margin: 15px 0 0;
  height: 100vh;
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
`;

export default Content;
