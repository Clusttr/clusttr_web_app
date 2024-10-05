import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import topGlow from '../../../../assets/images/top_glow.png';
import { useEffect, useState } from 'react';
import FilterDDContent from './FilterDDContent';

const FilterDropDown = ({
  setToggleFilter,
}: {
  setToggleFilter: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const placeholderValues = {
    valueRangePlaceholder: ['$0', '$10,000,000'],
    propertySizePlaceholder: ['10 m²', '10,000 m²'],
  };
  const [isApplied, setIsApplied] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const [inputValues, setInputValues] = useState({
    valueRange: {
      from: '',
      to: '',
    },
    propertySize: {
      from: '',
      to: '',
    },
  });

  useEffect(() => {
    if (
      inputValues.valueRange.from === '' ||
      inputValues.valueRange.to === '' ||
      inputValues.propertySize.from === '' ||
      inputValues.propertySize.to === ''
    ) {
      setIsApplied(false);
    } else setIsApplied(true);
  }, [
    inputValues.propertySize.from,
    inputValues.propertySize.to,
    inputValues.valueRange.from,
    inputValues.valueRange.to,
  ]);

  const filterBtnFunc = async () => {
    if (!isApplied) return;
    setIsLoading(true);
    setTimeout(() => {
      setToggleFilter(false);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <FilterDDStyle>
      <div className="top_glow">
        <img src={topGlow} alt="top_glow" />
      </div>
      <div className="filter_DD_header">
        <div>Filter</div>
        <div>reset all</div>
      </div>
      <div className="filter_DD_content">
        <FilterDDContent
          inputPlaceholder={placeholderValues.valueRangePlaceholder}
          contentTitle="Value range"
          inputValues={inputValues.valueRange}
          setInputValues={setInputValues}
          keyName="valueRange"
        />
        <FilterDDContent
          inputPlaceholder={placeholderValues.propertySizePlaceholder}
          contentTitle="Property size"
          inputValues={inputValues.propertySize}
          setInputValues={setInputValues}
          keyName="propertySize"
        />
      </div>
      <div className="filter_button_container">
        <div
          className="filter_button"
          style={{
            backgroundColor: isApplied ? colors.lightLightGreen : '#aaaeb8',
          }}
          onClick={filterBtnFunc}
        >
          {loading ? <div className="loader"></div> : <span>Apply</span>}
        </div>
      </div>
    </FilterDDStyle>
  );
};

const FilterDDStyle = styled.div`
  position: absolute;
  right: -1px;
  margin-top: 7px;
  background-color: ${colors.filterDropDownBGColor};
  width: 19rem;
  //   height: 18rem;
  border-radius: 16px;
  border: 2px solid #424242;
  overflow: hidden;
  //   transform: scaleX(0) scaleY(0) translateY(-180%);
  animation: show_filter_DD 0.6s forwards;

  @keyframes show_filter_DD {
    0% {
      transform: scaleX(0) scaleY(0) translateY(-180%) rotate(-360deg);
      top: -440%;
      right: -145%;
      z-index: -1;
      opacity: 0;
    }
    25% {
      transform: scaleX(0.25) scaleY(0.25) translateY(-50%);
      top: -200%;
    }
    35% {
      transform: scaleX(0.6) scaleY(0.6) translateY(-7%);
      top: 20%;
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

  .top_glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .top_glow > img {
    width: 100%;
  }
  .filter_DD_header {
    padding: 13px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #1e2120;
    position: relative;
    z-index: 3;
  }
  .filter_DD_header :first-child {
    font-weight: 200;
    font-size: calc(14.3 / 1.6 * 0.1rem);
  }
  .filter_DD_header :last-child {
    font-weight: 200;
    font-size: calc(11.3 / 1.6 * 0.1rem);
    cursor: pointer;
    color: ${colors.lightGrey};
  }
  .filter_DD_header :last-child:hover {
    color: ${colors.lightRed};
    transition: color 0.4s ease-in-out;
  }
  .filter_DD_content {
    position: relative;
    z-index: 3;
    padding: 14px 13px;
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  .filter_button_container {
    padding: 15px 0;
    border-top: 1px solid #1e2120;
    position: relative;
    display:flex;
    justify-content:center;
    align-items: center;
    height:65px;
  }
  .filter_button {
    padding: 7px;
    position:absolute;
    border-radius: 20px;
    width: 92%;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: calc(12 / 1.6 * 0.1rem);
    font-weight: 500;
    transition: background-color 0.4s;
    cursor: pointer;
    box-shadow: inset -0.3rem -0.4rem 0.8rem 0.2rem rgba(0, 0, 0, 0.7);
    transition: all 0.3s ease-in-out;
  }
  .filter_button:hover {
    opacity: 0.85;
    margin-top: 2.5px;
  }
  .filter_button > span {
    display: flex;
    align-items: center;
    height: 20px;
  }
  .loader {
    width: 20px;
    height: 20px;
    border: 1px solid white;
    animation: rotate_loader 0.4s forwards ease-out infinite;
    border-right: 1px solid ${colors.ModalBGColor};
    border-radius: 10px;
  }
  @keyframes rotate_loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default FilterDropDown;
