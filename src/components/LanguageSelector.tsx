import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'sv', label: 'SV' },
]

export function LanguageSelector() {
  const { i18n } = useTranslation()
  const current = i18n.language

  return (
    <div className="lang-selector" role="group" aria-label="Language">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          className={current === code ? 'lang-btn active' : 'lang-btn'}
          onClick={() => i18n.changeLanguage(code)}
          aria-pressed={current === code}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
