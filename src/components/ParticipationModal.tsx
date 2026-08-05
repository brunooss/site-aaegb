import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export type ParticipationType = 'maintainer' | 'student' | 'fund' | 'volunteer' | 'pray' | 'mobilize' | null

interface Props {
  activeType: ParticipationType
  onClose: () => void
}

export function ParticipationModal({ activeType, onClose }: Props) {
  const { t } = useTranslation()

  // Form states
  const [amount, setAmount] = useState<number | string>(100)
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null)

  useEffect(() => {
    if (activeType) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeType])

  if (!activeType) return null

  const handleFormSubmit = (e: React.FormEvent, successMsg: string) => {
    e.preventDefault()
    setSubmittedMessage(successMsg)
    setTimeout(() => {
      setSubmittedMessage(null)
      onClose()
    }, 2800)
  }

  const renderContent = () => {
    if (submittedMessage) {
      return (
        <div className="modal-success-state">
          <span className="success-icon">✓</span>
          <h3>{submittedMessage}</h3>
          <p>Obrigado por apoiar a missão da AAEGB no Setor de Cacine!</p>
        </div>
      )
    }

    switch (activeType) {
      case 'maintainer':
        return (
          <div className="modal-body-content">
            <h3>{t('modals.maintainer.title')}</h3>
            <p>{t('modals.maintainer.text')}</p>

            <div className="subscription-options">
              <div className="sub-card">
                <strong>Mantenedor Bronze</strong>
                <span className="price">R$ 50 / mês</span>
                <p>Alimenta 1 aluno por todo o mês letivo</p>
              </div>
              <div className="sub-card active">
                <strong>Mantenedor Prata</strong>
                <span className="price">R$ 150 / mês</span>
                <p>Garante educação, uniforme e saúde de 1 aluno</p>
              </div>
              <div className="sub-card">
                <strong>Mantenedor Ouro</strong>
                <span className="price">R$ 300 / mês</span>
                <p>Apoia a manutenção de poço artesiano e energia solar</p>
              </div>
            </div>

            <a
              href="mailto:contato@aaegb.org?subject=Quero%20ser%20Mantenedor%20Recorrente"
              className="button primary full-width"
            >
              {t('modals.maintainer.cta')}
            </a>
          </div>
        )

      case 'student': {
        const impactItems = t('modals.student.impact_items', { returnObjects: true }) as string[]
        return (
          <div className="modal-body-content">
            <h3>{t('modals.student.title')}</h3>

            <div className="student-benefit-box">
              <h4>{t('modals.student.impact_title')}</h4>
              <ul>
                {impactItems.map((item, idx) => (
                  <li key={idx}>✓ {item}</li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={(e) =>
                handleFormSubmit(e, 'Sua pré-inscrição de adoção foi enviada com sucesso!')
              }
              className="modal-form"
            >
              <h4>{t('modals.student.form_title')}</h4>
              <div className="form-group">
                <label>{t('modals.student.name')}</label>
                <input type="text" required placeholder="Seu nome" />
              </div>
              <div className="form-group">
                <label>{t('modals.student.email')}</label>
                <input type="email" required placeholder="seuemail@exemplo.com" />
              </div>
              <button type="submit" className="button primary full-width">
                {t('modals.student.submit')}
              </button>
            </form>
          </div>
        )
      }

      case 'fund':
        return (
          <div className="modal-body-content">
            <h3>{t('modals.fund.title')}</h3>
            <p className="fund-disclaimer">{t('modals.fund.subtitle')}</p>

            <div className="amount-selector">
              {[50, 100, 250, 500].map((val) => (
                <button
                  key={val}
                  type="button"
                  className={`amount-btn ${amount === val ? 'active' : ''}`}
                  onClick={() => setAmount(val)}
                >
                  R$ {val}
                </button>
              ))}
            </div>

            <div className="pix-info-card">
              <strong>{t('modals.fund.pix_title')}</strong>
              <div className="bank-details-grid">
                <div><strong>PIX (CNPJ):</strong> <code>37.747.064/0001-60</code></div>
                <div><strong>Instituição:</strong> 403 - Cora SCFI</div>
                <div><strong>Agência:</strong> 0001 | <strong>Conta:</strong> 6056291-9</div>
                <div><strong>Razão Social:</strong> Associação Mãos Que Compartilham</div>
              </div>
              <button
                type="button"
                className="button secondary copy-pix-btn mt-3"
                onClick={() => {
                  navigator.clipboard.writeText('37.747.064/0001-60')
                  alert('Chave PIX (37.747.064/0001-60) copiada com sucesso!')
                }}
              >
                📋 Copiar Chave PIX
              </button>
            </div>

            <a
              href={`mailto:aaegbbetelcacine@gmail.com?subject=Apoio%20Fundo%20Voluntariado%20de%20R$%20${amount}`}
              className="button primary full-width"
            >
              {t('modals.fund.cta')}
            </a>
          </div>
        )

      case 'volunteer':
        return (
          <div className="modal-body-content">
            <span className="priority-badge mb-2">⭐ MAIOR NECESSIDADE</span>
            <h3>{t('modals.volunteer.title')}</h3>
            <p>{t('modals.volunteer.desc')}</p>

            <form
              onSubmit={(e) =>
                handleFormSubmit(e, 'Candidatura enviada! Nossa equipe entrará em contato em breve para alinhar o voluntariado e capacitação.')
              }
              className="modal-form"
            >
              <div className="form-group">
                <label>{t('modals.volunteer.name')}</label>
                <input type="text" required placeholder="Seu nome completo" />
              </div>
              <div className="form-group">
                <label>{t('modals.volunteer.email')}</label>
                <input type="email" required placeholder="seu@email.com" />
              </div>
              <div className="form-group">
                <label>{t('modals.volunteer.phone')}</label>
                <input type="tel" required placeholder="(11) 99999-9999" />
              </div>
              <div className="form-group">
                <label>{t('modals.volunteer.area')}</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Capacitação Pedagógica, Informática, Saúde, Gestão..."
                />
              </div>
              <button type="submit" className="button primary full-width">
                {t('modals.volunteer.submit')}
              </button>
            </form>
          </div>
        )

      case 'pray': {
        const prayerTopics = t('modals.pray.topics', { returnObjects: true }) as string[]
        return (
          <div className="modal-body-content">
            <h3>{t('modals.pray.title')}</h3>
            <p className="gratitude-text">{t('modals.pray.gratitude')}</p>

            <div className="prayer-topics-box">
              <h4>{t('modals.pray.topics_title')}</h4>
              <ul>
                {prayerTopics.map((topic, idx) => (
                  <li key={idx}>🙏 {topic}</li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={(e) =>
                handleFormSubmit(e, 'Mensagem enviada com sucesso aos missionários no campo!')
              }
              className="modal-form"
            >
              <div className="form-group">
                <label>{t('modals.pray.message_label')}</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Escreva uma palavra de fé e encorajamento..."
                />
              </div>
              <button type="submit" className="button primary full-width">
                {t('modals.pray.send')}
              </button>
            </form>
          </div>
        )
      }

      case 'mobilize': {
        const resources = t('modals.mobilize.resources', { returnObjects: true }) as string[]
        return (
          <div className="modal-body-content">
            <h3>{t('modals.mobilize.title')}</h3>
            <p>{t('modals.mobilize.desc')}</p>

            <div className="church-resources-box">
              <h4>{t('modals.mobilize.resources_title')}</h4>
              <ul>
                {resources.map((res, idx) => (
                  <li key={idx}>📦 {res}</li>
                ))}
              </ul>
            </div>

            <a
              href="mailto:contato@aaegb.org?subject=Kit%20de%20Mobilizacao%20Igreja"
              className="button primary full-width"
            >
              {t('modals.mobilize.cta')}
            </a>
          </div>
        )
      }

      default:
        return null
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="participation-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label={t('modals.close')}>
          ✕
        </button>
        {renderContent()}
      </div>
    </div>
  )
}
