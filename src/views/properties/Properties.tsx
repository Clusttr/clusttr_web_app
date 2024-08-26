import styled from 'styled-components';
import colors from '../../assets/colors/project_colors';
import Header from '../reuseable_components/header/Header';

const Properties = () => {
  return (
    <PropertiesStyle>
      <Header />
      <div>
        <div>Properties</div>
        <div>Here, Buy Now.</div>
      </div>
    </PropertiesStyle>
  );
};

const PropertiesStyle = styled.div`

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

export default Properties;
