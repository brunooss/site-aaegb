import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function ImpactCounters() {
  const { t } = useTranslation()
  const [copiedPix, setCopiedPix] = useState(false)

  const pixKey = '37.747.064/0001-60'

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey)
    setCopiedPix(true)
    setTimeout(() => setCopiedPix(false), 2500)
  }

  return (
    <section className="impact-counters-section">
      <div className="section-heading text-center">
        <p className="eyebrow">{t('impact_counters.eyebrow')}</p>
        <h2>{t('impact_counters.h2')}</h2>
        <p>{t('impact_counters.p')}</p>
      </div>

      {/* Grid of Key Impact Metrics */}
      <div className="metrics-grid">
        <article className="metric-card highlight">
          <span className="metric-icon">🎓</span>
          <strong className="metric-number">845</strong>
          <span className="metric-title">{t('impact_counters.students')}</span>
          <span className="metric-sub">704 Aprovados (83.3%)</span>
        </article>

        <article className="metric-card highlight">
          <span className="metric-icon">🍲</span>
          <strong className="metric-number">102.000+</strong>
          <span className="metric-title">{t('impact_counters.meals')}</span>
          <span className="metric-sub">{t('impact_counters.meals_sub')}</span>
        </article>

        <article className="metric-card">
          <span className="metric-icon">🏠</span>
          <strong className="metric-number">20</strong>
          <span className="metric-title">{t('impact_counters.boarding')}</span>
          <span className="metric-sub">{t('impact_counters.boarding_sub')}</span>
        </article>

        <article className="metric-card">
          <span className="metric-icon">👨‍🏫</span>
          <strong className="metric-number">24</strong>
          <span className="metric-title">{t('impact_counters.staff')}</span>
          <span className="metric-sub">21 Professores + 3 Cozinheiras</span>
        </article>
      </div>

      {/* Cost per Student & PIX Fast Donation Box */}
      <div className="cost-pix-box">
        <div className="cost-info-col">
          <span className="cost-badge">{t('impact_counters.cost_badge')}</span>
          <h3>{t('impact_counters.cost_title')}</h3>
          <p>{t('impact_counters.cost_desc')}</p>
        </div>

        <div className="pix-fast-col">
          <div className="pix-card-inner">
            <span className="pix-label">💳 PIX Oficial (CNPJ):</span>
            <code className="pix-code-text">{pixKey}</code>
            <button className="button primary copy-pix-btn" onClick={handleCopyPix}>
              {copiedPix ? '✓ Chave PIX Copiada!' : 'Copiar Chave PIX'}
            </button>
            <div className="bank-details-sub">
              <strong>Associação Mãos Que Compartilham</strong>
              <span>Banco: 403 - Cora SCFI | Agência: 0001 | Conta: 6056291-9</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
