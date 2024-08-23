import styled from 'styled-components';
import colors from '../../assets/colors/project_colors';
import Header from '../reuseable_components/header/Header';

const Upload = () => {
  return (
    <UploadStyle>
      <Header/>
      <div>Hello,</div>
      <div>Upload</div>
      <div>Here</div>
    </UploadStyle>
  );
};

const UploadStyle = styled.div`
  background-color: ${colors.backgroundColor};
  padding: 20px;
  color: ${colors.white};

  > :nth-child(2) {
    color: ${colors.black};
  }
  > :nth-child(3) {
    color: ${colors.orange};
  }
`;

export default Upload;
