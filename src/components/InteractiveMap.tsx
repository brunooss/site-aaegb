import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface LocationPin {
  id: string
  name: string
  region: string
  x: number // percentage position on map
  y: number // percentage position on map
  description: string
  status: string
}

const MAP_LOCATIONS: LocationPin[] = [
  {
    id: 'cacine',
    name: 'Setor de Cacine',
    region: 'Região de Tombali (Sul)',
    x: 62,
    y: 76,
    description: 'Coração da missão AAEGB. Sede da Escola Betel, Casa do Estudante, Rádio Voz de Paz e poços de água limpa.',
    status: 'Sede Principal da Missão',
  },
  {
    id: 'tombali',
    name: 'Região de Tombali',
    region: 'Província do Sul',
    x: 52,
    y: 68,
    description: 'Atuação em 91 tabancas (comunidades rurais) com projetos de saúde, irrigação e suporte pedagógico.',
    status: '91 Tabancas Atendidas',
  },
  {
    id: 'buba',
    name: 'Buba & Quebo',
    region: 'Corredor de Logística',
    x: 44,
    y: 52,
    description: 'Ponto estratégico de transporte de materiais de construção, combustível e suprimentos escolares.',
    status: 'Rota Logística',
  },
  {
    id: 'bissau',
    name: 'Bissau (Capital)',
    region: 'Sede Institucional',
    x: 28,
    y: 38,
    description: 'Centro administrativo, desembaraço de doações internacionais e ligação com o Ministério da Educação.',
    status: 'Apoio Governamental',
  },
]

export function InteractiveMap() {
  const { t } = useTranslation()
  const [activePin, setActivePin] = useState<LocationPin>(MAP_LOCATIONS[0])
  const territoryItems = t('map.territory', { returnObjects: true }) as string[]

  return (
    <div className="interactive-map-wrapper">
      <div className="map-card-container">
        {/* Visual Real Map Area */}
        <div className="map-visual-area">
          <div className="map-grid-overlay" />

          {/* Accurate Vector Outline of Guinea-Bissau & Islands */}
          <svg className="map-svg-guinea" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="gb-land-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1b4d3e" />
                <stop offset="100%" stop-color="#0c2d22" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Ocean / Sea Background tint */}
            <rect width="400" height="300" fill="#071b14" opacity="0.4" />

            {/* Main Contour of Guinea-Bissau Territory */}
            <path
              d="M 60,70 L 110,60 L 170,55 L 240,50 L 320,55 L 370,80 L 380,120 L 360,160 L 330,190 L 290,210 L 250,245 L 220,265 L 180,240 L 150,210 L 130,225 L 100,200 L 90,170 L 110,150 L 80,130 L 60,100 Z"
              fill="url(#gb-land-grad)"
              stroke="#e9af3f"
              strokeWidth="2"
              filter="url(#glow)"
            />

            {/* Estuaries & Rivers (Geba, Corubal, Cacine rivers) */}
            <path d="M 80,130 C 130,120 180,140 230,130" stroke="#071b14" strokeWidth="6" fill="none" />
            <path d="M 100,200 C 140,190 190,200 240,190" stroke="#071b14" strokeWidth="5" fill="none" />
            <path d="M 150,210 C 180,230 210,240 250,245" stroke="#e9af3f" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />

            {/* Bijagós Archipelago Islands */}
            <circle cx="45" cy="140" r="10" fill="#1b4d3e" stroke="#e9af3f" strokeWidth="1" />
            <circle cx="35" cy="165" r="8" fill="#1b4d3e" stroke="#e9af3f" strokeWidth="1" />
            <circle cx="55" cy="180" r="12" fill="#1b4d3e" stroke="#e9af3f" strokeWidth="1" />
            <circle cx="70" cy="195" r="7" fill="#1b4d3e" stroke="#e9af3f" strokeWidth="1" />

            {/* Country Label */}
            <text x="210" y="90" fill="rgba(255,255,255,0.4)" fontSize="18" fontWeight="800" letterSpacing="4">
              GUINÉ-BISSAU
            </text>
            <text x="240" y="225" fill="#e9af3f" fontSize="13" fontWeight="800" letterSpacing="2">
              TOMBALI (CACINE)
            </text>
          </svg>

          {/* Interactive Radar Pins */}
          {MAP_LOCATIONS.map((pin) => (
            <button
              key={pin.id}
              className={`map-pin-btn ${activePin.id === pin.id ? 'active' : ''}`}
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              onClick={() => setActivePin(pin)}
              aria-label={`Selecionar ponto ${pin.name}`}
            >
              <span className="pin-pulse" />
              <span className="pin-icon">📍</span>
              <span className="pin-tag">{pin.name}</span>
            </button>
          ))}

          {/* Active Location Information Card */}
          <div className="map-info-popup">
            <div className="popup-badge">{activePin.status}</div>
            <h4>{activePin.name}</h4>
            <p className="popup-region">{activePin.region}</p>
            <p className="popup-desc">{activePin.description}</p>
          </div>
        </div>
      </div>

      {/* Ordered Timeline Steps (01 to 04) Below Map */}
      <ol className="territory-path" aria-label="Caminho territorial da atuação">
        {territoryItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  )
}
