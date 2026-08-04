import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface ProjectItem {
  key: string
  icon: string
  bgImage: string
  tag: string
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    key: 'school',
    icon: '🏫',
    tag: 'Educação & Futuro',
    bgImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80',
  },
  {
    key: 'housing',
    icon: '🏠',
    tag: 'Acolhimento & Moradia',
    bgImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80',
  },
  {
    key: 'radio',
    icon: '📻',
    tag: 'Comunicação Comunitária',
    bgImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1600&q=80',
  },
  {
    key: 'water',
    icon: '💧',
    tag: 'Saúde & Poços Artesianos',
    bgImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80',
  },
  {
    key: 'digital',
    icon: '💻',
    tag: 'Inclusão & Tecnologia',
    bgImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
  },
  {
    key: 'sports',
    icon: '⚽',
    tag: 'Esporte & Saúde',
    bgImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1600&q=80',
  },
]

export function ProjectCarousel() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROJECTS_DATA.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const currentProject = PROJECTS_DATA[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS_DATA.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length)
  }

  return (
    <div className="project-carousel-wrapper">
      <div
        className="carousel-main-slide"
        style={{ backgroundImage: `url(${currentProject.bgImage})` }}
      >
        <div className="carousel-backdrop-tint" />

        <div className="carousel-content-box">
          <div className="carousel-tag-badge">
            <span className="badge-icon">{currentProject.icon}</span>
            <span className="badge-text">{currentProject.tag}</span>
          </div>

          <h3 className="carousel-project-title">
            {t(`projects.${currentProject.key}.title`)}
          </h3>
          <p className="carousel-project-desc">
            {t(`projects.${currentProject.key}.text`)}
          </p>

          <div className="carousel-actions-row">
            <a href="#participar" className="button primary">
              {t('hero.cta_primary')}
            </a>
            <span className="carousel-step-counter">
              {currentIndex + 1} de {PROJECTS_DATA.length}
            </span>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          className="carousel-arrow left"
          onClick={handlePrev}
          aria-label="Projeto anterior"
        >
          ‹
        </button>
        <button
          className="carousel-arrow right"
          onClick={handleNext}
          aria-label="Próximo projeto"
        >
          ›
        </button>

        {/* Carousel Indicator Dots */}
        <div className="carousel-indicators">
          {PROJECTS_DATA.map((proj, idx) => (
            <button
              key={proj.key}
              className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para projeto ${t(`projects.${proj.key}.title`)}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
