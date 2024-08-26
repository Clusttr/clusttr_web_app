import { Link } from 'react-router-dom';

function NavLinks() {
  return (
    <>
      <Link to={'/'} className="nav_link">
        Overview
      </Link>
      <Link to={'/upload'} className="nav_link">
        Upload Docs
      </Link>
      <Link to={'/properties'} className="nav_link">
        Properties
      </Link>
      <Link to={'/financials'} className="nav_link">
        Financials
      </Link>
    </>
  );
}

export default NavLinks;
