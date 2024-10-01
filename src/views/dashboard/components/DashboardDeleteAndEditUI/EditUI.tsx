import styled from "styled-components"

type EditUIProp = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  closeModal: any;
};


const EditUI = ({closeModal}:EditUIProp) => {
  console.log('ran')
  return (
    <EditStyle onClick={closeModal}>EditUI</EditStyle>
  )
}

const EditStyle = styled.div`
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
`;

export default EditUI