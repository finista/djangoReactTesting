import { Link } from "react-router-dom"
import { LinkProps } from "./types"

const NavbarLink = (props: LinkProps) => {
  return (
    <li className="nav-item">
        <Link to={props.linkTarget} className="nav-link">{props.linkText}</Link>
    </li>
  )
}

export default NavbarLink