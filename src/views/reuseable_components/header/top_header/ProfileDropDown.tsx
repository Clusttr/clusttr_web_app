import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import messageIcon from '../../../../assets/images/messages.png';
import supportIcon from '../../../../assets/images/support.png';
import settingIcon from '../../../../assets/images/setting.png';
import logoutIcon from '../../../../assets/images/logout.png';
import { Dispatch, SetStateAction } from 'react';

type profileType = {
  isToggled: boolean;
  setIsToggled: Dispatch<SetStateAction<boolean>>;
  setIsSupportOpen: Dispatch<SetStateAction<boolean>>;
};

const ProfileDropDown = ({
  isToggled,
  setIsToggled,
  setIsSupportOpen,
}: profileType) => {
  const openMessage = () => {
    setIsToggled(!isToggled);
  };
  const openSupport = () => {
    setIsSupportOpen(true);
    setIsToggled(!isToggled);
  };
  const openSetting = () => {
    setIsToggled(!isToggled);
  };
  const logOut = () => {
    setIsToggled(!isToggled);
  };

  return (
    <ProfileDropDownStyle>
      <div className="dropdown_list" onClick={openMessage}>
        <div className="dropdown_list_icon_container">
          <img src={messageIcon} alt="message_icon" />
        </div>
        <div className="dropdown_list_text">Message</div>
      </div>

      <div className="dropdown_list" onClick={openSupport}>
        <div className="dropdown_list_icon_container">
          <img src={supportIcon} alt="support_icon" />
        </div>
        <div className="dropdown_list_text">Support</div>
      </div>
      <div className="dropdown_list" onClick={openSetting}>
        <div className="dropdown_list_icon_container">
          <img src={settingIcon} alt="setting_icon" />
        </div>
        <div className="dropdown_list_text">Settings</div>
      </div>
      <div className="dropdown_list logout" onClick={logOut}>
        <div className="dropdown_list_icon_container">
          <img src={logoutIcon} alt="logout_icon" />
        </div>
        <div className="dropdown_list_text">Logout</div>
      </div>
    </ProfileDropDownStyle>
  );
};

const ProfileDropDownStyle = styled.div`
  position: absolute;
  right: 0;
  top: 120%;
  background-color: ${colors.white};
  width: 92%;
  border-radius: 16px;
  display: flex;
  padding: 20px 0 0;
  flex-direction: column;
  gap: 20px;
  animation: show_dropdown 0.6s forwards;
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
    padding: 6px 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    width: min-content;
    gap: 5px;
  }
  .dropdown_list_icon_container {
    display: flex;
  }
  .dropdown_list_text {
    color: #060809;
    font-size: calc(13 / 1.6 * 0.1rem);
    font-weight: 200;
  }
  .logout {
    width: 100%;
    padding: 15px 15px 25px;
    border-top: 1px solid #e2e7f0;
  }
`;

export default ProfileDropDown;
