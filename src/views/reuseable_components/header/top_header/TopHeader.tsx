import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import { useEffect, useRef } from 'react';
import logo from '../../../../assets/images/clusttr_logo.png';
import NavLinks from './NavLinks';
import Profile from './Profile';

const TopHeader = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const { pathname: windowPathname } = useLocation();

  useEffect(() => {
    const navLinkEls = navRef.current?.children;

    if (navLinkEls === undefined) return;

    [...navLinkEls].forEach(navLinkEl => {
      if (
        navLinkEl instanceof HTMLAnchorElement &&
        new URL(navLinkEl.href).pathname === windowPathname
      )
        navLinkEl.id = 'active';

      //// const navLinkPathname = new URL(navLinkEl.href).pathname;
      //// if (navLinkPathname === windowPathname) navLinkEl.id = 'active';
    });
  }, [windowPathname]);

  return (
    <TopHeaderStyle>
      <div className="logo_container">
        <img src={logo} alt="Clusttr_Logo" className="logo" />
      </div>
      <div ref={navRef} className="nav_link__container">
        <NavLinks />
      </div>
      <Profile />
    </TopHeaderStyle>
  );
};

const TopHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.backgroundColor};
  padding: 15px;

  #active {
    color: ${colors.white};
    background-color: ${colors.darkLightGreen};
    padding: 8px 12px;
    border-radius: 10px;
    font-size: calc(12.5 / 1.6 * 0.1rem);
  }
  .logo_container {
    width: 17%;
  }
  .logo {
    width: 34%;
  }
  .nav_link__container {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .nav_link {
    cursor: pointer;
    text-decoration: none;
    color: ${colors.navLinkColor};
    font-size: calc(12.5 / 1.6 * 0.1rem);
    font-weight: 200;
    padding: 0 12px;
    transition: all 0.5s linear;
  }
  .nav_link:hover {
    background-color: #3e3c3c7e;
    color: white;
    padding-top: 8px;
    padding-bottom: 8px;
    transition: all 0.3s;
    border-radius: 10px;
  }
`;

export default TopHeader;
