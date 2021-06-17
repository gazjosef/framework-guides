import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";

// import { ReactComponent as BoltIcon } from './icons/bolt.svg'

import React from "react";

import { DropdownMenu } from "./components/DropdownMenu/DropdownMenu";
import { Navbar } from "./components/Navbar/Navbar";
import { NavItem } from "./components/NavItem/NavItem";

function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

export default App;
