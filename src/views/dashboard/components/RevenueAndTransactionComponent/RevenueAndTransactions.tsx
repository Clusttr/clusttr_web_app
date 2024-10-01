import styled from 'styled-components';
// import colors from '../../../../assets/colors/project_colors';
import Transaction from './Transactions';
import Revenue from './Revenue';

const RevenueAndTransactions = () => {
  return (
    <RevenueAndTransactionsStyle>
      <Revenue />
      <Transaction />
    </RevenueAndTransactionsStyle>
  );
};

const RevenueAndTransactionsStyle = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 0 20px 15px;
  gap: 15px;
  height: 390px;
`;

export default RevenueAndTransactions;
