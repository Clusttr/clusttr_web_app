import styled from 'styled-components';
import { useContext } from 'react';
import { UploadContext } from '../../../../assets/utils/UploadContext';
import colors from '../../../../assets/colors/project_colors';

//   eslint-disable-next-line @typescript-eslint/no-explicit-any
type onChangeType = { target: { value: any } };

const SecondFormInputs = () => {
  const { formData, setFormData } = useContext(UploadContext);
  const regex = /^\d*$/;
  console.log(formData);

  return (
    <SecondFormInputsStyle>
      <div className="input_container">
        <div className="input_title">address</div>
        <input
          placeholder={'1700 Broadway, Suite 550, Denver CO 80290'}
          onChange={({ target: { value } }: onChangeType) => {
            setFormData(prev => {
              return {
                ...prev,
                address: value,
              };
            });
          }}
          value={formData.address}
          id="input_search"
        />
      </div>
      <div className="input_container">
        <div className="input_title">Land Area (sqm) *</div>
        <input
          placeholder={'35000 m²'}
          onChange={({ target: { value } }: onChangeType) => {
            if (regex.test(`${value}`))
              setFormData(prev => {
                return {
                  ...prev,
                  landArea: value,
                };
              });
          }}
          value={formData.landArea || ''}
          id="input_search"
        />
      </div>
      <div className="input_container">
        <div className="input_title">Location (latitude) </div>
        <input
          placeholder={'48.252156'}
          onChange={({ target: { value } }: onChangeType) => {
            if (regex.test(`${value}`))
              setFormData(prev => {
                return {
                  ...prev,
                  latitude: value,
                };
              });
          }}
          value={
            regex.test(`${formData.latitude}`) && formData.latitude > 0
              ? `${formData.latitude || ''}`
              : ''
          }
          id="input_search"
        />
      </div>
      <div className="input_container">
        <div className="input_title">Location (longitude)</div>
        <input
          placeholder={'2.33387'}
          onChange={({ target: { value } }: onChangeType) => {
            if (regex.test(`${value}`))
              setFormData(prev => {
                return {
                  ...prev,
                  longitude: value,
                };
              });
          }}
          value={formData.longitude || ''}
          id="input_search"
        />
      </div>
    </SecondFormInputsStyle>
  );
};

const SecondFormInputsStyle = styled.div`
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
`;

export default SecondFormInputs;
