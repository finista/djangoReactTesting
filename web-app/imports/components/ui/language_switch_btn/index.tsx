import { useTranslation } from "react-i18next"

const LanguageSwitchButton = () => {
    const { i18n } = useTranslation()

    const switchLanguages = () => {
        switch (i18n.language) {
            case 'en':
                i18n.changeLanguage('ru')
                break 
            case 'ru':
                i18n.changeLanguage('en')
                break
        }
    }

    return (
        <button onClick={switchLanguages}>
            {i18n.language}
        </button>
    )
}

export default LanguageSwitchButton