import styled from 'styled-components';
import colors from '../../assets/colors/project_colors';
import Header from '../reuseable_components/header/Header';

const Upload = () => {
  return (
    <UploadStyle>
      <Header />
      <div>
        <div>Upload</div>
        <div>Here</div>
      </div>
    </UploadStyle>
  );
};

const UploadStyle = styled.div`

 > :nth-child(2){
    background-color: ${colors.backgroundColor};
    margin: 15px 20px;
    padding:20px;
    border-radius:10px;
    color: ${colors.white};
  }

  > :nth-child(2) :last-child {
    color: ${colors.orange};
  }
`;

export default Upload;
