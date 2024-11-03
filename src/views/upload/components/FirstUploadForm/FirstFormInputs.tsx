import styled from 'styled-components';
import { useContext } from 'react';
import colors from '../../../../assets/colors/project_colors';
import { UploadContext } from '../../../../assets/utils/UploadContext';

//   eslint-disable-next-line @typescript-eslint/no-explicit-any
type onChangeType = { target: { value: any } };

const FirstFormInputs = () => {
  const { formData, setFormData } = useContext(UploadContext);
  const regex = /^\d*$/;

  return (
    <FirstFormInputsStyle>
      <div className="input_container">
        <div className="input_title">name</div>
        <input
          placeholder={'St. Crescent Apartments'}
          onChange={({ target: { value } }: onChangeType) => {
            setFormData(prev => {
              return {
                ...prev,
                propertyName: value,
              };
            });
          }}
          value={formData.propertyName}
          id="input_search"
        />
      </div>
      <div className="text_area_container input_container">
        <div className="input_title">description</div>
        <textarea
          placeholder={
            'Close to the big bull statue on the front of the skyler tower.'
          }
          maxLength={1000}
          onChange={({ target: { value } }: onChangeType) => {
            setFormData(prev => {
              return {
                ...prev,
                description: value,
              };
            });
          }}
          // style={
          //   isTextEmpty
          //     ? {
          //         border: `2px solid ${colors.lightRed}`,
          //         opacity: 0.8,
          //         animation: 'blinkRadar 1s linear',
          //       }
          //     : {}
          // }
          value={formData.description}
          id="input_search"
        />
      </div>
      <div className="double_input_container">
        <div className="input_container half_input_search">
          <div className="input_title">number of bedrooms</div>
          <input
            placeholder={'4'}
            id="input_search"
            value={formData.bedrooms || ''}
            onChange={({ target: { value } }: onChangeType) => {
              if (regex.test(`${value}`))
                setFormData(prev => {
                  return {
                    ...prev,
                    bedrooms: +value,
                  };
                });
            }}
          />
        </div>
        <div className="input_container half_input_search">
          <div className="input_title">number of bathrooms</div>
          <input
            placeholder={'4'}
            id="input_search"
            value={formData.bathrooms || ''}
            onChange={({ target: { value } }: onChangeType) => {
              if (regex.test(`${value}`))
                setFormData(prev => {
                  return {
                    ...prev,
                    bathrooms: +value,
                  };
                });
            }}
          />
        </div>
      </div>
    </FirstFormInputsStyle>
  );
};

const FirstFormInputsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .input_title {
    text-transform: capitalize;
    color: #b2cac7;
    font-size: calc(12.5 / 1.6 * 0.1rem);
    font-weight: bold;
    padding-left: 2px;
  }
  .input_container {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .text_area_container {
    // position: relative;
    height: calc(300 / 1.6 * 0.1rem);
  }
  #input_search {
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
  @keyframes blinkRadar {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(-9deg);
    }
    62.5% {
      transform: rotate(3deg);
    }
    75% {
      transform: rotate(-3deg);
    }
    87.5% {
      transform: rotate(3deg);
    }
    100% {
      transform: rotate(-3deg);
    }
  }
  #input_search::placeholder {
    color: #355358;
    font-weight: 200;
    font-size: calc(15 / 1.6 * 0.1rem);
    user-select: none;
  }
  /* width */
  #input_search::-webkit-scrollbar {
    width: 5px;
    position: absolute;
  }

  /* Handle */
  #input_search::-webkit-scrollbar-thumb {
    padding: 30px;
    background: #33313183;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
  }

  /* Handle on hover */
  #input_search::-webkit-scrollbar-thumb:hover {
    background: #5b5959;
    cursor: pointer;
  }
  .double_input_container {
    display: flex;
    width: 100%;
    gap: 20px;
  }
  .half_input_search {
    width: 50%;
  }
`;

export default FirstFormInputs;
