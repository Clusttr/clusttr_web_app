import styled from 'styled-components';
import { WarningOctagon } from '@phosphor-icons/react';

const DashboardRequestCautionIcon = () => {
  return (
    <CautionStyle>
      <div className="caution_icon_background_color_three caution_icon_background">
        <div className="caution_icon_background_color_two caution_icon_background">
          <div className="caution_icon_background_color_one caution_icon_background">
            <WarningOctagon size={20} style={{ opacity: 0.9 }} />
          </div>
        </div>
      </div>
    </CautionStyle>
  );
};

const CautionStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35%;

  .caution_icon_background {
    border-radius: 50px;
    box-shadow: 0rem 0.1rem 0rem 0rem rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .caution_icon_background_color_one {
    width: 50px;
    height: 50px;
    background-color: rgba(255, 91, 91, 0.37);
  }
  .caution_icon_background_color_two {
    width: 50px;
    height: 50px;
    background-color: rgba(255, 91, 91, 0.2);
    animation: radar_blink_slowly_two 0.8s forwards alternate infinite;
  }
  @keyframes radar_blink_slowly_two {
    0% {
      width: 50px;
      height: 50px;
    }
    100% {
      width: 65px;
      height: 65px;
    }
  }
  .caution_icon_background_color_three {
    width: 55px;
    height: 55px;
    overflow: hidden;
    background-color: rgba(255, 91, 91, 0.1);
    animation: radar_blink_slowly_one 0.8s forwards alternate infinite;
  }
  @keyframes radar_blink_slowly_one {
    0% {
      width: 55px;
      height: 55px;
    }
    100% {
      width: 80px;
      height: 80px;
    }
  }
`;

export default DashboardRequestCautionIcon;
