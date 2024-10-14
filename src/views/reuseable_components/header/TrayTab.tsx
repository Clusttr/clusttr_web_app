import styled from 'styled-components';
import { DotsThreeVertical } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import colors from '../../../assets/colors/project_colors';

type trayTabProp = {
  data: {
    title: (
      | string
      | {
          text: string;
          link: string;
        }
    )[];
    date: string;
  };
};

const TrayTab = ({ data }: trayTabProp) => {
  return (
    <TrayTabStyle>
      <div className="top_tab">
        <div className="tray_tab_name">
          {data.title.map((item, index) => {
            if (typeof item === 'string')
              return (
                <span className="tray_tab_text" key={index}>
                  {item}
                </span>
              );
            else if (item.link) {
              return (
                <span key={index}>
                  <Link
                    className="tray_tab_link"
                    to={item.link}
                    target="_blank"
                  >
                    {item.text}
                  </Link>
                </span>
              );
            }
          })}
        </div>

        <div className="tray_tab_ellipsis">
          <DotsThreeVertical size={18} />
        </div>
      </div>
      <div className="tray_tab_date">{data.date}</div>
    </TrayTabStyle>
  );
};

const TrayTabStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid #242830;
  padding-bottom: 20px;

  .top_tab {
    display: flex;
    justify-content: space-between;
  }
  .tray_tab_name {
    font-size: calc(13.5 / 1.6 * 0.1rem);
    display: flex;
    gap: 5px;
  }
  .tray_tab_text {
    // font-weight: 200;
    font-weight: 500;
  }
  .tray_tab_link {
    font-weight: 500;
    color: ${colors.lightLightGreen};
  }
  .tray_tab_date {
    font-size: calc(11.5 / 1.6 * 0.1rem);
    font-weight: 200;
    color: ${colors.darkerGrey};
  }
  .tray_tab_ellipsis {
    cursor: pointer;
  }

`;

export default TrayTab;
