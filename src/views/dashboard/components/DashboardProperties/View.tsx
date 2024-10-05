import styled from 'styled-components';
import { ListBullets, SquaresFour } from '@phosphor-icons/react';
import colors from '../../../../assets/colors/project_colors';
import { useContext } from 'react';
import { PropertiesContext } from '../../../../assets/utils/PropertiesContext';

const View = () => {
  const { isGrid, setIsGrid } = useContext(PropertiesContext);

  return (
    <ViewStyle>
      <div className={isGrid ? '' : 'active'} onClick={() => setIsGrid(false)}>
        <ListBullets
          size={22}
          color={isGrid ? `${colors.white}` : `${colors.black}`}
        />
      </div>
      <div className={isGrid ? 'active' : ''} onClick={() => setIsGrid(true)}>
        <SquaresFour
          size={22}
          color={isGrid ? `${colors.black}` : `${colors.white}`}
        />
      </div>
    </ViewStyle>
  );
};

const ViewStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  > * {
    display: flex;
    padding: 4px;
    transform: rotate(-180deg);
    transition: transform 0.4s;
    cursor: pointer;
    border-radius: 7px;
  }

  .active {
    background-color: ${colors.white};
    transform: rotate(0deg);
    transition: all 0.4s;
    box-shadow: inset -0.1rem -0.1rem 0.7rem 0.05rem rgba(0, 0, 0, 0.6);
    transition: all 0.4s linear;
  }
  .active:hover {
    background-color: rgba(255, 255, 255, 0.85);
    cursor: pointer;
  }
`;

export default View;
