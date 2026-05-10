import { useState } from 'react';
import { motion } from 'framer-motion';
import { linhasReee } from '../data/lines.js';
import { LinhaCard } from './LinhaCard.jsx';

export function LinhasSection() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((cur) => (cur === id ? null : id));
  };

  return (
    <section className="section section--muted" id="linhas">
      <div className="container">
        <motion.div
          className="section__head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section__tag">Linhas de cor</span>
          <h2>As 5 linhas do lixo eletrônico (REEE)</h2>
          <p>
            Organize o descarte por tipo de equipamento — da linha branca à laranja. Abra um card por vez para ver fotos
            alinhadas ao tema, dicas de armazenamento e destino correto (logística reversa / Recicla Sampa).
          </p>
        </motion.div>

        <div className="linhas__grid">
          {linhasReee.map((linha, i) => (
            <LinhaCard
              key={linha.id}
              linha={linha}
              index={i}
              isOpen={openId === linha.id}
              onToggle={toggle}
            />
          ))}
        </div>

        <motion.div
          className="armazenamento"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h3>Fluxo rápido antes de levar ao ecoponto</h3>
          <div className="armazenamento__steps">
            <motion.div
              className="step"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              <div className="step__num">1</div>
              <h4>Apague dados</h4>
              <p>Celulares, notebooks e HDs: reset e backup. Retire SIM e mídias.</p>
            </motion.div>
            <motion.div className="step" whileHover={{ scale: 1.02, y: -2 }}>
              <div className="step__num">2</div>
              <h4>Separe pilhas</h4>
              <p>Baterias soltas vão para recipiente da linha laranja — não misture com o aparelho na mesma sacola.</p>
            </motion.div>
            <motion.div className="step" whileHover={{ scale: 1.02, y: -2 }}>
              <div className="step__num">3</div>
              <h4>Local seco</h4>
              <p>Evite umidade e fontes de calor. Grandes volumes: não empilhe de forma instável.</p>
            </motion.div>
            <motion.div className="step" whileHover={{ scale: 1.02, y: -2 }}>
              <div className="step__num">4</div>
              <h4>Ponto credenciado</h4>
              <p>Use o mapa em toda a capital; o campus Mackenzie aparece em destaque.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
