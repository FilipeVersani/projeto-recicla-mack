import { AnimatePresence, motion } from 'framer-motion';

export function LinhaCard({ linha, index, isOpen, onToggle }) {
  return (
    <motion.article
      className={`linha-card${isOpen ? ' open' : ''}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <button
        type="button"
        className="linha-card__top"
        onClick={() => onToggle(linha.id)}
        aria-expanded={isOpen}
        aria-controls={`painel-linha-${linha.id}`}
        id={`cabecalho-linha-${linha.id}`}
      >
        <span
          className="linha-card__icon-box"
          style={{ background: `linear-gradient(145deg, ${linha.cor}, ${linha.corAccent})` }}
          aria-hidden
        >
          <span className="linha-card__emoji">{linha.emoji}</span>
        </span>
        <div className="linha-card__title">
          <h3>{linha.nome}</h3>
          <p>{linha.resumo}</p>
        </div>
        <svg className="linha-card__chev" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence initial={false} mode="sync">
        {isOpen ? (
          <motion.div
            key="body"
            id={`painel-linha-${linha.id}`}
            role="region"
            aria-labelledby={`cabecalho-linha-${linha.id}`}
            className="linha-card__body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="linha-card__inner">
              <div className="linha-card__gallery">
                {linha.imagens.map((item, i) => {
                  const label = item.categoria ?? item.alt ?? 'Categoria';
                  const altImg = `${linha.nome} — ${label}`;
                  return (
                    <motion.figure
                      key={`${linha.id}-${i}-${label}`}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * i, duration: 0.35 }}
                    >
                      <motion.img
                        src={item.src}
                        alt={altImg}
                        loading="lazy"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                      />
                      <figcaption className="linha-card__categoria">{label}</figcaption>
                    </motion.figure>
                  );
                })}
              </div>

              <div className="linha-card__cols">
                <div>
                  <h4>Exemplos</h4>
                  <ul>
                    {linha.exemplos.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Como armazenar</h4>
                  <ul>
                    {linha.armazenar.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Como descartar</h4>
                  <ul>
                    {linha.descartar.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.div
                className="linha-card__tip"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <strong>Evite:</strong> {linha.evitar.join(' · ')}
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}
