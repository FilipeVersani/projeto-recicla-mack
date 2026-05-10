// ===== ACCORDION (Tipos de lixo) =====
document.querySelectorAll('.tipo-card__header').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.tipo-card');
    const isOpen = card.classList.contains('open');
    // Close all
    document.querySelectorAll('.tipo-card').forEach(c => {
      c.classList.remove('open');
      c.querySelector('.tipo-card__header').setAttribute('aria-expanded', 'false');
    });
    // Toggle clicked
    if (!isOpen) {
      card.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const mainNav   = document.getElementById('mainNav');
hamburger?.addEventListener('click', () => mainNav.classList.toggle('open'));
document.querySelectorAll('.nav-link, .header__nav .btn').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// ===== ACTIVE NAV ON SCROLL =====
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      active?.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => observer.observe(s));

// ===== COLLECTION POINTS DATA =====
const pontos = [
  {
    id: 1,
    name: 'ReciclaMack — Campus Higienópolis',
    address: 'Rua da Consolação, 930 — Higienópolis',
    region: 'higienopolis',
    lat: -23.5453,
    lng: -46.6514,
    types: ['Papel', 'Plástico', 'Metal', 'Vidro', 'Eletrônicos'],
    phone: '(11) 2114-8000',
    hours: 'Seg–Sex: 8h–18h',
    mackenzie: true,
  },
  {
    id: 2,
    name: 'Ecoponto Higienópolis',
    address: 'Av. Higienópolis, 618 — Higienópolis',
    region: 'higienopolis',
    lat: -23.5431,
    lng: -46.6551,
    types: ['Papel', 'Plástico', 'Metal', 'Vidro'],
    phone: '(11) 156',
    hours: 'Seg–Sáb: 7h–19h',
    mackenzie: false,
  },
  {
    id: 3,
    name: 'Cooperativa Recicla Perdizes',
    address: 'Rua Turiassu, 224 — Perdizes',
    region: 'perdizes',
    lat: -23.5381,
    lng: -46.6670,
    types: ['Papel', 'Plástico', 'Metal'],
    phone: '(11) 3672-4100',
    hours: 'Seg–Sex: 9h–17h',
    mackenzie: false,
  },
  {
    id: 4,
    name: 'Ecoponto Perdizes',
    address: 'Rua Ministro Godói, 310 — Perdizes',
    region: 'perdizes',
    lat: -23.5360,
    lng: -46.6720,
    types: ['Papel', 'Plástico', 'Metal', 'Vidro', 'Eletrônicos'],
    phone: '(11) 156',
    hours: 'Seg–Dom: 7h–19h',
    mackenzie: false,
  },
  {
    id: 5,
    name: 'Ecoponto Barra Funda',
    address: 'Av. Auro Soares de Moura Andrade, 430',
    region: 'barra-funda',
    lat: -23.5253,
    lng: -46.6670,
    types: ['Papel', 'Plástico', 'Metal', 'Vidro'],
    phone: '(11) 156',
    hours: 'Seg–Sáb: 7h–19h',
    mackenzie: false,
  },
  {
    id: 6,
    name: 'Ponto Verde Barra Funda',
    address: 'Rua Tagipuru, 440 — Barra Funda',
    region: 'barra-funda',
    lat: -23.5270,
    lng: -46.6600,
    types: ['Papel', 'Plástico', 'Metal'],
    phone: '(11) 3392-1122',
    hours: 'Seg–Sex: 8h–17h',
    mackenzie: false,
  },
  {
    id: 7,
    name: 'Ecoponto Vila Madalena',
    address: 'Rua Mourato Coelho, 575 — Vila Madalena',
    region: 'vila-madalena',
    lat: -23.5584,
    lng: -46.6893,
    types: ['Papel', 'Plástico', 'Metal', 'Vidro', 'Eletrônicos'],
    phone: '(11) 156',
    hours: 'Seg–Dom: 7h–19h',
    mackenzie: false,
  },
  {
    id: 8,
    name: 'Recicla Madalena',
    address: 'Rua Aspicuelta, 200 — Vila Madalena',
    region: 'vila-madalena',
    lat: -23.5551,
    lng: -46.6920,
    types: ['Papel', 'Plástico', 'Metal'],
    phone: '(11) 3031-8822',
    hours: 'Seg–Sex: 9h–17h',
    mackenzie: false,
  },
];

// ===== MAP SETUP =====
let map, markers = {}, activeId = null;

