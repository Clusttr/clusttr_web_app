// import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './views/dashboard/Dashboard';
import Upload from './views/upload/Upload';
import Properties from './views/properties/Properties';
import Financials from './views/financials/Financials';
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ContainerStyle>
              <div className="container">
                <Dashboard />
              </div>
            </ContainerStyle>
          }
        />
        <Route
          path="/upload"
          element={
            <ContainerStyle>
              <div className="container">
                <Upload />
              </div>
            </ContainerStyle>
          }
        />
        <Route
          path="/properties"
          element={
            <ContainerStyle>
              <div className="container">
                <Properties />
              </div>
            </ContainerStyle>
          }
        />
        <Route
          path="/financials"
          element={
            <ContainerStyle>
              <div className="container">
                <Financials />
              </div>
            </ContainerStyle>
          }
        />
      </Routes>
    </Router>
  );
}

const ContainerStyle = styled.div`
  .container {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
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

export default App;
