import styled from 'styled-components';
import colors from '../../../assets/colors/project_colors';

type FormHeaderType = {
  title: string;
  subTitle: string;
};

const FormHeader = ({ title, subTitle }: FormHeaderType) => {
  return (
    <FormHeaderStyle>
      <div className="title">{title}</div>
      <div className="sub_title">{subTitle}</div>
    </FormHeaderStyle>
  );
};

const FormHeaderStyle = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title {
    font-size: calc(23 / 1.6 * 0.1rem);
    font-weight: bold;
    color: ${colors.lightGreenTextColor};
  }
  .sub_title {
    font-size: calc(14 / 1.6 * 0.1rem);
    font-weight: 500;
    color: #788b87;
  }
`;

export default FormHeader;
