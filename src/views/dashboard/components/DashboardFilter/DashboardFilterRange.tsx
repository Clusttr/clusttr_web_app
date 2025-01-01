import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import ReactSlider from 'react-slider';
import {
  // ClassAttributes,
  // HTMLAttributes,
  useState,
} from 'react';
// import { JSX } from 'react/jsx-runtime';

type RangePropType = {
  title: string;
  maxValue: number;
  unit: string;
};

const DashboardFilterRange = ({ title, maxValue, unit }: RangePropType) => {
  const defaultRange = [0, maxValue];
  const [currentValue, setCurrentValue] = useState(defaultRange);

  return (
    <RangeStyle>
      <div>
        <div className="title">{title}</div>
        <div className="price_container">
          <div className="price">
            {unit === '$' ? unit : ''}
            {currentValue[0].toLocaleString()}
            {unit === '$' ? '' : unit}
          </div>
          <div className="line"></div>
          <div className="price">
            {unit === '$' ? unit : ''}
            {currentValue[1].toLocaleString()}
            {unit === '$' ? '' : unit}
          </div>
        </div>
      </div>
      <ReactSlider
        className="horizontal_slider"
        thumbClassName="slider_thumb"
        trackClassName="slider_track"
        defaultValue={defaultRange}
        min={0}
        max={maxValue}
        // renderThumb={(
        //   props: JSX.IntrinsicAttributes &
        //     ClassAttributes<HTMLDivElement> &
        //     HTMLAttributes<HTMLDivElement>
        // ) => <div {...props}></div>}
        // pearling
        minDistance={maxValue / 5 / 5}
        onChange={value => setCurrentValue(value)}
      />
    </RangeStyle>
  );
};

const RangeStyle = styled.div`
  padding: 5px 0 5px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  .title {
    font-size: calc(12 / 1.6 * 0.1rem);
    color: ${colors.darkWhite};
  }
  .price_container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 5px;
  }
  .price {
    font-size: calc(11 / 1.6 * 0.1rem);
    background-color: ${colors.darkerLightGreen};
    color: #fcfcfe;
    border: 1px solid #28705a;
    width: 106px;
    padding: 7px 0;
    text-align: center;
    font-weight: 500;
    border-radius: 8px;
  }
  .line {
    width: 16px;
    height: 2px;
    border-radius: 50px;
    background-color: #242830;
  }

  .horizontal_slider {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 256px;
    height: 2px;
  }
  .slider_thumb {
    background-color: ${colors.lightLightGreen};
    padding: 6px;
    outline: none;
    border-radius: 50%;
  }
  .slider_track.slider_track-0,
  .slider_track.slider_track-2 {
    top: 0;
    height: 2px;
    background-color: #353535;
  }
  .slider_track.slider_track-1 {
    top: 0;
    height: 2px;
    background-color: ${colors.lightLightGreen};
  }
`;

export default DashboardFilterRange;
