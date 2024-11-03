import styled from 'styled-components';
// import colors from '../../assets/colors/project_colors';
import Header from '../reuseable_components/header/Header';
import Content from './components/Content';
import { UploadAPI } from '../../assets/utils/UploadContext';

const Upload = () => {
  return (
    <UploadStyle>
      <Header />
      <UploadAPI>
        <Content />
      </UploadAPI>
    </UploadStyle>
  );
};

const UploadStyle = styled.div``;

export default Upload;
