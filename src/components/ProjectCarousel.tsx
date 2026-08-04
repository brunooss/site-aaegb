import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface ProjectItem {
  key: string
  icon: string
  bgImage: string
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    key: 'school',
    icon: '🏫',
    bgImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80',
  },
  {
    key: 'housing',
    icon: '🏠',
    bgImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80',
  },
  {
    key: 'radio',
    icon: '📻',
    bgImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1600&q=80',
  },
  {
    key: 'water',
    icon: '💧',
    bgImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80',
  },
  {
    key: 'digital',
    icon: '💻',
    bgImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
  },
  {
    key: 'sports',
    icon: '⚽',
    bgImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1600&q=80',
  },
]

export function ProjectCarousel() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROJECTS_DATA.length)
    }, 5000)
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
    <div className="project-carousel-container">
      <div className="carousel-slide" style={{ backgroundImage: `url(${currentProject.bgImage})` }}>
        <div className="carousel-overlay" />
        <div className="carousel-content">
          <div className="carousel-badge">
            <span className="badge-icon">{currentProject.icon}</span>
            <span className="badge-text">{t('projects_section.eyebrow')}</span>
          </div>

          <h3 className="carousel-title">{t(`projects.${currentProject.key}.title`)}</h3>
          <p className="carousel-text">{t(`projects.${currentProject.key}.text`)}</p>

          <a href="#participar" className="button primary carousel-btn">
            {t('hero.cta_primary')}
          </a>
        </div>

        {/* Controls */}
        <button
          className="carousel-nav prev"
          onClick={handlePrev}
          aria-label="Projeto anterior"
        >
          ‹
        </button>
        <button
          className="carousel-nav next"
          onClick={handleNext}
          aria-label="Próximo projeto"
        >
          ›
        </button>

        {/* Dots */}
        <div className="carousel-dots">
          {PROJECTS_DATA.map((proj, idx) => (
            <button
              key={proj.key}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ver projeto ${t(`projects.${proj.key}.title`)}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
