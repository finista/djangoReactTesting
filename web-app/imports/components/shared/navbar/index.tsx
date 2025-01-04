import { useAuthContext } from "@imports/core/protected_route"

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
                            <li className="nav-item">
                                <a href="/" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/flashcards" className="nav-link">Flashcards</a>
                            </li>
                            <li className="nav-item">
                                <a href="/logout" className="nav-link">Logout</a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <a href="/login" className="nav-link">Login</a>
                            </li>
                            <li className="nav-item">
                                <a href="/register" className="nav-link">Register</a>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar