import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../../../assets/colors/project_colors';
import { useEffect, useRef } from 'react';

const TopHeader = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navLinkEls = navRef.current?.children;
    const windowPathname = window.location.pathname;

    if (navLinkEls === undefined) return;

    [...navLinkEls].forEach(navLinkEl => {
      const navLinkPathname = new URL(navLinkEl.href).pathname;

      if (navLinkPathname === windowPathname) navLinkEl.classList.add('active');
    });
  }, []);

  return (
    <TopHeaderStyle>
      <div>Top Header</div>
      <div ref={navRef}>
        <Link to={'/'}>Overview</Link>
        <Link to={'/upload'}>Upload Docs</Link>
        <Link to={'/properties'}>Properties</Link>
        <Link to={'/financials'}>Financials</Link>
      </div>
      <div>Top Header</div>
    </TopHeaderStyle>
  );
};

const TopHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.backgroundColor};
  padding: 20px;

  .active {
    color: yellow;
    text-decoration: none;
  }
`;

export default TopHeader;
