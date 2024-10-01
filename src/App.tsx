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
            <DashboardStyle>
              <div className="dashboard_container">
                <Dashboard />
              </div>
            </DashboardStyle>
          }
        />
        <Route path="/upload" element={<Upload />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/financials" element={<Financials />} />
      </Routes>
    </Router>
  );
}

const DashboardStyle = styled.div`
  .dashboard_container {
    overflow-y: scroll;
    height: 100vh;
  }

  /* width */
  .dashboard_container::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  /* .dashboard_container::-webkit-scrollbar-track {
  border: 1px solid rgb(217, 217, 217);
} */

  /* Handle */
  .dashboard_container::-webkit-scrollbar-thumb {
    background: #33313183;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
  }

  /* Handle on hover */
  .dashboard_container::-webkit-scrollbar-thumb:hover {
    background: #5b5959;
    cursor: pointer;
  }
`;

export default App;
