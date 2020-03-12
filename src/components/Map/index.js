import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
export default function map({
  datas,
  nearByPlacesIds,
  long,
  lat,
  restoName,
  address
}) {
  console.log("datas in MAP=>", datas);
  /*   console.log("nearByPlacesIds=>", nearByPlacesIds); */
  const position = [lat, long];
  return (
    <div className="leaflet-container">
      <Map center={position} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <span>{restoName}</span>
            <br />
            <span>{address}</span>
          </Popup>
        </Marker>
      </Map>
    </div>
  );
}
