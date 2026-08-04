import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface LocationPin {
  id: string
  name: string
  region: string
  x: number // percentage
  y: number // percentage
  description: string
  status: string
}

const MAP_LOCATIONS: LocationPin[] = [
  {
    id: 'cacine',
    name: 'Setor de Cacine',
    region: 'Região de Tombali',
    x: 68,
    y: 78,
    description: 'Sede da Escola Betel, Casa do Estudante, Rádio Voz de Paz e centro de operações.',
    status: 'Core Mission Center',
  },
  {
    id: 'tombali',
    name: 'Região de Tombali',
    region: 'Sul da Guiné-Bissau',
    x: 60,
    y: 70,
    description: '91 tabancas (aldeias) atendidas com poços de água potável e formação de professores.',
    status: '91 Tabancas',
  },
  {
    id: 'buba',
    name: 'Buba & Quebo',
    region: 'Conexão Logística',
    x: 52,
    y: 55,
    description: 'Rota de transporte de materiais escolares, suprimentos sanitários e combustíveis.',
    status: 'Rota Logística',
  },
  {
    id: 'bissau',
    name: 'Bissau (Capital)',
    region: 'Parcerias Institucionais',
    x: 32,
    y: 35,
    description: 'Conexão com ministérios da educação, embaixadas e logística de importação.',
    status: 'Capital & Apoio',
  },
]

export function InteractiveMap() {
  const { t } = useTranslation()
  const [activePin, setActivePin] = useState<LocationPin>(MAP_LOCATIONS[0])
  const territoryItems = t('map.territory', { returnObjects: true }) as string[]

  return (
    <div className="interactive-map-wrapper">
      <div className="map-card-container">
        {/* Visual Map Canvas */}
        <div className="map-visual-area">
          <div className="map-bg-grid" />

          {/* SVG Map Illustration representation of Guinea-Bissau coast */}
          <svg className="map-svg-shape" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M 10 20 Q 30 10 50 25 T 80 40 Q 95 65 75 90 T 40 85 Q 20 70 10 50 Z"
              fill="rgba(23, 79, 63, 0.28)"
              stroke="rgba(233, 175, 63, 0.4)"
              strokeWidth="0.8"
              strokeDasharray="2 2"
            />
          </svg>

          {/* Location Pins */}
          {MAP_LOCATIONS.map((pin) => (
            <button
              key={pin.id}
              className={`map-pin-btn ${activePin.id === pin.id ? 'active' : ''}`}
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              onClick={() => setActivePin(pin)}
              aria-label={`Ver detalhes de ${pin.name}`}
            >
              <span className="pin-pulse" />
              <span className="pin-dot">📍</span>
              <span className="pin-label">{pin.name}</span>
            </button>
          ))}

          {/* Active Location Details Popup */}
          <div className="map-info-popup">
            <div className="popup-badge">{activePin.status}</div>
            <h4>{activePin.name}</h4>
            <p className="popup-region">{activePin.region}</p>
            <p className="popup-desc">{activePin.description}</p>
          </div>
        </div>
      </div>

      {/* Ordered Timeline Items (01 - 04) Below Map */}
      <ol className="territory-path" aria-label="Caminho territorial da atuação">
        {territoryItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  )
}
