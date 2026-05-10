import { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { pontosColeta, regioes } from '../data/pontos.js';
import { ColetaMap } from './ColetaMap.jsx';

export function ColetaSection() {
  const [region, setRegion] = useState('all');
  const [search, setSearch] = useState('');
  const [activeId, setActiveId] = useState(1);

  const filtered = useMemo(() => {
    return pontosColeta.filter((p) => {
      const okRegion = region === 'all' || p.region === region;
      const q = search.trim().toLowerCase();
      const okSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q) ||
        p.types.some((t) => t.toLowerCase().includes(q));
      return okRegion && okSearch;
    });
  }, [region, search]);

  const fitCity = region === 'all' && !search.trim();

  useEffect(() => {
    setActiveId((prev) => {
      if (filtered.some((p) => p.id === prev)) return prev;
      const mack = filtered.find((p) => p.mackenzie);
      return mack?.id ?? filtered[0]?.id ?? null;
    });
  }, [filtered]);

  return (
    <section className="coleta" id="coleta">
      <div className="container">
        <motion.div
          className="section__head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section__tag">Onde descartar</span>
          <h2>Pontos de recebimento em São Paulo</h2>
          <p>
            Visualização pensada para <strong>toda a capital</strong>: Norte, Sul, Leste, Oeste e Centro.
          </p>
        </motion.div>

        <div className="coleta__layout">
          <aside className="coleta__sidebar">
            <div className="coleta__search">
              <span aria-hidden>🔍</span>
              <input
                type="search"
                placeholder="Bairro, endereço ou tipo de REEE..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Buscar pontos de coleta"
              />
            </div>
            <div>
              <p className="filter-label">Região</p>
              <div className="filter-btns">
                {regioes.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    className={`filter-btn${region === r.id ? ' active' : ''}`}
                    onClick={() => setRegion(r.id)}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="coleta__list" role="list">
              {filtered.map((p) => (
                <motion.button
                  key={p.id}
                  type="button"
                  className={`ponto-item${p.mackenzie ? ' mackenzie' : ''}${p.id === activeId ? ' active' : ''}`}
                  onClick={() => setActiveId(p.id)}
                  layout
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="ponto-item__row">
                    <span className="ponto-item__name">{p.name}</span>
                    {p.mackenzie ? (
                      <span className="ponto-item__badge badge--mackenzie">★ Mackenzie</span>
                    ) : (
                      <span className="ponto-item__badge badge--ecoponto">Ecoponto / parceiro</span>
                    )}
                  </div>
                  <div className="ponto-item__addr">📍 {p.address}</div>
                  <div className="ponto-item__addr">🕐 {p.hours}</div>
                  <div className="ponto-item__types">
                    {p.types.map((t) => (
                      <span key={t} className="type-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.button>
              ))}
              {filtered.length === 0 ? (
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 16 }}>Nenhum ponto encontrado.</p>
              ) : null}
            </div>
          </aside>

          <div className="coleta__map-wrap" id="map-root">
            <ColetaMap
              points={filtered}
              activeId={activeId}
              onMarkerClick={setActiveId}
              fitCity={fitCity}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
