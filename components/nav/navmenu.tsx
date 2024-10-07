import NavItem from "./navitem";
import { brandName } from "../../shared/shared";
import { IconLayoutDashboard, IconQuestionMark } from "@tabler/icons-react";

export class NavMenuProps {
  className?: string = `nav-menu`;
  alignment?: `left` | `right` = `left`;
  direction?: `row` | `column` = `column`;
}

export default function NavMenu({ alignment = `left`, direction = `column`, className = `nav-menu` }: NavMenuProps) {
  return (
    <nav className={`nav navigation ${className}`}>
      <ul className={`navMenu flex gap5 p0 pl15 ${alignment} ${direction}`}>
        <NavItem name={brandName} link={`/`} icon={<IconQuestionMark color={`var(--iconRight)`} />} />
        <NavItem name={`Questions Database`} link={`/`} icon={<IconLayoutDashboard color={`var(--iconRight)`} />} />
      </ul>
    </nav>
  )
}