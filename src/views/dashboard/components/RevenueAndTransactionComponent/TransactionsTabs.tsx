import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';

type transactionsTabProp = {
  transactionsName: string;
  transactionsAmount: string;
  transactionsDate: string;
};

const TransactionsTab = ({
  transactionsName,
  transactionsAmount,
  transactionsDate,
}: transactionsTabProp) => {
  return (
    <TransactionsTabStyle>
      <div className="top_tab">
        <div className="transactions_name">{transactionsName}</div>
        <div className="transactions_amount">{transactionsAmount}</div>
      </div>
      <div className="transactions_date">{transactionsDate}</div>
    </TransactionsTabStyle>
  );
};

const TransactionsTabs = () => {
  const fakeData = [
    {
      transactionsName: 'Wuse House #1',
      transactionsAmount: '$170,000.80',
      transactionsDate: '5th June 2023',
    },
    {
      transactionsName: 'Cliff House #30',
      transactionsAmount: '$82,245.20',
      transactionsDate: '2nd June 2023',
    },
    {
      transactionsName: 'Duse House #6',
      transactionsAmount: '$233,050.00',
      transactionsDate: '24th May 2023',
    },
    {
      transactionsName: 'Oyekan House #903',
      transactionsAmount: '$290,800.06',
      transactionsDate: '24th May 2023',
    },
    {
      transactionsName: 'Kenneth House #270',
      transactionsAmount: '$950,060.22',
      transactionsDate: '17th May 2023',
    },
  ];

  setInterval(() => {}, 1000);
  return (
    <TransactionsTabsStyle>
      {fakeData.map((data,index) => {
        return (
          <div key={index}>
            <TransactionsTab
              transactionsName={data.transactionsName}
              transactionsAmount={data.transactionsAmount}
              transactionsDate={data.transactionsDate}
            />
          </div>
        );
      })}
    </TransactionsTabsStyle>
  );
};

const TransactionsTabsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const TransactionsTabStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .top_tab {
    display: flex;
    justify-content: space-between;
  }
  .transactions_name {
    font-size: calc(14.1 / 1.6 * 0.1rem);
    font-weight: 200;
  }
  .transactions_amount {
    font-size: calc(14.1 / 1.6 * 0.1rem);
    font-weight: 200;
  }
  .transactions_date {
    font-size: calc(11.5 / 1.6 * 0.1rem);
    font-weight: 200;
    color: ${colors.darkerGrey};
  }
`;

export default TransactionsTabs;
