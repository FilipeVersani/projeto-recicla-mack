import { motion } from 'framer-motion';
import { AnimatedStat } from './AnimatedStat.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.09 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

/** Fundo: pilha / descarte de eletrônicos */
const BANNER_BG =
  'https://images.unsplash.com/photo-1525547719571-d2bd28e6a0d6?w=1920&h=1080&fit=crop&q=85';

/** Painel lateral: placas e componentes eletrônicos */
const PANEL_IMG = `${import.meta.env.BASE_URL}images/img-banner-texto.webp`;

export function Hero() {
  return (
    <section className="hero hero--immersive" id="inicio">
      <motion.div
        className="hero__bg"
        style={{ backgroundImage: `url(${BANNER_BG})` }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      />
      <div className="hero__overlay" aria-hidden />
      <motion.div
        className="hero__blobs"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <span className="hero__blob hero__blob--a" />
        <span className="hero__blob hero__blob--b" />
      </motion.div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.span
            className="hero__badge"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            ♻️ Lixo eletrônico · Logística reversa
          </motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}>
            Descarte eletrônico consciente.
            <br />
            <span className="hero__highlight">Uma cidade mais limpa.</span>
          </motion.h1>

          <motion.div
            className="hero__reee"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            <p className="hero__reee-title">
              <abbr title="Resíduos de Equipamentos Elétricos e Eletrônicos">REEE</abbr> — o que significa?
            </p>
            <p className="hero__reee-text">
              <strong>Resíduos de Equipamentos Elétricos e Eletrônicos</strong>: REEE são resíduos de equipamentos elétricos e eletrônicos que deixaram de funcionar ou não têm mais utilidade. Esses materiais não devem ir para o lixo comum, mas precisam de coleta e reciclagem adequadas para evitar impactos ambientais.
            </p>
          </motion.div>

          <motion.p className="hero__lead" variants={fadeUp} initial="hidden" animate="show" custom={3}>
            Conheça as categorias do lixo eletrônico, veja exemplos de equipamentos e utilize nosso mapa para conhecer o ecoponto mais próximo de você. 
          </motion.p>

          <motion.div className="hero__cta" variants={fadeUp} initial="hidden" animate="show" custom={4}>
            <motion.a
              href="#linhas"
              className="btn btn--primary btn--lg"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explorar linhas
            </motion.a>
            <motion.a
              href="#coleta"
              className="btn btn--ghost-light btn--lg"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver mapa completo
            </motion.a>
          </motion.div>

          <motion.div className="hero__stats" variants={fadeUp} initial="hidden" animate="show" custom={5}>
            <AnimatedStat value={5} label="linhas de REEE" delay={400} />
            <AnimatedStat value={20} suffix="+" label="pontos em SP" delay={550} />
            <AnimatedStat value={1} label="mapa integrado" delay={700} />
          </motion.div>
        </div>

        <motion.div
          className="hero__panel"
          initial={{ opacity: 0, x: 36, rotateY: -8 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__panel-inner">
            <img
              src={PANEL_IMG}
              alt="Placas de circuito e componentes eletrônicos — REEE exige descarte especializado"
              width={720}
              height={560}
            />
            <div className="hero__panel-caption">
              <span className="hero__panel-tag">Impacto real</span>
              <p>
               O descarte incorreto de eletrônicos pode <strong>contaminar o solo e a água com substâncias tóxicas</strong>. Destinar esses resíduos corretamente ajuda a proteger o meio ambiente e a saúde da população.  
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="hero__wave" aria-hidden>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
