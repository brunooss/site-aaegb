import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function Testimonials() {
  const { t } = useTranslation()
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="testimonials-section">
      <div className="section-heading text-center">
        <p className="eyebrow">{t('story.eyebrow')}</p>
        <h2>{t('story.h2')}</h2>
        <p>{t('story.p')}</p>
      </div>

      {/* Embedded YouTube Testimonial Spotlight */}
      <div className="video-spotlight-card">
        <div className="video-thumbnail-container" onClick={() => setIsVideoOpen(true)}>
          <img
            src="https://img.youtube.com/vi/nInRgZrVanc/maxresdefault.jpg"
            alt="Vídeo de Testemunho AAEGB"
            className="video-cover"
          />
          <div className="video-play-overlay">
            <button className="play-button" aria-label="Assistir ao Vídeo de Testemunho">
              ▶
            </button>
            <span>{t('story.video_title')}</span>
          </div>
        </div>

        <div className="video-card-body">
          <h3>{t('story.video_title')}</h3>
          <p>{t('story.video_desc')}</p>
          <button className="button primary" onClick={() => setIsVideoOpen(true)}>
            ▶ Assistir no Player Integrado
          </button>
        </div>
      </div>

      {/* Video Modal Lightbox */}
      {isVideoOpen && (
        <div className="modal-backdrop" onClick={() => setIsVideoOpen(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Fechar Vídeo"
            >
              ✕
            </button>
            <div className="video-responsive-iframe">
              <iframe
                src="https://www.youtube-nocookie.com/embed/nInRgZrVanc?autoplay=1"
                title="Testemunho AAEGB"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Testimonial Cards Grid */}
      <div className="testimonials-grid">
        <article className="testimonial-card">
          <div className="testimonial-header">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
              alt="Sene"
              className="avatar"
            />
            <div>
              <strong>Sene</strong>
              <span>{t('story.author_1')}</span>
            </div>
          </div>
          <blockquote>{t('story.blockquote')}</blockquote>
        </article>

        <article className="testimonial-card">
          <div className="testimonial-header">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
              alt="Líder Comunitário"
              className="avatar"
            />
            <div>
              <strong>Líder de Cacine</strong>
              <span>{t('story.author_2')}</span>
            </div>
          </div>
          <blockquote>{t('story.blockquote_2')}</blockquote>
        </article>
      </div>
    </section>
  )
}
