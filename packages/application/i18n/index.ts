import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import LocaleResources from './locales'

const languages = ['en', 'es']

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    load: 'all',
    debug: true,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: [
        'path',
        // 'querystring',
        // 'cookie',
        // 'localStorage',
        // 'navigator',
        // 'htmlTag',
        // 'path',
        // 'subdomain',
      ],
      lookupFromPathIndex: 0,
      // checkWhitelist: true
    },
    supportedLngs: languages,
    resources: LocaleResources,
  })

export default i18n

export * from './keys'

export { default as Languages } from './locales'
