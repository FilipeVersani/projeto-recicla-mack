export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#inicio" className="header__logo" style={{ color: '#f8fafc' }}>
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden>
              <path
                d="M14 2L4 8v6c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V8L14 2z"
                fill="#22d3ee"
                opacity="0.35"
              />
              <path
                d="M10 14l3 3 6-6"
                stroke="#67e8f9"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>ReciclaMack</span>
          </a>
          <p>Lixo eletrônico com destino certo — informação clara para a comunidade Mackenzie e São Paulo.</p>
        </div>
        <div className="footer__links">
          <h5>Navegação</h5>
          <a href="#inicio">Início</a>
          <a href="#linhas">Linhas REEE</a>
          <a href="#video-reee">Vídeo</a>
          <a href="#coleta">Mapa</a>
          <a href="#sobre">Sobre</a>
        </div>
        <div className="footer__links">
          <h5>Linhas</h5>
          <a href="#linhas">Branca · Marrom</a>
          <a href="#linhas">Azul · Verde</a>
          <a href="#linhas">Laranja</a>
        </div>
        <div className="footer__links">
          <h5>Contato</h5>
          <p>
            📍 Rua da Consolação, 930
            <br />
            Higienópolis, São Paulo — SP
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} ReciclaMack — Universidade Presbiteriana Mackenzie</p>
      </div>
    </footer>
  );
}
