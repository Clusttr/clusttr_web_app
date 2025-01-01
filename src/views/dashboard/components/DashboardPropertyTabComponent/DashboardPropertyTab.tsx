import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';

type TabProp = {
  tabTitle: string;
  bigDigit: string;
  smallDigit: string;
};

const Tab = ({ tabTitle, bigDigit, smallDigit }: TabProp) => {
  return (
    <TabStyle>
      <div className="tab_container">
        <div className="tab_header">{tabTitle}</div>
        <div className="tab_digits">
          <div>{bigDigit}</div>
          <div>{smallDigit}</div>
        </div>
      </div>
    </TabStyle>
  );
};

const DashboardPropertyTab = () => {
  return (
    <PropertyTabStyle>
      <Tab tabTitle="Total Properties (24hr)" bigDigit="237" smallDigit="+2" />
      <div className="stroke"></div>
      <Tab
        tabTitle="Properties minted (24hr)"
        bigDigit="124"
        smallDigit="+12%"
      />
      <div className="stroke"></div>
      <Tab
        tabTitle="Total volume (24hr)"
        bigDigit="$604,934.23"
        smallDigit="+5%"
      />
      {/* <div className="stroke"></div>
      <Tab
        tabTitle="Total volume (24hr)"
        bigDigit="$604,934.23"
        smallDigit="+5%"
      /> */}
    </PropertyTabStyle>
  );
};

const PropertyTabStyle = styled.div`
  background-color: ${colors.backgroundColor};
  margin: 15px 20px;
  padding: 20px;
  border-radius: 10px;
  color: ${colors.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

  .stroke {
    width: 0.188rem;
    //? width: 3px;
    height: 25px;
    background-color: ${colors.propertyTabLineColor};
    border-radius: 20px;
  }
`;

const TabStyle = styled.div`
  width: 21%;

  .tab_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .tab_header {
    color: ${colors.lightGrey};
    font-weight: 200;
    font-size: calc(12.5 / 1.6 * 0.1rem);
    /*
    ? converting px to rem
    ? font-size: 13px;
    ? 16/0.1 = 1.6
    ? 13/1.6 = 8.125
    ? 8.125 * 0.1 = 0.8125rem
    */
  }
  .tab_digits {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tab_digits > :first-child {
    font-size: calc(20 / 1.6 * 0.1rem);
  }
  .tab_digits > :last-child {
    font-size: calc(12.5 / 1.6 * 0.1rem);
    color: ${colors.lightLightGreen};
    font-weight: 200;
  }
`;

export default DashboardPropertyTab;
