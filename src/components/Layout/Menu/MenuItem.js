import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const MenuItem = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <li class="mm-activ" onClick={item.subNav && showSubnav}>
      <a style={{cursor: "pointer"}}>
        <i class={item.iconClassName}></i>
        <span>{item.name}</span>
        {item.subNav && <span class="br bx bx-chevron-down"></span>}
      </a>
      {subnav && (
        <ul className="sub-menu">
          {item.subNav.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.path}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
