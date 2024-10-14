import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';

type RangePropType = {
  title: string;
};

const DashboardFilterRange = ({ title }: RangePropType) => {
  return (
    <RangeStyle>
      <div className="title">{title}</div>
      <div className="price_container">
        <div className="price">$3,500</div>
        <div className="line"></div>
        <div className="price">$3,500,000</div>
      </div>
      <div style={{ fontSize: 14 }}>DashboardFilterRange</div>
    </RangeStyle>
  );
};

const RangeStyle = styled.div`
  padding: 5px 0 5px 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  .title {
    font-size: calc(12 / 1.6 * 0.1rem);
    color: ${colors.darkWhite};
  }
  .price_container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .price {
    font-size: calc(11 / 1.6 * 0.1rem);
    background-color: ${colors.darkerLightGreen};
    color: #fcfcfe;
    border: 1px solid #28705a;
    width: 106px;
    padding: 7px 0;
    text-align: center;
    font-weight: 500;
    border-radius: 8px;
  }
  .line {
    // padding: 1px 16px;
    width: 13px;
    height: 2px;
    border-radius: 50px;
    background-color: #242830;
  }
`;

export default DashboardFilterRange;
