import { useMemo, useState } from 'react';
import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import countryList from 'react-select-country-list';

const DashboardFilterDropdown = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const toggleFilterFunc = (option: boolean) => setToggleFilter(option);
  const [location, setLocation] = useState('Select Location');
  const options = useMemo(() => countryList().getData(), []);

  return (
    <DropdownStyle onClick={() => toggleFilterFunc(!toggleFilter)}>
      <div className="dropdown_content">
        <div>{location}</div>
        <div
          className={`dropdown_arrow ${
            toggleFilter ? 'toggle_active' : 'toggle_inactive'
          }`}
        ></div>
      </div>
      {toggleFilter ? (
        <div className="dropdown_lists">
          {options.map(({ label }: { label: string }, idx: number) => (
            <div className="dropdown_list" key={idx}>
              <div onClick={() => setLocation(label)}>{label}</div>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </DropdownStyle>
  );
};

const DropdownStyle = styled.div`
  width: 100%;
  position: relative;

  .dropdown_content {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    background: ${colors.white};
    width: 100%;
    padding: 0.8rem 0.8rem;
    border-radius: 8px;
    font-weight: 500;
    font-size: calc(12 / 1.6 * 0.1rem);
    cursor: pointer;
    color: #0d0f0f;
  }

  .toggle_active {
    transform: rotate(180deg);
    transition: all 0.5s;
  }
  .toggle_inactive {
    transform: rotate(0deg);
    transition: all 0.5s;
  }
  .dropdown_arrow {
    border-top: 6px solid black;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
  }
  .dropdown_lists {
    position: absolute;
    right: 0;
    top: 120%;
    background-color: ${colors.white};
    width: 100%;
    height: 200px;
    border-radius: 5px;
    display: flex;
    // padding: 25px 0 0;
    flex-direction: column;
    gap: 10px;
    z-index: 3;
    overflow-y: scroll;
    padding: 8px 0 8px 10px;
  }
  /* width */
  .dropdown_lists::-webkit-scrollbar {
    width: 4px;
  }

  /* Handle */
  .dropdown_lists::-webkit-scrollbar-thumb {
    background: #33313183;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
  }

  /* Handle on hover */
  .dropdown_lists::-webkit-scrollbar-thumb:hover {
    background: #5b5959;
    cursor: pointer;
  }

  .dropdown_list {
    padding: 0 10px;
    font-size: calc(13 / 1.6 * 0.1rem);
    font-weight: 200;
    // background-color: yellow;
    padding: 3px 0;
    }
    .dropdown_list > div {
      color: #060809;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 3px;
    // width: min-content;
  }
`;

export default DashboardFilterDropdown;
