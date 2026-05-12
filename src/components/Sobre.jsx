import { motion } from 'framer-motion';

export function Sobre() {
  return (
    <section className="section" id="sobre">
      <div className="container sobre__grid">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section__tag">Sobre</span>
          <h2 className="sobre__title">ReciclaMack — foco em REEE</h2>
          <p>
            O <strong>ReciclaMack</strong> é uma iniciativa da{' '}
            <strong>Universidade Presbiteriana Mackenzie</strong> voltada à conscientização sobre o descarte correto de resíduos eletrônicos.  A plataforma reúne informações sobre as linhas de descarte, orientações de armazenamento e pontos de coleta em São Paulo
          </p>
          <div className="sobre__values">
            <div className="value-item">
              <span className="value-icon" aria-hidden>
                🧪
              </span>
              <div>
                <h4>Responsabilidade</h4>
                <p>Equipamentos eletrônicos possuem componentes que exigem descarte adequado. Nada de lixo comum!  </p>
              </div>
            </div>
            <div className="value-item">
              <span className="value-icon" aria-hidden>
                🗺️
              </span>
              <div>
                <h4>Praticidade</h4>
                <p>Encontre rapidamente pontos de coleta e informações sobre cada categoria de resíduo eletrônico.  </p>
              </div>
            </div>
            <div className="value-item">
              <span className="value-icon" aria-hidden>
                🎓
              </span>
              <div>
                <h4>Comunidade</h4>
                <p>Conscientização ambiental começa com informação acessível e participação coletiva.</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="sobre__img"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <img
            src="/img-lixo-reciclavel-sobre.jpg"
            alt="Mãos segurando folhas jovens — sustentabilidade e cuidado ambiental"
            width={900}
            height={720}
          />
        </motion.div>
      </div>
    </section>
  );
}
