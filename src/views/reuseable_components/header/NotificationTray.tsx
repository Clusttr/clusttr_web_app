import styled from 'styled-components';
import notificationBell from '../../../assets/images/notification.png';
import colors from '../../../assets/colors/project_colors';
import TrayTab from './TrayTab';

type trayType = {
  closeTray: boolean;
};

const notificationInfo = [
  {
    title: [
      'Property',
      { text: 'CLU-04-01', link: 'https://www.facebook.com' },
      'has been minted.',
    ],
    date: '1 Jan, 2024',
  },
  {
    title: ['Goal met - ₦1,000,000,000 sales passed.'],
    date: '15th Oct, 2023',
  },
  {
    title: ['Your delete request has been processed.'],
    date: '3rd Aug, 2023',
  },
  {
    title: [
      {
        text: 'July report, click here to read',
        link: 'https://www.amazon.com',
      },
    ],
    date: '2nd Jun, 2023',
  },
];

const NotificationTray = ({ closeTray }: trayType) => {
  return (
    <NotificationTrayStyle
      style={{
        animation: `${
          closeTray ? 'slide_out_tray' : 'slide_in_tray'
        } 0.4s ease-out forwards`,
      }}
    >
      <div className="tray_header">
        <div className="tray_header_left">
          <div className="tray_header_left_text">Notification</div>
          <div>
            <img className="tray_header_icon" src={notificationBell} alt="" />
          </div>
        </div>
        <div className="tray_header_right">
          <div className="tray_header_right_text">Mark all read</div>
          <div className="tray_header_right_text">Clear all</div>
        </div>
      </div>
      <div className="tray_tabs_container">
        {notificationInfo.map((data, index) => (
          <TrayTab data={data} key={index} />
        ))}
        <div className="end_of_list">End of List</div>
      </div>
    </NotificationTrayStyle>
  );
};

const NotificationTrayStyle = styled.div`
  position: absolute;
  background-color: ${colors.backgroundColor};
  top: 63%;
  height: 90vh;
  width: 30%;
  //   z-index: 30;
  border-radius: 10px 0 0 10px;
  border: 2px solid rgba(1, 227, 212, 0.2);
  box-shadow: 1rem 3rem 1.7rem 0.6rem rgba(0, 207, 212, 0.2);
  right: -0.1%;

  @keyframes slide_in_tray {
    0% {
      right: -30%;
    }
    100% {
      right: -0.1%;
    }
  }
  @keyframes slide_out_tray {
    0% {
      right: -0.1%;
    }
    100% {
      right: -30%;
    }
  }

  .tray_header {
    margin: 10px 15px;
    display: flex;
    justify-content: space-between;
    padding: 10px 0 3px;
    border-bottom: 2px solid #242830;
    color: ${colors.darkWhite};
  }
  .tray_header_left {
    display: flex;
    gap: 7px;
  }
  .tray_header_left_text {
    font-size: calc(15 / 1.6 * 0.1rem);
    font-weight: bolder;
  }
  .tray_header_icon {
    width: 100%;
  }
  .tray_header_right {
    display: flex;
    gap: 10px;
  }
  .tray_header_right_text {
    font-size: calc(13.5 / 1.6 * 0.1rem);
    font-weight: 500;
    cursor: pointer;
  }

  .tray_tabs_container {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 15px 5px 30px 17px;
    color: ${colors.darkWhite};
    height: 90%;
    overflow-y: scroll;
  }
  /* width */
  .tray_tabs_container::-webkit-scrollbar {
    width: 4px;
  }

  /* Handle */
  .tray_tabs_container::-webkit-scrollbar-thumb {
    background: #33313183;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
  }

  /* Handle on hover */
  .tray_tabs_container::-webkit-scrollbar-thumb:hover {
    background: #5b5959;
    cursor: pointer;
  }
  .end_of_list {
    margin-top: 40px;
    font-size: calc(13 / 1.6 * 0.1rem);
    text-align: center;
    color: ${colors.darkerGrey};
  }
`;

export default NotificationTray;
