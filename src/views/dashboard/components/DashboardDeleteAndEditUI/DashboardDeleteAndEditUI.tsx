// import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';


type DeleteAndEditProp = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  closeModal: any;
  title: string;
};

const DashboardDeleteAndEditUI = ({ closeModal, title }: DeleteAndEditProp) => {
  return (
    <DeleteAndEditStyle>
      <div onClick={closeModal}>{title}</div>
    </DeleteAndEditStyle>
  );
};

const DeleteAndEditStyle = styled.div`
  position: fixed;
  z-index: 31;
  color: white;
  background-color: red;
  height: 400px;
  width: 30%;
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);

  ~ span {
    content: '';
    z-index: 30;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

export default DashboardDeleteAndEditUI;
