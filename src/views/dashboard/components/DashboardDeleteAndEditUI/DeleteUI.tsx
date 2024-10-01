import styled from 'styled-components';

type DeleteUIProp = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  closeModal: any;
};

const DeleteUI = ({closeModal}:DeleteUIProp) => {
  return <DeleteStyle onClick={closeModal}>DeleteUI</DeleteStyle>;
};

const DeleteStyle = styled.div`
 
`;


export default DeleteUI;
