import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import messageIcon from '../../../../assets/images/messages.png';
import supportIcon from '../../../../assets/images/support.png';
import settingIcon from '../../../../assets/images/setting.png';
import logoutIcon from '../../../../assets/images/logout.png';

const ProfileDropDown = () => {
  return (
    <ProfileDropDownStyle>
      <div className="dropdown_list">
        <div onClick={() => console.log('Message Opened')}>
          <img src={messageIcon} alt="message_icon" />
          <div>Message</div>
        </div>
      </div>
      <div className="dropdown_list">
        <div onClick={() => console.log('Support Opened')}>
          <img src={supportIcon} alt="support_icon" />
          <div>Support</div>
        </div>
      </div>
      <div className="dropdown_list">
        <div onClick={() => console.log('Settings Opened')}>
          <img src={settingIcon} alt="setting_icon" />
          <div>Settings</div>
        </div>
      </div>
      <div className="dropdown_list logout">
        <div onClick={() => console.log('Logged out!')}>
          <img src={logoutIcon} alt="logout_icon" />
          <div>Logout</div>
        </div>
      </div>
    </ProfileDropDownStyle>
  );
};

const ProfileDropDownStyle = styled.div`
  position: absolute;
  right: 0;
  top: 120%;
  background-color: ${colors.white};
  width: 90%;
  border-radius: 16px;
  display: flex;
  padding: 25px 0 0;
  flex-direction: column;
  gap: 15px;
  animation: show_dropdown .6s forwards;
  z-index: 3;

  @keyframes show_dropdown {
    0% {
      transform: scaleX(0) scaleY(0) translateY(-180%) rotate(-360deg);
      top: -230%;
      right: -25%;
      opacity: 0.3;
    }
    25% {
      transform: scaleX(0.25) scaleY(0.25) translateY(-50%);
      top: 0%;
    }
    35% {
      transform: scaleX(0.6) scaleY(0.6) translateY(-7%);
      top: 80%;
    }
    60% {
      transform: scaleX(0.8) scaleY(0.1) translateY(-5%);
      top: 50%;
      opacity: 0.6;
    }
    100% {
      transform: scaleX(1) scaleY(1) translateY(0) translateX(0);
      opacity: 1;
    }
  }

  .dropdown_list {
    padding: 0 10px;
    font-size: calc(13 / 1.6 * 0.1rem);
    color: #060809;
    font-weight: 200;
  }
  .dropdown_list > div {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px;
    width: min-content;
  }
  .logout {
    padding: 15px 10px 25px;
    border-top: 1px solid #e2e7f0;
  }
`;

export default ProfileDropDown;
