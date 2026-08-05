import { useTranslation } from 'react-i18next'

const PARTNER_COUNTRIES = [
  { flag: '🇧🇷', name: 'Brasil', role: 'Apoio Institucional & Diretoria' },
  { flag: '🇸🇪', name: 'Suécia', role: 'Starlink, Energia Solar & Consultas Médicas' },
  { flag: '🇭🇺', name: 'Hungria', role: 'Voluntariado na Obra do Poliesportivo & Alimentação' },
  { flag: '🇵🇹', name: 'Portugal', role: 'Atendimento Odontológico (ONG Mundo a Sorrir)' },
  { flag: '🇨🇦', name: 'Canadá', role: 'Apadrinhamento de Alunos & Anuidade' },
  { flag: '🇸🇳', name: 'Senegal', role: 'Cooperação Regional & Suporte Logístico' },
]

export function PartnersSection() {
  const { t } = useTranslation()

  return (
    <section className="partners-section">
      <div className="section-heading text-center">
        <p className="eyebrow">{t('partners.eyebrow')}</p>
        <h2>{t('partners.h2')}</h2>
        <p>{t('partners.p')}</p>
      </div>

      <div className="partners-grid">
        {PARTNER_COUNTRIES.map((partner) => (
          <div key={partner.name} className="partner-country-card">
            <span className="partner-flag">{partner.flag}</span>
            <strong className="partner-name">{partner.name}</strong>
            <span className="partner-role">{partner.role}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
