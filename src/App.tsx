const impactStats = [
  { value: '842+', label: 'Alunos alcançados' },
  { value: '15+', label: 'Anos de missão' },
  { value: '91', label: 'Tabancas atendidas' },
  { value: '100+', label: 'Famílias acompanhadas' },
]

const projects = [
  { icon: '🏫', title: 'Escola Betel', text: 'Educação básica cristã e formação integral para crianças e adolescentes.' },
  { icon: '🏠', title: 'Casa do Estudante', text: 'Moradia segura para alunos que vivem longe e querem continuar estudando.' },
  { icon: '📻', title: 'Rádio Voz de Paz', text: 'Comunicação comunitária com informação, orientação e esperança.' },
  { icon: '💧', title: 'Água Potável', text: 'Acesso à água limpa para proteger saúde, tempo e dignidade das famílias.' },
  { icon: '💻', title: 'Inclusão Digital', text: 'Tecnologia como ponte para aprendizagem, trabalho e novas oportunidades.' },
  { icon: '⚽', title: 'Ginásio Poliesportivo', text: 'Esporte, convivência e desenvolvimento saudável para toda a comunidade.' },
]

const participation = [
  'Tornar-se mantenedor',
  'Adotar um aluno',
  'Financiar um projeto',
  'Ser voluntário',
  'Orar pela missão',
  'Mobilizar sua igreja',
]

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AAEGB - início">
          <span className="brand-mark">A</span>
          <span>AAEGB</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#impacto">Impacto</a>
          <a href="#transparencia">Transparência</a>
          <a className="nav-cta" href="#participar">Ser parceiro</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="Apresentação da AAEGB">
          <div className="hero-media">
            <img
              src="/site-amigos-escolas/images/capa-hero.svg"
              alt="Crianças da Escola Betel reunidas em Cacine"
              loading="eager"
            />
            <div className="hero-overlay" />
          </div>

          <div className="hero-inner">
            <div className="hero-kicker">
              <span />
              <p>Cacine · Guiné-Bissau · Desde 2009</p>
            </div>

            <h1>
              <span>A educação é a semente.</span>
              <strong>O futuro é a colheita.</strong>
            </h1>

            <p className="hero-lead">
              Há 15 anos transformamos o Sul da Guiné-Bissau com educação, moradia, água potável
              e tecnologia — para que o <strong>Povo Nalu</strong> e comunidades vizinhas construam o próprio futuro.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="mailto:contato@aaegb.org">Financiar um projeto</a>
              <a className="button secondary" href="#projetos">Ver nossos projetos →</a>
            </div>

            <div className="hero-stats" id="impacto" aria-label="Indicadores de autoridade">
              {impactStats.map((stat) => (
                <article key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projetos">
          <div className="section-heading">
            <p className="eyebrow">Muito mais que uma escola</p>
            <h2>Uma plataforma de desenvolvimento comunitário.</h2>
            <p>
              A Escola Betel é o coração da missão, mas o impacto cresce quando cada projeto remove
              uma barreira concreta para estudar, viver com saúde e sonhar com o futuro.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span>{project.icon}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="map-section section-grid">
          <div>
            <p className="eyebrow">Mapa de atuação</p>
            <h2>Presença real no território.</h2>
            <p>
              Parceiros financiam ações com lastro local: uma missão inserida na Guiné-Bissau,
              conectada à Região de Tombali e comprometida com o Setor de Cacine.
            </p>
          </div>
          <ol className="territory-path" aria-label="Caminho territorial da atuação">
            <li>Guiné-Bissau</li>
            <li>Região de Tombali</li>
            <li>Setor de Cacine</li>
            <li>91 tabancas alcançadas</li>
          </ol>
        </section>

        <section className="story-section">
          <p className="eyebrow">Histórias reais</p>
          <blockquote>
            “Eu caminhava três horas para estudar. Hoje moro na Casa do Estudante e sonho em ser professor.”
          </blockquote>
          <p>
            Cada parceria encurta distâncias, protege sonhos e multiplica lideranças que permanecem
            servindo suas próprias comunidades.
          </p>
        </section>

        <section className="transparency section-grid" id="transparencia">
          <div>
            <p className="eyebrow">100% transparência</p>
            <h2>Confiança para parceiros, empresas, igrejas e fundações.</h2>
            <p>
              A prestação de contas deve ser simples de entender e fácil de acompanhar, com relatórios,
              fotos de campo, indicadores e evidências do uso responsável dos recursos.
            </p>
          </div>
          <ul className="check-list">
            <li>Relatórios e prestação de contas</li>
            <li>Fotos de campo e indicadores</li>
            <li>Atualização de metas por projeto</li>
            <li>Relacionamento com parceiros institucionais</li>
          </ul>
        </section>

        <section className="campaign">
          <div>
            <p className="eyebrow">Projeto em destaque</p>
            <h2>Ginásio Poliesportivo</h2>
            <p>
              Um espaço para esporte, convivência e formação integral, ampliando o alcance da escola
              para jovens, famílias e comunidades vizinhas.
            </p>
          </div>
          <div className="progress-card">
            <div className="progress-meta">
              <span>Meta</span>
              <strong>R$ 1.591.039</strong>
            </div>
            <div className="progress-track" aria-label="Progresso de arrecadação em atualização">
              <span style={{ width: '32%' }} />
            </div>
            <p>Arrecadação em atualização. Fale conosco para receber o status completo da campanha.</p>
          </div>
        </section>

        <section className="section" id="participar">
          <div className="section-heading">
            <p className="eyebrow">Como participar</p>
            <h2>Escolha a melhor forma de caminhar com Cacine.</h2>
          </div>
          <div className="participation-grid">
            {participation.map((item) => (
              <a href="mailto:contato@aaegb.org" key={item}>{item}</a>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <h2>O próximo capítulo desta história pode começar com você.</h2>
          <a className="button primary" href="mailto:contato@aaegb.org">Quero ser parceiro</a>
        </section>
      </main>
    </>
  )
}

export default App
