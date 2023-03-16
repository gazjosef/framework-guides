import Link from "next/link";
import { FaFootballBall, FaSignOutAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <header className="header | u-bg-primary-400 u-clr-white-0">
      <div className="container | u-flex u-items-center u-justify-between">
        <div className="header__logo | u-flex u-items-center u-justify-between">
          <IconContext.Provider value={{ className: "" }}>
            <FaFootballBall />
          </IconContext.Provider>
          <h3 className="u-ml-1 u-uppercase">Footy Tips</h3>
        </div>
        <ul role="list" className="u-flex u-items-center">
          <li>
            <Link href="/table" className="u-clr-white-0">
              Table
            </Link>
          </li>
          <li>
            <Link href="/tips" className="u-mx-2 | u-clr-white-0">
              Tips
            </Link>
          </li>
          <li>
            <Link href="/">
              <button className="btn | u-flex u-items-center u-justify-between">
                <FaSignOutAlt />
                <h3 className="u-ml-0-5">Logout</h3>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
