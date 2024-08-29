import styled from 'styled-components';
import avatar from '../../../../assets/images/avatar.png';
import notificationIcon from '../../../../assets/images/notification_icon.png';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colors from '../../../../assets/colors/project_colors';
import { useState } from 'react';

const Profile = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <ProfileStyle>
      <div className="notification_container">
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
        <div
          className="profile_name_container"
          onClick={() => setIsToggled(!isToggled)}
        >
          <div className="profile_name">Sholadapo Olatunde</div>

          <FontAwesomeIcon
            icon={faAngleDown}
            fontSize={12}
            style={
              isToggled
                ? {
                    color: colors.white,
                    transform: 'rotate(-180deg)',
                    transition: 'all 0.4s',
                  }
                : { color: colors.white, transition: 'all 0.4s' }
            }
          />
        </div>
      </div>
    </ProfileStyle>
  );
};

const ProfileStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .notification_container {
    position: relative;
    background-color: ${colors.white};
    padding: 6.5px 6px;
    border-radius: 35%;
    display: flex;
    align-items: center;
    cursor: pointer;
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
    color: ${colors.white};
  }
`;

export default Profile;
