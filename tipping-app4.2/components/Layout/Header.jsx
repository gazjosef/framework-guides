import React from "react";

const Header = () => {
  return (
    <header className="header | u-bg-neutral-600 u-clr-white-0">
      <div className="container | u-flex u-items-center u-justify-between">
        <div className="header__logo">Tipping App</div>
        <div className="header__user">Welcome, User</div>
      </div>
    </header>
  );
};

export default Header;
