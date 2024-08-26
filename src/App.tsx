// import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './views/dashboard/Dashboard';
import Upload from './views/upload/Upload';
import Properties from './views/properties/Properties';
import Financials from './views/financials/Financials';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/financials" element={<Financials />} />
      </Routes>
    </Router>
  );
}

export default App;
