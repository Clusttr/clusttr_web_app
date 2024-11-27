import styled from 'styled-components';
import colors from '../../../assets/colors/project_colors';
import Transactions from '../../dashboard/components/RevenueAndTransactionComponent/Transactions';

const RightPropertyContent = () => {
  return (
    <RightContentStyle>
      <Transactions isProperty={true} />
    </RightContentStyle>
  );
};

const RightContentStyle = styled.div`
  color: ${colors.white};
  width: 100%;
  padding-right: 15px;
`;

export default RightPropertyContent;
