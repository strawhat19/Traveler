import Logo from "../logo/logo";
import { useState } from "react";
import NavMenu from "../nav/navmenu";
import { IconButton } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";

export default function Header() {
  let [expanded, setExpanded] = useState(false);

  return (
    <header className={`header flex center column ${expanded ? `expanded` : `collapsed`}`}>
      <div className={`headerInner w95 flex center`}>
        <div className={`headerLeft w100`}>
          <Logo />
        </div>
        <div className={`headerRight flex end alignCenter w100`}>
          <NavMenu className={`headerMenu`} direction={`row`} alignment={`right`} />
          <IconButton className={`menuButton`} onClick={() => setExpanded(!expanded)}>
            {expanded ? (
              <Close style={{ color: `var(--iconRight)` }} />
            ) : (
              <Menu style={{ color: `white` }} />
            )}
          </IconButton>
        </div>
      </div>
      <div className={`submenu w95`}>
        <NavMenu className={`mobileSubmenu`} alignment={`right`} />
      </div>
    </header>
  );
}