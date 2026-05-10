import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../ThemeContext.jsx';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const closeNav = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#inicio" className="header__logo" onClick={closeNav}>
          <svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden>
            <path
              d="M14 2L4 8v6c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V8L14 2z"
              fill="currentColor"
              opacity="0.25"
            />
            <path
              d="M10 14l3 3 6-6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>ReciclaMack</span>
        </a>

        <nav className={`nav${open ? ' open' : ''}`} id="mainNav" aria-label="Principal">
          <a href="#inicio" onClick={closeNav}>
            Início
          </a>
          <a href="#linhas" onClick={closeNav}>
            Linhas REEE
          </a>
          <a href="#video-reee" onClick={closeNav}>
            Vídeo
          </a>
          <a href="#coleta" onClick={closeNav}>
            Mapa SP
          </a>
          <a href="#sobre" onClick={closeNav}>
            Sobre
          </a>
        </nav>

        <div className="header__actions">
          <a href="#coleta" className="btn btn--header-cta" onClick={closeNav}>
            Mapa de coleta
          </a>
          <button
            type="button"
            className="theme-toggle theme-toggle--on-dark"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button
            type="button"
            className="hamburger hamburger--light"
            aria-expanded={open}
            aria-label="Abrir menu"
            onClick={() => setOpen((o) => !o)}
          >
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} />
            <motion.span animate={{ opacity: open ? 0 : 1 }} />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="header__mobile-cta"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container">
              <a href="#coleta" className="btn btn--header-cta btn--block" onClick={closeNav}>
                Ir para o mapa de coleta
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
