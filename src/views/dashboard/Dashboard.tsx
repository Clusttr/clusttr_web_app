import styled from 'styled-components';
// import colors from '../../assets/colors/project_colors';
import Header from '../reuseable_components/header/Header';
import DashboardPropertyTab from './components/DashboardPropertyTabComponent/DashboardPropertyTab';
import RevenueAndTransactions from './components/RevenueAndTransactionComponent/RevenueAndTransactions';
import DashboardProperties from './components/DashboardProperties/DashboardProperties';
import { ContextAPI } from '../../assets/utils/PropertiesContext';
import DashboardDeleteAndEditUI from './components/DashboardDeleteAndEditUI/DashboardDeleteAndEditUI';
import { useState } from 'react';

const Dashboard = () => {
  const [isActive, setIsActive] = useState({
    isEditActive: false,
    isDeleteActive: false,
    isSearchActive: false,
  });

  const closeModal = () => {
    setIsActive({
      isEditActive: false,
      isDeleteActive: false,
      isSearchActive: false,
    });
  };

  if (
    isActive.isDeleteActive ||
    isActive.isEditActive ||
    isActive.isSearchActive
  )
    document.body.classList.add('scroll-lock');
  else document.body.classList.remove('scroll-lock');

  return (
    <DashboardStyle>
      <Header />
      <DashboardPropertyTab />
      <RevenueAndTransactions />
      <ContextAPI>
        <DashboardProperties setIsActive={setIsActive} />
        {isActive.isEditActive ? (
          <div>
            <DashboardDeleteAndEditUI
              closeModal={closeModal}
              title={'Edit Request'}
            />
            <span onClick={closeModal}></span>
          </div>
        ) : (
          <></>
        )}
        {isActive.isDeleteActive ? (
          <div>
            <DashboardDeleteAndEditUI
              closeModal={closeModal}
              title={'Delete Request'}
            />
            <span onClick={closeModal}></span>
          </div>
        ) : (
          <></>
        )}
      </ContextAPI>
    </DashboardStyle>
  );
};

const DashboardStyle = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Dashboard;
