import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';

type transactionsTabProp = {
  data: {
    transactionsName: string;
    transactionsAmount: string;
    transactionsDate: string;
    status: string;
  };
  isProperty: boolean;
};

const TransactionsTab = ({ data, isProperty }: transactionsTabProp) => {
  return (
    <TransactionsTabStyle>
      <div className="transaction_data_container">
        <div className="transaction_name">{data.transactionsName}</div>
        <div className="transaction_amount">{data.transactionsAmount}</div>
      </div>
      <div className="transaction_data_container">
        <div className="transaction_date">{data.transactionsDate}</div>
        {isProperty ? (
          <div
            className={`transaction_status ${
              data.status.toLowerCase() === 'buy' ? 'buy' : 'sell'
            }`}
          >
            {data.status}
          </div>
        ) : (
          <></>
        )}
      </div>
    </TransactionsTabStyle>
  );
};

const TransactionsTabs = ({ isProperty }: { isProperty: boolean }) => {
  const fakeData = [
    {
      transactionsName: 'Wuse House #1',
      transactionsAmount: '$170,000.80',
      transactionsDate: '5th June 2023',
      status: 'Buy',
    },
    {
      transactionsName: 'Cliff House #30',
      transactionsAmount: '$82,245.20',
      transactionsDate: '2nd June 2023',
      status: 'Buy',
    },
    {
      transactionsName: 'Duse House #6',
      transactionsAmount: '$233,050.00',
      transactionsDate: '24th May 2023',
      status: 'Sell',
    },
    {
      transactionsName: 'Oyekan House #903',
      transactionsAmount: '$290,800.06',
      transactionsDate: '24th May 2023',
      status: 'Buy',
    },
    {
      transactionsName: 'Kenneth House #270',
      transactionsAmount: '$950,060.22',
      transactionsDate: '17th May 2023',
      status: 'Sell',
    },
  ];

  setInterval(() => {}, 1000);
  return (
    <TransactionsTabsStyle>
      {fakeData.map((data, index) => {
        return (
          <div key={index}>
            <TransactionsTab data={data} isProperty={isProperty} />
          </div>
        );
      })}
    </TransactionsTabsStyle>
  );
};

const TransactionsTabsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const TransactionsTabStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .transaction_data_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .transaction_name {
    font-size: calc(14.1 / 1.6 * 0.1rem);
    font-weight: 200;
  }
  .transaction_amount {
    font-size: calc(14.1 / 1.6 * 0.1rem);
    font-weight: 200;
  }
  .transaction_date {
    font-size: calc(11.5 / 1.6 * 0.1rem);
    font-weight: 200;
    color: ${colors.darkerGrey};
  }
  .transaction_status {
    font-size: calc(12 / 1.6 * 0.1rem);
    font-weight: 500;
  }
  .buy {
    color: ${colors.lightLightGreen};
  }
  .sell {
    color: #c10000;
  }
`;

export default TransactionsTabs;
