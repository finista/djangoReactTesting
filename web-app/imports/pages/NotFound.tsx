import '@imports/styles/not_found.scss'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className="message-div">
      <h1>404</h1>
      <h2>{t('404.top_text')}</h2>
      <span>{t('404.bottom_text')}</span>
    </div>
  )
}

export default NotFound