import { useTranslation } from 'react-i18next'
import { LanguageSelector } from './components/LanguageSelector'

const IMPACT_STATS = [
  { value: '842+', key: 'stats.students' },
  { value: '15+', key: 'stats.years' },
  { value: '91', key: 'stats.villages' },
  { value: '100+', key: 'stats.families' },
]

const PROJECT_KEYS = ['school', 'housing', 'radio', 'water', 'digital', 'sports'] as const
const PROJECT_ICONS = ['🏫', '🏠', '📻', '💧', '💻', '⚽']

function App() {
  const { t } = useTranslation()

  const participationItems = t('participation.items', { returnObjects: true }) as string[]
  const territoryItems = t('map.territory', { returnObjects: true }) as string[]
  const checkItems = t('transparency.checks', { returnObjects: true }) as string[]

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AAEGB - início">
          <img
            className="brand-logo"
            src="/site-amigos-escolas/images/logo-aaegb.svg"
            alt="Logo da AAEGB"
          />
          <span>AAEGB</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#projetos">{t('nav.projects')}</a>
          <a href="#impacto">{t('nav.impact')}</a>
          <a href="#transparencia">{t('nav.transparency')}</a>
          <a className="nav-cta" href="#participar">{t('nav.partner')}</a>
          <LanguageSelector />
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="Apresentação da AAEGB">
          <div className="hero-media">
            <img
              src="/site-amigos-escolas/images/capa-hero.svg"
              alt="Crianças da Escola Betel reunidas em Cacine"
              loading="eager"
            />
            <div className="hero-overlay" />
          </div>

          <div className="hero-inner">
            <div className="hero-kicker">
              <span />
              <p>{t('hero.kicker')}</p>
            </div>

            <h1>
              <span>{t('hero.h1_line1')}</span>
              <strong>{t('hero.h1_line2')}</strong>
            </h1>

            <p className="hero-lead">
              {t('hero.lead_before')}<strong>{t('hero.lead_strong')}</strong>{t('hero.lead_after')}
            </p>

            <div className="hero-actions">
              <a className="button primary" href="mailto:contato@aaegb.org">{t('hero.cta_primary')}</a>
              <a className="button secondary" href="#projetos">{t('hero.cta_secondary')}</a>
            </div>

            <div className="hero-stats" id="impacto" aria-label="Indicadores de autoridade">
              {IMPACT_STATS.map((stat) => (
                <article key={stat.key}>
                  <strong>{stat.value}</strong>
                  <span>{t(stat.key)}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projetos">
          <div className="section-heading">
            <p className="eyebrow">{t('projects_section.eyebrow')}</p>
            <h2>{t('projects_section.h2')}</h2>
            <p>{t('projects_section.p')}</p>
          </div>
          <div className="projects-grid">
            {PROJECT_KEYS.map((key, i) => (
              <article className="project-card" key={key}>
                <span>{PROJECT_ICONS[i]}</span>
                <h3>{t(`projects.${key}.title`)}</h3>
                <p>{t(`projects.${key}.text`)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="map-section section-grid">
          <div>
            <p className="eyebrow">{t('map.eyebrow')}</p>
            <h2>{t('map.h2')}</h2>
            <p>{t('map.p')}</p>
          </div>
          <ol className="territory-path" aria-label="Caminho territorial da atuação">
            {territoryItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>

        <section className="story-section">
          <p className="eyebrow">{t('story.eyebrow')}</p>
          <blockquote>{t('story.blockquote')}</blockquote>
          <p>{t('story.p')}</p>
        </section>

        <section className="transparency section-grid" id="transparencia">
          <div>
            <p className="eyebrow">{t('transparency.eyebrow')}</p>
            <h2>{t('transparency.h2')}</h2>
            <p>{t('transparency.p')}</p>
          </div>
          <ul className="check-list">
            {checkItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="campaign">
          <div>
            <p className="eyebrow">{t('campaign.eyebrow')}</p>
            <h2>{t('campaign.h2')}</h2>
            <p>{t('campaign.p')}</p>
          </div>
          <div className="progress-card">
            <div className="progress-meta">
              <span>{t('campaign.meta_label')}</span>
              <strong>R$ 1.591.039</strong>
            </div>
            <div className="progress-track" aria-label="Progresso de arrecadação em atualização">
              <span style={{ width: '32%' }} />
            </div>
            <p>{t('campaign.progress_text')}</p>
          </div>
        </section>

        <section className="section" id="participar">
          <div className="section-heading">
            <p className="eyebrow">{t('participation.eyebrow')}</p>
            <h2>{t('participation.h2')}</h2>
          </div>
          <div className="participation-grid">
            {participationItems.map((item) => (
              <a href="mailto:contato@aaegb.org" key={item}>{item}</a>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <h2>{t('final_cta.h2')}</h2>
          <a className="button primary" href="mailto:contato@aaegb.org">{t('final_cta.button')}</a>
        </section>
      </main>
    </>
  )
}

export default App
