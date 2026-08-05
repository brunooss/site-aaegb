import { useTranslation } from 'react-i18next'

export function PillarsSection() {
  const { t } = useTranslation()

  return (
    <section className="pillars-section">
      <div className="section-heading text-center">
        <p className="eyebrow">{t('pillars.eyebrow')}</p>
        <h2>{t('pillars.h2')}</h2>
        <p>{t('pillars.p')}</p>
      </div>

      <div className="pillars-grid">
        {/* Pillar 1: Infraestrutura */}
        <article className="pillar-card">
          <div className="pillar-header">
            <span className="pillar-number">01</span>
            <span className="pillar-icon">🏗️</span>
          </div>
          <h3>{t('pillars.p1_title')}</h3>
          <p>{t('pillars.p1_desc')}</p>
          <ul className="pillar-list">
            <li>✓ <strong>Poliesportivo Betel:</strong> Fundação e alicerces 100% concluídos.</li>
            <li>✓ <strong>Água Potável:</strong> Poços artesiano de água limpa para a comunidade.</li>
            <li>✓ <strong>Salas de Aula:</strong> Estruturas para 3 turnos (Jardim ao 12º ano).</li>
          </ul>
        </article>

        {/* Pillar 2: Dia a Dia & Alimentação */}
        <article className="pillar-card highlight">
          <div className="pillar-header">
            <span className="pillar-number">02</span>
            <span className="pillar-icon">🍲</span>
          </div>
          <h3>{t('pillars.p2_title')}</h3>
          <p>{t('pillars.p2_desc')}</p>
          <ul className="pillar-list">
            <li>✓ <strong>Cantina Escolar:</strong> Refeição diária nutritiva para o Ensino Básico.</li>
            <li>✓ <strong>Casa do Estudante:</strong> 20 vagas no internato para aldeias distantes.</li>
            <li>✓ <strong>Saúde Preventiva:</strong> Dentistas portugueses (ONG Mundo a Sorrir).</li>
          </ul>
        </article>

        {/* Pillar 3: Capacitação & Tecnologia */}
        <article className="pillar-card">
          <div className="pillar-header">
            <span className="pillar-number">03</span>
            <span className="pillar-icon">💻</span>
          </div>
          <h3>{t('pillars.p3_title')}</h3>
          <p>{t('pillars.p3_desc')}</p>
          <ul className="pillar-list">
            <li>✓ <strong>Conexão Suécia:</strong> Sistema Solar + Internet Starlink instalada.</li>
            <li>✓ <strong>Curso de Informática:</strong> Formação com o Prof. Alfa Djaló.</li>
            <li>✓ <strong>Rádio Voz de Paz:</strong> FM 107.7 MHz com o programa 'Betel no Ar'.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}
