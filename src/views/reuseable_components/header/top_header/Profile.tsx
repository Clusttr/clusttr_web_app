import styled from 'styled-components';
import avatar from '../../../../assets/images/avatar.png';
import notificationIcon from '../../../../assets/images/notification_icon.png';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colors from '../../../../assets/colors/project_colors';
import { Dispatch, SetStateAction, useState } from 'react';
import ProfileDropDown from './ProfileDropDown';

type ProfileType = {
  setIsTrayOpen: Dispatch<SetStateAction<boolean>>;
  isTrayOpen: boolean;
  setCloseTray: Dispatch<SetStateAction<boolean>>;
};

const Profile = ({ setIsTrayOpen, isTrayOpen, setCloseTray }: ProfileType) => {
  const [isToggled, setIsToggled] = useState(false);
  const profileFunc = () => {
    setIsToggled(!isToggled);
  };

  const openTray = () => {
    if (isTrayOpen) {
      setCloseTray(true);
      setTimeout(() => {
        setIsTrayOpen(false);
        setCloseTray(false);
      }, 600);
      return;
    }
    setIsTrayOpen(true);
  };

  return (
    <ProfileStyle>
      <div className="notification_container" onClick={openTray}>
        <img
          src={notificationIcon}
          alt="notification_bell"
          className="notification"
        />
        <div className="notification_is__active"></div>
      </div>
      <div className="profile">
        <div>
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
        <div className="profile_name_container" onClick={profileFunc}>
          <div className="profile_name">Sholadapo Olatunde</div>

          <FontAwesomeIcon
            icon={faAngleDown}
            fontSize={12}
            style={
              isToggled
                ? {
                    color: colors.white,
                    transform: 'rotate(-180deg)',
                    transition: 'all 0.5s ease-in-out',
                  }
                : { color: colors.white, transition: 'all 0.5s ease_in_out' }
            }
          />
        </div>
      </div>
      {isToggled ? <ProfileDropDown /> : <></>}
    </ProfileStyle>
  );
};

const ProfileStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;

  .notification_container {
    position: relative;
    background-color: ${colors.white};
    padding: 6.5px 6px;
    border-radius: 35%;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-shadow: inset -0.1rem -0.1rem 0.6rem 0.12rem rgba(0, 0, 0, 0.7);
  }
  .notification_container:hover {
    opacity: 0.85;
  }
  .notification {
    width: 97%;
  }
  .notification_is__active {
    position: absolute;
    top: 21%;
    right: 28%;
    width: 0.35rem;
    height: 0.35rem;
    background-color: ${colors.red};
    border-radius: 100%;
  }
  .profile {
    display: flex;
    align-items: center;
    gap: 9px;
    background-color: ${colors.lightLightGreen};
    padding: 5px 8px;
    border-radius: 10px;
    z-index: 2;
  }
  .avatar {
    width: 100%;
    cursor: pointer;
  }
  .profile_name_container {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 200;
    background-color: ${colors.profileNameBlackBG};
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
  }
  .profile_name {
    font-size: calc(12 / 1.6 * 0.1rem);
    user-select: none;
    color: ${colors.darkWhite};
  }
`;

export default Profile;
