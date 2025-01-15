import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const BASE_URL = import.meta.env.VITE_API_URL

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: `${BASE_URL}user/locales/?lang={{lng}}`,
        },
        lng: 'en',
        fallbackLng: 'en',
        debug: import.meta.env.VITE_IS_PROD === "false",
        interpolation: {
            escapeValue: false
        }
    })