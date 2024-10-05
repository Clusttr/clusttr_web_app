import styled from 'styled-components';
// import colors from '../../assets/colors/project_colors';
import Header from '../reuseable_components/header/Header';
import DashboardPropertyTab from './components/DashboardPropertyTabComponent/DashboardPropertyTab';
import RevenueAndTransactions from './components/RevenueAndTransactionComponent/RevenueAndTransactions';
import DashboardProperties from './components/DashboardProperties/DashboardProperties';
import { ContextAPI } from '../../assets/utils/PropertiesContext';

import { useState } from 'react';
import DashboardRequest from './components/DashboardRequest/DashboardRequest';

const Dashboard = () => {
  const [isActive, setIsActive] = useState({
    isEditActive: false,
    isDeleteActive: false,
    isSearchActive: false,
  });
  const [isModalClosed, setIsModalClosed] = useState(false);

  const closeModal = () => {
    setIsActive({
      isEditActive: false,
      isDeleteActive: false,
      isSearchActive: false,
    });
    setIsModalClosed(false);
  };

  // if (
  //   isActive.isDeleteActive ||
  //   isActive.isEditActive ||
  //   isActive.isSearchActive
  // )
  //   document.body.classList.add('scroll-lock');
  // else document.body.classList.remove('scroll-lock');

  return (
    <DashboardStyle>
      <Header />
      <DashboardPropertyTab />
      <RevenueAndTransactions />
      <ContextAPI>
        <DashboardProperties setIsActive={setIsActive} />
        {isActive.isEditActive ? (
          <div>
            <DashboardRequest
              isModalClosed={isModalClosed}
              setIsModalClosed={setIsModalClosed}
              closeModal={closeModal}
              title={'You are requesting an edit'}
              request={'Edit'}
            />
            <span
              onClick={() => {
                if (!isActive.isDeleteActive || !isActive.isEditActive)
                  setIsModalClosed(true);
                setTimeout(() => closeModal(), 500);
              }}
            ></span>
          </div>
        ) : (
          <></>
        )}
        {isActive.isDeleteActive ? (
          <div>
            <DashboardRequest
              isModalClosed={isModalClosed}
              setIsModalClosed={setIsModalClosed}
              closeModal={closeModal}
              title={'You are seeking to delete some files'}
              request={'Delete'}
            />
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
  display: flex;
  flex-direction: column;
`;

export default Dashboard;
