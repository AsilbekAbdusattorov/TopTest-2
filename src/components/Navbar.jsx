import React from 'react';
import { MenuItems } from '../components/MenuItems';
import MenuItem from '../components/MenuItem';

const Navbar = () => {
  const depthLevel = 0;

  return (
    <nav className="container">
      <ul className="flex items-center space-x-10">
        {MenuItems.map((menu, index) => (
          <span key={index} className="relative group">
            <MenuItem items={menu} depthLevel={depthLevel} />
          </span>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
