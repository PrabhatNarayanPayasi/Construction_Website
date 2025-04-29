"use client";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from  "./page.module.css";

const cities = [
  { name: "Goa", lat: 15.2993, lng: 74.124 },
  { name: "Chennai", lat: 13.0827, lng: 80.2707 },
  { name: "Lucknow", lat: 26.8467, lng: 80.9462 },
  { name: "Mumbai", lat: 19.076, lng: 72.8777 },
  { name: "Delhi", lat: 28.6139, lng: 77.209 },
];

export default function IndiaMap() {
  return (
    <div className={styles.mapWrapper}>
      <MapContainer
        center={[22.9734, 78.6569]}
        zoom={5.3}
        scrollWheelZoom={false}
        zoomControl={true}
        maxBounds={[
          [6.5, 67],
          [37.1, 98],
        ]}
        className={styles.mapContainer}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution=""
        />
        {cities.map((city, index) => (
          <CircleMarker
            key={index}
            center={[city.lat, city.lng]}
            radius={8}
            pathOptions={{ color: "blue", fillColor: "blue", fillOpacity: 0.6 }}
          >
            <Popup>{city.name}</Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
