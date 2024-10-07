import { Button } from "@mui/material";

export type NavItemProps = {
  icon?: any;
  link?: string;
  name?: string;
  fontSize?: number | string;
}

export default function NavItem({
  icon,
  link,
  fontSize = 16,
  name = `Home`,
}: NavItemProps) {
  return (
    <li className={`navLi`}>
      <Button className={`navBtn p0 w100`}>
        <a href={link} className={`navLnk navItem w100 flex gap5 alignCenter borderRadius ${link ? `` : `label`}`} style={{ fontSize, padding: `15px 15px 15px 7px` }}>
          {icon} {name}
        </a>
      </Button>
    </li>
  )
}