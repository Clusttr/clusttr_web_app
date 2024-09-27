import styled from "styled-components";
import FilterInput from './FilterInput';
import colors from "../../../../assets/colors/project_colors";

type inputValues = {
  valueRange: { from: string; to: string };
  propertySize: { from: string; to: string };
};
type contentProp = {
  inputPlaceholder: string[];
  contentTitle: string;
  setInputValues: React.Dispatch<React.SetStateAction<inputValues>>;
  inputValues: { from: string; to: string };
  keyName: string;
};

const FilterDDContent = ({
  inputPlaceholder,
  contentTitle,
  inputValues,
  setInputValues,
  keyName,
}: contentProp) => {
  return (
    <DDContentStyle>
      <div className="content_header">
        <div>{contentTitle}</div>
        <div>reset</div>
      </div>
      <div className="content_inputs">
        <FilterInput
          inputPlaceholder={inputPlaceholder[0]}
          inputTitle="From:"
          inputValue={inputValues.from}
          setInputValues={setInputValues}
          keyName={keyName}
        />
        <FilterInput
          inputPlaceholder={inputPlaceholder[1]}
          inputTitle="To:"
          inputValue={inputValues.to}
          setInputValues={setInputValues}
          keyName={keyName}
        />
      </div>
    </DDContentStyle>
  );
};


const DDContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .content_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content_header :first-child {
    font-weight: 200;
    font-size: calc(14.3 / 1.6 * 0.1rem);
  }
  .content_header :last-child {
    font-weight: 200;
    font-size: calc(11.3 / 1.6 * 0.1rem);
    cursor: pointer;
    color: ${colors.lightGrey};
  }
  .content_header :last-child:hover {
    color: ${colors.lightRed};
    transition: color 0.4s ease-in-out;
  }
  .content_inputs {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
`;

export default FilterDDContent