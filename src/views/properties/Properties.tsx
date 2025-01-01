import styled from 'styled-components';
import Header from '../reuseable_components/header/Header';
import PropertyContent from './components/PropertyContent';
import colors from '../../assets/colors/project_colors';

const Properties = () => {
  return (
    <PropertiesStyle>
      <div className="container">
        <Header />
        <PropertyContent />
      </div>
    </PropertiesStyle>
  );
};

const PropertiesStyle = styled.div`
  .container {
    background-color: ${colors.backgroundColor};
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  /* width */
  .container::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  /* .container::-webkit-scrollbar-track {
  border: 1px solid rgb(217, 217, 217);
} */

  /* Handle */
  .container::-webkit-scrollbar-thumb {
    background: #33313183;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
  }

  /* Handle on hover */
  .container::-webkit-scrollbar-thumb:hover {
    background: #5b5959;
    cursor: pointer;
  }
`;

export default Properties;
