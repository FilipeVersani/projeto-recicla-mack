import { useEffect, useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { videoReee } from '../data/video.js';

export function VideoReeeSection() {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <section className="video-reee section section--muted" id="video-reee" aria-labelledby={titleId}>
      <div className="container">
        <div className="video-reee__inner">
          <div className="video-reee__copy">
            <span className="section__tag">Em vídeo</span>
            <h2 id={titleId}>Por que o descarte correto importa?</h2>
            <p className="video-reee__lead">
              Veja um vídeo curto sobre o que acontece com resíduos levados a ecopontos — o mesmo princípio vale para{' '}
              <strong>REEE</strong> e lixo eletrônico: destino certo evita poluição e desperdício de materiais.
            </p>
            <button type="button" className="btn btn--primary btn--lg video-reee__open" onClick={() => setOpen(true)}>
              ▶ Assistir vídeo
            </button>
          </div>
          <button
            type="button"
            className="video-reee__poster"
            onClick={() => setOpen(true)}
            aria-label={`Abrir vídeo: ${videoReee.title}`}
          >
            <img src={videoReee.thumbUrl} alt="" width={640} height={360} loading="lazy" />
            <span className="video-reee__poster-play" aria-hidden>
              ▶
            </span>
            <span className="video-reee__poster-cap">{videoReee.title}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="video-modal__backdrop"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="video-modal__dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="video-modal-title"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="video-modal__head">
                <h3 id="video-modal-title">{videoReee.title}</h3>
                <button
                  type="button"
                  className="video-modal__close"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar vídeo"
                >
                  ✕
                </button>
              </div>
              <p className="video-modal__blurb">{videoReee.blurb}</p>
              <div className="video-modal__frame">
                <iframe
                  title={videoReee.title}
                  src={`https://www.youtube-nocookie.com/embed/${videoReee.youtubeId}?autoplay=1&rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
