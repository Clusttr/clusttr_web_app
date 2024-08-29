import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import transactionsIcon from '../../../../assets/images/transaction_icon.png';
import TransactionsTabs from './TransactionsTabs';

const Transactions = () => {
  return (
    <TransactionsStyle>
      <div className="transactions_header">
        <div className="transactions_header_text">Recent transactions</div>
        <div>
          <img
            className="transactions_header_icon"
            src={transactionsIcon}
            alt=""
          />
        </div>
      </div>
      <TransactionsTabs />
    </TransactionsStyle>
  );
};

const TransactionsStyle = styled.div`
  background-color: ${colors.backgroundColor};
  padding: 20px 20px 30px;
  border-radius: 10px;
  color: ${colors.white};
  
  .transactions_header {
    display: flex;
    gap: 5px;
    padding-bottom: 20px;
  }
  .transactions_header_text {
    font-size: calc(15 / 1.6 * 0.1rem);
  }
  .transactions_header_icon {
    width: 100%;
  }
`;

export default Transactions;
