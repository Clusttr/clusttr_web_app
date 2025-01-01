import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';

const Requirements = ({ isFileSelected }: { isFileSelected: boolean }) => {
  return (
    <>
      {isFileSelected ? (
        <></>
      ) : (
        <RequirementsStyle>
          SVG, PNG, JPG or GIF (max. 800x400px) max size:10MB, max amount: 1
        </RequirementsStyle>
      )}
    </>
  );
};

const RequirementsStyle = styled.div`
  color: ${colors.darkGrey};
  font-size: calc(11.5 / 1.6 * 0.1rem);
  font-weight: 100;
  padding-left: 2px;
`;

export default Requirements;
