import { FaFootballBall } from "react-icons/fa";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <header className="header | u-bg-neutral-600 u-clr-white-0">
      <div className="container | u-flex u-items-center u-justify-between">
        <div className="header__logo | u-flex u-items-center u-justify-between">
          <IconContext.Provider value={{ className: "" }}>
            <FaFootballBall />
          </IconContext.Provider>
          <h2 className="u-ml-1 u-uppercase">Tipping App</h2>
        </div>
        <div className="header__user">Welcome, User</div>
      </div>
    </header>
  );
};

export default Header;
