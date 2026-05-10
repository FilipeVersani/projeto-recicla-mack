import { useEffect, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { boundsGrandeSP } from '../data/pontos.js';

function divIcon(mackenzie) {
  const s = mackenzie ? 42 : 32;
  return L.divIcon({
    className: 'custom-pin',
    html: `<div class="pin-inner${mackenzie ? ' pin-mack' : ''}"></div>`,
    iconSize: [s, s],
    iconAnchor: [s / 2, s],
    popupAnchor: [0, -s + 6],
  });
}

function FitBounds({ points, fitCity }) {
  const map = useMap();
  useEffect(() => {
    if (!points.length) return;

    if (fitCity) {
      const b = L.latLngBounds(boundsGrandeSP.southWest, boundsGrandeSP.northEast);
      map.fitBounds(b, { padding: [28, 28], maxZoom: 11, animate: true });
      return;
    }

    if (points.length === 1) {
      map.setView([points[0].lat, points[0].lng], 14);
      return;
    }
    const b = L.latLngBounds(points.map((p) => [p.lat, p.lng]));
    map.fitBounds(b, { padding: [52, 52], maxZoom: 14 });
  }, [map, points, fitCity]);
  return null;
}

function FlyToSelection({ activeId, points }) {
  const map = useMap();
  useEffect(() => {
    if (activeId == null) return;
    const p = points.find((x) => x.id === activeId);
    if (!p) return;
    map.flyTo([p.lat, p.lng], 15, { duration: 0.65 });
  }, [activeId, map, points]);
  return null;
}

function PopupBody({ p }) {
  return (
    <div className="map-popup">
      <h4>
        {p.name}
        {p.mackenzie ? <span className="map-popup__badge">★ Mackenzie</span> : null}
      </h4>
      <p>📍 {p.address}</p>
      <p>📞 {p.phone}</p>
      <p>🕐 {p.hours}</p>
      <div className="types">
        {p.types.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ColetaMap({ points, activeId, onMarkerClick, fitCity }) {
  const markerRefs = useRef({});

  const center = useMemo(() => {
    const mack = points.find((p) => p.mackenzie);
    if (mack) return [mack.lat, mack.lng];
    if (!points.length) return [-23.55, -46.63];
    const avgLat = points.reduce((a, p) => a + p.lat, 0) / points.length;
    const avgLng = points.reduce((a, p) => a + p.lng, 0) / points.length;
    return [avgLat, avgLng];
  }, [points]);

  useEffect(() => {
    if (activeId == null) return;
    const m = markerRefs.current[activeId];
    if (m) m.openPopup();
  }, [activeId, points]);

  useEffect(() => {
    const t = setTimeout(() => {
      const mack = points.find((p) => p.mackenzie);
      if (mack && markerRefs.current[mack.id]) {
        markerRefs.current[mack.id].openPopup();
      }
    }, 900);
    return () => clearTimeout(t);
  }, [points, fitCity]);

  return (
    <MapContainer center={center} zoom={11} scrollWheelZoom style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitBounds points={points} fitCity={fitCity} />
      <FlyToSelection activeId={activeId} points={points} />
      {points.map((p) => (
        <Marker
          key={p.id}
          position={[p.lat, p.lng]}
          icon={divIcon(p.mackenzie)}
          ref={(ref) => {
            if (ref) markerRefs.current[p.id] = ref;
          }}
          eventHandlers={{
            click: () => onMarkerClick?.(p.id),
          }}
        >
          <Popup>
            <PopupBody p={p} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
