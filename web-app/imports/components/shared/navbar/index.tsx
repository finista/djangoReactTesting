import { useAuthContext } from "@imports/core/protected_route"
import NavbarLink from "./navbar_link"

const Navbar = () => {
    const { isAuthorized } = useAuthContext()

    return (
        <div className="navbar navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-text navbar-brand">Silly store :3</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {isAuthorized === "success" ? (
                        <>
                            <NavbarLink linkTarget="/" linkText="Home" />
                            <NavbarLink linkTarget="/flashcards" linkText="Flashcards" />
                            <NavbarLink linkTarget="/logout" linkText="Logout" />
                        </>
                    ) : (
                        <>
                            <NavbarLink linkTarget="/login" linkText="Login" />
                            <NavbarLink linkTarget="/register" linkText="Register" />
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar