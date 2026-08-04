import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSelector } from './components/LanguageSelector'
import { ProjectCarousel } from './components/ProjectCarousel'
import { InteractiveMap } from './components/InteractiveMap'
import { Testimonials } from './components/Testimonials'
import { ParticipationModal, ParticipationType } from './components/ParticipationModal'
import { Footer } from './components/Footer'

const IMPACT_STATS = [
  { value: '842+', key: 'stats.students' },
  { value: '15+', key: 'stats.years' },
  { value: '91', key: 'stats.villages' },
  { value: '100+', key: 'stats.families' },
]

const TRANSPARENCY_PROJECTS = [
  { key: 'school', percent: 88, raised: 'R$ 245.000', goal: 'R$ 280.000' },
  { key: 'housing', percent: 92, raised: 'R$ 184.000', goal: 'R$ 200.000' },
  { key: 'radio', percent: 75, raised: 'R$ 90.000', goal: 'R$ 120.000' },
  { key: 'water', percent: 70, raised: 'R$ 140.000', goal: 'R$ 200.000' },
  { key: 'digital', percent: 65, raised: 'R$ 97.500', goal: 'R$ 150.000' },
  { key: 'sports', percent: 32, raised: 'R$ 509.132', goal: 'R$ 1.591.039' },
]

const PARTICIPATION_CARDS: { type: ParticipationType; icon: string; image: string }[] = [
  {
    type: 'maintainer',
    icon: '💳',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?auto=format&fit=crop&w=600&q=80',
  },
  {
    type: 'student',
    icon: '🎓',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
  },
  {
    type: 'fund',
    icon: '💰',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&q=80',
  },
  {
    type: 'volunteer',
    icon: '🤝',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80',
  },
  {
    type: 'pray',
    icon: '🙏',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
  },
  {
    type: 'mobilize',
    icon: '⛪',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=600&q=80',
  },
]

function App() {
  const { t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeModal, setActiveModal] = useState<ParticipationType>(null)

  const checkItems = t('transparency.checks', { returnObjects: true }) as string[]

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      {/* Responsive Glassmorphic Site Header */}
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AAEGB - início" onClick={closeMenu}>
          <img
            className="brand-logo"
            src="/site-amigos-escolas/images/logo-aaegb.svg"
            alt="Logo da AAEGB"
          />
          <span>AAEGB</span>
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Bar & Language Switcher */}
        <nav
          className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}
          aria-label="Navegação principal"
        >
          <a href="#projetos" onClick={closeMenu}>{t('nav.projects')}</a>
          <a href="#impacto" onClick={closeMenu}>{t('nav.impact')}</a>
          <a href="#transparencia" onClick={closeMenu}>{t('nav.transparency')}</a>
          <a className="nav-cta" href="#participar" onClick={closeMenu}>{t('nav.partner')}</a>
          <LanguageSelector />
        </nav>
      </header>

      <main id="top">
        {/* Hero Section */}
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
              <a className="button primary" href="#participar">{t('hero.cta_primary')}</a>
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

        {/* Projects Carousel Section */}
        <section className="section" id="projetos">
          <div className="section-heading">
            <p className="eyebrow">{t('projects_section.eyebrow')}</p>
            <h2>{t('projects_section.h2')}</h2>
            <p>{t('projects_section.p')}</p>
          </div>

          <ProjectCarousel />
        </section>

        {/* Interactive Territory Map Section */}
        <section className="map-section">
          <div className="map-section-header">
            <p className="eyebrow">{t('map.eyebrow')}</p>
            <h2>{t('map.h2')}</h2>
            <p>{t('map.p')}</p>
          </div>

          <InteractiveMap />
        </section>

        {/* Testimonials & YouTube Video Section */}
        <Testimonials />

        {/* Reformulated Transparency Section */}
        <section className="transparency-section" id="transparencia">
          <div className="section-heading text-center">
            <p className="eyebrow">{t('transparency.eyebrow')}</p>
            <h2>{t('transparency.h2')}</h2>
            <p>{t('transparency.p')}</p>
          </div>

          <div className="transparency-grid">
            {TRANSPARENCY_PROJECTS.map((proj) => (
              <div key={proj.key} className="transparency-card">
                <div className="card-top">
                  <h4>{t(`projects.${proj.key}.title`)}</h4>
                  <span className="percent-badge">{proj.percent}%</span>
                </div>
                <div className="progress-track" aria-label={`Progresso de ${t(`projects.${proj.key}.title`)}`}>
                  <span style={{ width: `${proj.percent}%` }} />
                </div>
                <div className="card-bottom">
                  <span>{proj.raised} arrecadados</span>
                  <span>Meta: {proj.goal}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="transparency-actions text-center">
            <a
              href="https://docs.google.com/spreadsheets"
              target="_blank"
              rel="noreferrer"
              className="button secondary transparent-sheet-btn"
            >
              {t('transparency.sheet_button')}
            </a>
          </div>

          <ul className="check-list transparency-checklist">
            {checkItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Featured Campaign Spotlight */}
        <section className="campaign">
          <div>
            <p className="eyebrow">{t('campaign.eyebrow')}</p>
            <h2>{t('campaign.h2')}</h2>
            <p>{t('campaign.p')}</p>
            <a href="#projetos" className="button secondary cta-back-projects">
              {t('campaign.cta_all_projects')}
            </a>
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
            <button className="button primary full-width mt-4" onClick={() => setActiveModal('fund')}>
              Contribuir para a Campanha
            </button>
          </div>
        </section>

        {/* How to Participate Section */}
        <section className="section" id="participar">
          <div className="section-heading">
            <p className="eyebrow">{t('participation.eyebrow')}</p>
            <h2>{t('participation.h2')}</h2>
          </div>

          <div className="participation-grid-rich">
            {PARTICIPATION_CARDS.map((card) => (
              <article
                key={card.type}
                className="participation-rich-card"
                onClick={() => setActiveModal(card.type)}
                role="button"
                tabIndex={0}
              >
                <div
                  className="card-bg-img"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="card-overlay" />
                <div className="card-content">
                  <span className="card-icon">{card.icon}</span>
                  <h3>{t(`participation.cards.${card.type}.title`)}</h3>
                  <p>{t(`participation.cards.${card.type}.desc`)}</p>
                  <span className="card-action-link">Saiba como →</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <h2>{t('final_cta.h2')}</h2>
          <button className="button primary" onClick={() => setActiveModal('fund')}>
            {t('final_cta.button')}
          </button>
        </section>
      </main>

      {/* Participation Modal System */}
      <ParticipationModal activeType={activeModal} onClose={() => setActiveModal(null)} />

      {/* Institutional Footer */}
      <Footer />
    </>
  )
}

export default App