function initMap() {
  map = L.map('map', { zoomControl: true }).setView([-23.5420, -23.5420, -46.6620], 14);
  map.setView([-23.5420, -46.6620], 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(map);

  pontos.forEach(p => addMarker(p));
}

function greenIcon(isMack) {
  const color = isMack ? '#16A34A' : '#6B7280';
  const border = isMack ? '#fff' : '#E5E7EB';
  return L.divIcon({
    className: '',
    html: `<div style="
      width:${isMack ? 40 : 32}px;
      height:${isMack ? 40 : 32}px;
      background:${color};
      border:3px solid ${border};
      border-radius:50% 50% 50% 0;
      transform:rotate(-45deg);
      box-shadow:0 2px 8px rgba(0,0,0,.25);
    "></div>`,
    iconSize: [isMack ? 40 : 32, isMack ? 40 : 32],
    iconAnchor: [isMack ? 20 : 16, isMack ? 40 : 32],
    popupAnchor: [0, isMack ? -44 : -36],
  });
}

function buildPopup(p) {
  const badge = p.mackenzie
    ? `<span style="background:#DCFCE7;color:#15803D;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;">★ Mackenzie</span>`
    : '';
  return `<div class="map-popup">
    <h4>${p.name} ${badge}</h4>
    <p>📍 ${p.address}</p>
    <p>📞 ${p.phone}</p>
    <p>🕐 ${p.hours}</p>
    <div class="types">${p.types.map(t => `<span class="chip">${t}</span>`).join('')}</div>
  </div>`;
}

function addMarker(p) {
  const m = L.marker([p.lat, p.lng], { icon: greenIcon(p.mackenzie) })
    .addTo(map)
    .bindPopup(buildPopup(p), { maxWidth: 260 });
  m.on('click', () => setActive(p.id));
  markers[p.id] = m;
}

function setActive(id) {
  activeId = id;
  document.querySelectorAll('.ponto-item').forEach(el => {
    el.classList.toggle('active', parseInt(el.dataset.id) === id);
  });
  const p = pontos.find(x => x.id === id);
  if (p && markers[id]) {
    map.setView([p.lat, p.lng], 16, { animate: true });
    markers[id].openPopup();
  }
}

// ===== RENDER LIST =====
function renderList(filtered) {
  const list = document.getElementById('coletaList');
  list.innerHTML = '';
  filtered.forEach(p => {
    const el = document.createElement('div');
    el.className = `ponto-item${p.mackenzie ? ' mackenzie' : ''}${p.id === activeId ? ' active' : ''}`;
    el.dataset.id = p.id;

    const badge = p.mackenzie
      ? `<span class="ponto-item__badge badge--mackenzie">★ Mackenzie</span>`
      : `<span class="ponto-item__badge badge--ecoponto">Ecoponto</span>`;

    el.innerHTML = `
      <div class="ponto-item__header">
        <span class="ponto-item__name">${p.name}</span>
        ${badge}
      </div>
      <div class="ponto-item__addr">📍 ${p.address}</div>
      <div class="ponto-item__addr">🕐 ${p.hours}</div>
      <div class="ponto-item__types">${p.types.map(t => `<span class="type-chip">${t}</span>`).join('')}</div>
    `;
    el.addEventListener('click', () => setActive(p.id));
    list.appendChild(el);
  });

  if (filtered.length === 0) {
    list.innerHTML = '<p style="color:var(--gray-400);font-size:.88rem;text-align:center;padding:16px;">Nenhum ponto encontrado.</p>';
  }
}

// ===== FILTER LOGIC =====
let currentRegion = 'all';
let currentSearch = '';

function getFiltered() {
  return pontos.filter(p => {
    const matchRegion = currentRegion === 'all' || p.region === currentRegion;
    const q = currentSearch.toLowerCase();
    const matchSearch = !q
      || p.name.toLowerCase().includes(q)
      || p.address.toLowerCase().includes(q)
      || p.types.some(t => t.toLowerCase().includes(q));
    return matchRegion && matchSearch;
  });
}

function applyFilter() {
  const filtered = getFiltered();
  renderList(filtered);

  // Show/hide map markers
  pontos.forEach(p => {
    const inFilter = filtered.find(f => f.id === p.id);
    if (inFilter) {
      if (!map.hasLayer(markers[p.id])) markers[p.id].addTo(map);
    } else {
      if (map.hasLayer(markers[p.id]))  map.removeLayer(markers[p.id]);
    }
  });

  // Fit bounds to visible
  const visible = filtered.map(p => [p.lat, p.lng]);
  if (visible.length) map.fitBounds(visible, { padding: [40, 40], maxZoom: 16 });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentRegion = btn.dataset.region;
    applyFilter();
  });
});

document.getElementById('searchInput')?.addEventListener('input', e => {
  currentSearch = e.target.value;
  applyFilter();
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  renderList(pontos);
});
