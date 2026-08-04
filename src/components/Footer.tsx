import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-col">
          <a className="brand" href="#top" aria-label="AAEGB - início">
            <img
              className="brand-logo"
              src="/images/logo-aaegb.svg"
              alt="Logo da AAEGB"
            />
            <span>AAEGB</span>
          </a>
          <p className="footer-desc">{t('footer.about_desc')}</p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              📸 Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              📘 Facebook
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              ▶ YouTube
            </a>
          </div>
        </div>

        <div className="footer-nav-col">
          <h4>{t('footer.links_title')}</h4>
          <ul>
            <li><a href="#projetos">{t('nav.projects')}</a></li>
            <li><a href="#impacto">{t('nav.impact')}</a></li>
            <li><a href="#transparencia">{t('nav.transparency')}</a></li>
            <li><a href="#participar">{t('nav.partner')}</a></li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h4>{t('footer.contact_title')}</h4>
          <p>{t('footer.email')}</p>
          <p>{t('footer.location')}</p>
          <a className="footer-sheet-link" href="#transparencia">
            {t('transparency.sheet_button')}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t('footer.rights')}</p>
      </div>
    </footer>
  )
}
