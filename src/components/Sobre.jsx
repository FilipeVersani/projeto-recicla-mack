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
            <strong>Universidade Presbiteriana Mackenzie</strong> voltada à logística reversa e ao descarte correto de{' '}
            <strong>lixo eletrônico</strong>, alinhada a referências municipais e campanhas de conscientização.
          </p>
          <p>
            Esta página concentra, em uma única experiência, as cinco linhas de cor, boas práticas de armazenamento e um
            mapa com pontos na cidade de São Paulo.
          </p>
          <div className="sobre__values">
            <div className="value-item">
              <span className="value-icon" aria-hidden>
                🧪
              </span>
              <div>
                <h4>Responsabilidade</h4>
                <p>REEE contém metais e substâncias que exigem destino técnico — nada de lixo comum.</p>
              </div>
            </div>
            <div className="value-item">
              <span className="value-icon" aria-hidden>
                🗺️
              </span>
              <div>
                <h4>Praticidade</h4>
                <p>Mapa, filtros e lista sincronizados para achar rapidamente onde levar seus equipamentos.</p>
              </div>
            </div>
            <div className="value-item">
              <span className="value-icon" aria-hidden>
                🎓
              </span>
              <div>
                <h4>Comunidade</h4>
                <p>Universidade como ponte entre moradores, estudantes e políticas públicas de resíduos.</p>
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
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=900&h=720&fit=crop"
            alt="Mãos segurando folhas jovens — sustentabilidade e cuidado ambiental"
            width={900}
            height={720}
          />
        </motion.div>
      </div>
    </section>
  );
}
