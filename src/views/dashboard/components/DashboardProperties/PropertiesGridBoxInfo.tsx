import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import styled from 'styled-components';

type BoxInfoProp = {
  info: JSX.Element | string;
  icon: string;
  angleIcon: string;
  unit: string;
  str: string;
  id: string;
  len: number;
};

const PropertiesGridBoxInfo = ({
  info,
  icon,
  angleIcon,
  unit,
  str,
  id,
  len,
}: BoxInfoProp) => {
  const [rotateAngle, setRotateAngle] = useState(true);

  return (
    <BoxInfoStyle onClick={() => setRotateAngle(!rotateAngle)}>
      <img src={icon} alt="" />
      <div >
        {unit === '$' ? unit : ''}
        {info} {unit === '$' ? '' : unit}
      </div>
      {str.length > len ? (
        <Tooltip
          id={id}
          className="tooltip box_info_tooltip"
          classNameArrow="tooltip_arrow"
          opacity={0.73}
        />
      ) : (
        ''
      )}

      <img
        src={angleIcon}
        alt=""
        className={rotateAngle ? 'rotate_angle' : 'return_to_default'}
      />
    </BoxInfoStyle>
  );
};

const BoxInfoStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;

  .box_info_tooltip {
    width: 12%;
  }

  > div:nth-child(2) {
    font-size: calc(12.5 / 1.6 * 0.1rem);
    font-weight: 200;
  }
  .rotate_angle {
    transform: rotate(180deg);
    transition: all 0.4s;
  }
  .return_to_default {
    transform: rotate(0deg);
    transition: all 0.4s;
  }
`;

export default PropertiesGridBoxInfo;
