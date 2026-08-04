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
        <p className="section-subtitle">{t('story.p')}</p>
      </div>

      {/* Modern YouTube Video Spotlight Card */}
      <div className="video-spotlight-wrapper">
        <div className="video-preview-card" onClick={() => setIsVideoOpen(true)}>
          <div
            className="video-poster-bg"
            style={{
              backgroundImage: 'url(https://img.youtube.com/vi/nInRgZrVanc/maxresdefault.jpg)',
            }}
          />
          <div className="video-poster-overlay" />

          <div className="video-poster-content">
            <button className="video-play-btn" aria-label="Assistir ao Vídeo de Testemunho">
              ▶
            </button>
            <div className="video-meta">
              <span className="video-badge">Vídeo Oficial · Cacine</span>
              <h3>{t('story.video_title')}</h3>
              <p>{t('story.video_desc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Lightbox */}
      {isVideoOpen && (
        <div className="modal-backdrop" onClick={() => setIsVideoOpen(false)}>
          <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Fechar Vídeo"
            >
              ✕
            </button>
            <div className="video-iframe-box">
              <iframe
                src="https://www.youtube-nocookie.com/embed/nInRgZrVanc?autoplay=1"
                title="Testemunho Oficial AAEGB"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Quote Cards */}
      <div className="testimonials-cards-grid">
        <article className="testimonial-quote-card">
          <div className="quote-mark">“</div>
          <p className="quote-text">{t('story.blockquote')}</p>
          <div className="quote-author-box">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
              alt="Sene"
              className="author-avatar"
            />
            <div>
              <strong className="author-name">Sene</strong>
              <span className="author-role">{t('story.author_1')}</span>
            </div>
          </div>
        </article>

        <article className="testimonial-quote-card">
          <div className="quote-mark">“</div>
          <p className="quote-text">{t('story.blockquote_2')}</p>
          <div className="quote-author-box">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
              alt="Líder Comunitário"
              className="author-avatar"
            />
            <div>
              <strong className="author-name">Líder Comunitário</strong>
              <span className="author-role">{t('story.author_2')}</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
