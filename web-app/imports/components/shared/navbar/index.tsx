import { useAuthContext } from "@imports/core/protected_route"

const Navbar = () => {
    const { isAuthorized } = useAuthContext()

    console.log(isAuthorized)

    return (
        <div className="navbar">
            <h1 className="navbar-text">Silly store :3</h1>
            <div className="navbar-links">
                <a href="" className="navbar-link"></a>
            </div>
        </div>
    )
}

export default Navbar