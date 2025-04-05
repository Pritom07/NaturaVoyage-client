import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = () => {
  const markers = [
    {
      geocode: [23.685, 90.3563],
      popup: "Bangladesh",
    },
    {
      geocode: [15.87, 100.9925],
      popup: "Thailand",
    },
    {
      geocode: [-0.7893, 113.9213],
      popup: "Indonesia",
    },
    {
      geocode: [4.2105, 101.9758],
      popup: "Malaysia",
    },
    {
      geocode: [14.0583, 108.2772],
      popup: "Vietnam",
    },
    {
      geocode: [12.5657, 104.991],
      popup: "Cambodia",
    },
  ];

  return (
    <div>
      <MapContainer center={[15, 105]} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, idx) => (
          <Marker key={idx} position={marker.geocode}>
            <Popup>{marker.popup}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
