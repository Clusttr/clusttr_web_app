import styled from "styled-components";
import colors from "../../../../assets/colors/project_colors";

type inputValues = {
  [key: string]: { from: string; to: string };
};

type inputProp = {
  inputTitle: string;
  inputPlaceholder: string;
  setInputValues: React.Dispatch<React.SetStateAction<inputValues>>;
  inputValue: string;
  keyName: string;
};

const FilterInput = ({
  inputTitle,
  inputPlaceholder,
  inputValue,
  setInputValues,
  keyName,
}: inputProp) => {
  const range: string = inputTitle.split(':')[0].toLowerCase();

  return (
    <InputStyle>
      <div className="filter_input_header">{inputTitle}</div>
      <div className="">
        <input
          type="text"
          placeholder={inputPlaceholder}
          value={inputValue}
          id="filter_input"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={({ target: { value } }: any) => {
            const regex = /^[0-9\b]+$/;
            if (value === '' || regex.test(value))
              setInputValues(prev => {
                return {
                  ...prev,
                  [keyName]: {
                    ...prev[keyName],
                    [range]: value,
                  },
                };
              });
          }}
        />
      </div>
    </InputStyle>
  );
};

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .filter_input_header {
    font-size: calc(11 / 1.6 * 0.1rem);
    font-weight: 200;
    color: ${colors.lightGrey};
  }
  #filter_input {
    width: 100%;
    outline: none;
    border: none;
    padding: 10px 10px;
    color: ${colors.lightGreenTextColor};
    border-radius: 8px;
    background-color: ${colors.lightGreenBorder};
    font-size: calc(11 / 1.6 * 0.1rem);
    font-weight: 200;
  }
`;

export default FilterInput