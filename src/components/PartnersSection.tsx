import { useTranslation } from 'react-i18next'

const PARTNERS_LIST = [
  { flag: '🇧🇷', name: 'Brasil', role: 'Apoio Institucional & Associação Mãos Que Compartilham' },
  { flag: '🇵🇹', name: 'Ser Mais Valia (Portugal)', role: 'Envio de Voluntários Especializados & Capacitação da Equipe Nacional' },
  { flag: '🇭🇺', name: 'Hungria', role: 'Financiamento da Construção do Ginásio Poliesportivo' },
  { flag: '🇸🇪', name: 'Suécia', role: 'Internet Starlink, Energia Solar & Consultas Médicas' },
  { flag: '🇵🇹', name: 'Portugal (Mundo a Sorrir)', role: 'Atendimento Odontológico & Saúde Preventiva' },
  { flag: '🇨🇦', name: 'Canadá', role: 'Apadrinhamento de Alunos & Anuidade Escolar' },
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
        {PARTNERS_LIST.map((partner) => (
          <div key={partner.name} className="partner-country-card">
            <span className="partner-flag">{partner.flag}</span>
            <strong className="partner-name">{partner.name}</strong>
            <span className="partner-role">{partner.role}</span>
          </div>
        ))}
      </div>

      <div className="partner-notice-box text-center mt-6">
        <span className="notice-icon">🤝</span>
        <p>{t('partners.volunteer_emphasis')}</p>
      </div>
    </section>
  )
}

