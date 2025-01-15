import { useAuthContext } from "@imports/core/protected_route"
import { useTranslation } from "react-i18next"

import NavbarLink from "./navbar_link"
import LanguageSwitchButton from "@imports/components/ui/language_switch_btn"

const Navbar = () => {
    const { t } = useTranslation()
    const { isAuthorized } = useAuthContext()

    return (
        <div className="navbar navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-text navbar-brand">{t('navbar.company_name')}</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {isAuthorized === "success" ? (
                        <>
                            <NavbarLink linkTarget="/" linkText={t('navbar.home_link')} />
                            <NavbarLink linkTarget="/flashcards" linkText={t('navbar.flashcards_link')} />
                            <NavbarLink linkTarget="/logout" linkText={t('navbar.logout_link')}/>
                        </>
                    ) : (
                        <>
                            <NavbarLink linkTarget="/login" linkText={t('navbar.login_link')} />
                            <NavbarLink linkTarget="/register" linkText={t('navbar.register_link')} />
                        </>
                    )}
                    <LanguageSwitchButton />
                </ul>
            </div>
        </div>
    )
}

export default Navbar