import React, { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const [isClickingButton, setIsDropdownOpen] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && !ref.current.contains(event.target)) {
        setDropdown(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
    setIsDropdownOpen(true);

    const timeout = setTimeout(() => {
      if (isClickingButton) {
        setDropdown(false);
        setIsDropdownOpen(false);
      }
    }, 500);

    const clearTimeoutHandler = () => {
      clearTimeout(timeout);
    };

    document.addEventListener('mousedown', clearTimeoutHandler);
    document.addEventListener('touchend', clearTimeoutHandler);

    return () => {
      document.removeEventListener('mousedown', clearTimeoutHandler);
      document.removeEventListener('touchend', clearTimeoutHandler);
    };
  };

  const onMouseEnter = () => {
    if (window.innerWidth > 960) setDropdown(true);
  };

  const onMouseLeave = () => {
    if (window.innerWidth > 960) setDropdown(false);
  };

  return (
    <li ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {items.submenu ? (
        <>
          <button
          className=''
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={toggleDropdown}
            onBlur={() => {
              if (isClickingButton) {
                setDropdown(false);
                setIsDropdownOpen(false);
              }
            }}
          >
            {items.title} {depthLevel > 0 ? <span className="" /> : <span className="" />}
          </button>
          {dropdown && (
            <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel} />
          )}
        </>
      ) : (
        <NavLink className='py-3 px-4 text-base font-semibold' to={items.url}>{items.title}</NavLink>
      )}
    </li>
  );
};

export default MenuItem;
