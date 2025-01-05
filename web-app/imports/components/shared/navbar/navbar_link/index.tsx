import { LinkProps } from "./types"

const NavbarLink = (props: LinkProps) => {
  return (
    <li className="nav-item">
        <a href={props.linkTarget} className="nav-link">{props.linkText}</a>
    </li>
  )
}

export default NavbarLink