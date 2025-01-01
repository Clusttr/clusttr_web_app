import { Dispatch, SetStateAction, useContext } from 'react';
import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import { PropertiesContext } from '../../../../assets/utils/PropertiesContext';

type CheckCountType = {
  checkCount: number;
  animate: string;
  setIsActive: Dispatch<
    SetStateAction<{
      isDeleteActive: boolean;
      isEditActive: boolean;
      isSearchActive: boolean;
    }>
  >;
};

const CheckCountComponent = ({
  checkCount,
  animate,
  setIsActive,
}: CheckCountType) => {
  const { isGrid } = useContext(PropertiesContext);

  const editRequest = () => {
    console.log('request edit');
    setIsActive({
        isEditActive: true,
      isDeleteActive: false,
      isSearchActive: false,
    });
  };
  const deleteRequest = () => {
    console.log('request delete');
    setIsActive({
      isEditActive: false,
      isDeleteActive: true,
      isSearchActive: false,
    });
  };

  return (
    <CheckCountComponentStyle $isGrid={isGrid} className={`${animate}`}>
      <div className="count_info">
        {checkCount === 0 ? '1' : checkCount} properties selected, what would
        you like to do?
      </div>
      <div className="request_container">
        <div className="request request_edit" onClick={editRequest}>
          Request Edit
        </div>
        <div className="request request_delete" onClick={deleteRequest}>
          Request Delete
        </div>
      </div>
    </CheckCountComponentStyle>
  );
};

const CheckCountComponentStyle = styled.div<{ $isGrid: boolean }>`
  position: fixed;
  // bottom: -50px;
  left: 0;
  right: 0;
  background-color: ${colors.lightBlack};
  padding: 7px 15px;
  border-radius: 15px;
  margin-inline: auto;
  width: fit-content;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0px 0px 1.7px ${colors.white};
  display: ${({ $isGrid }) => ($isGrid ? 'none' : 'flex')};

  .count_info {
    font-size: calc(13.6 / 1.6 * 0.1rem);
    font-weight: 200;
  }
  .request_container {
    display: flex;
    gap: 10px;
  }
  .request {
    top: 0;
    padding: 8px 16px;
    border-radius: 6px;
    text-wrap: nowrap;
    font-size: calc(13.6 / 1.6 * 0.1rem);
    font-weight: 500;
    box-shadow: inset -0.2rem -0.4rem 0.8rem 0.2rem rgba(0, 0, 0, 0.7);
    transition: all 0.4s linear;
  }
  .request_edit {
    background-color: ${colors.white};
    color: ${colors.black};
  }
  .request_delete {
    left: 110%;
    background-color: ${colors.lightRed};
    color: ${colors.white};
  }
  .request:hover {
    cursor: pointer;
  }
  .request_edit:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  .request_delete:hover {
    background-color: red;
  }
`;

export default CheckCountComponent;
