import styled from 'styled-components';
import colors from '../../../assets/colors/project_colors';
import map from '../../../assets/images/map.png';

//   eslint-disable-next-line @typescript-eslint/no-explicit-any
type onChangeType = { target: { value: any } };

type InputType = {
  title: string;
  placeholder: string;
  handleOnChange: ({ target: { value } }: onChangeType) => void;
  inputValue: string | number;
  isHalf: boolean;
  isTextArea: boolean;
  isLatOrLong: boolean;
};

const Input = ({
  title,
  placeholder,
  handleOnChange,
  inputValue,
  isHalf,
  isTextArea,
  isLatOrLong,
}: InputType) => {

  return (
    <InputStyle
      className={`${isHalf ? 'half_input_search' : ''} ${
        isTextArea ? 'text_area_container' : ''
      }`}
    >
      <div className="input_title">{title}</div>
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          maxLength={1000}
          onChange={handleOnChange}
          value={inputValue || ''}
          id="input_text"
        />
      ) : (
        <div className={isLatOrLong ? 'latitude_n_longitude' : ''}>
          <input
            placeholder={placeholder}
            onChange={handleOnChange}
            value={inputValue || ''}
            id="input_text"
          />
          {isLatOrLong ? <img src={map} alt="map" /> : <></>}
        </div>
      )}
    </InputStyle>
  );
};

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .input_title {
    text-transform: capitalize;
    color: #b2cac7;
    font-size: calc(12.5 / 1.6 * 0.1rem);
    font-weight: bold;
    padding-left: 2px;
  }
  #input_text {
    // position: absolute;
    display: block;
    // top: 20px;
    background: #0a2c2c;
    color: ${colors.white};
    resize: none;
    line-height: 1.3rem;
    outline: none;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(5, 2, 13, 0.2);
    padding: 0.6rem 1rem;
    border-radius: 12px;
    font-weight: 200;
    font-size: calc(15.5 / 1.6 * 0.1rem);
    box-shadow: inset -0.1rem -0.1rem 0.6rem 0.05rem rgba(255, 255, 255, 0.2);
  }

  #input_text::placeholder {
    color: #355358;
    font-weight: 200;
    font-size: calc(15 / 1.6 * 0.1rem);
    user-select: none;
  }
  /* width */
  #input_text::-webkit-scrollbar {
    width: 5px;
    position: absolute;
  }

  /* Handle */
  #input_text::-webkit-scrollbar-thumb {
    padding: 30px;
    background: #33313183;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
  }

  /* Handle on hover */
  #input_text::-webkit-scrollbar-thumb:hover {
    background: #5b5959;
    cursor: pointer;
  }
  .latitude_n_longitude {
    position: relative;
  }
  .latitude_n_longitude > img {
    top: 50%;
    bottom: 50%;
    transform: translateY(-50%);
    right: 10px;
    position: absolute;
  }
`;

export default Input;
