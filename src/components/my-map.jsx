import React, { useEffect } from 'react';
import './my-map.scss';
import L from 'leaflet';

function MyMap(props) {
  let mapContainer;

  useEffect(() => {
    const initialState = {
      lng: props.lng,
      lat: props.lat,
      zoom: 10
    };

    const map = L.map(mapContainer).setView([initialState.lat, initialState.lng], initialState.zoom);

    var myAPIKey = '43e8953f5a0640dd8fc416b83ed3d7c9';

    var isRetina = L.Browser.retina;
    var baseUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
    var retinaUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";

    L.tileLayer(isRetina ? retinaUrl : baseUrl, {
      attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>',
      apiKey: myAPIKey,
      maxZoom: 20,
      id: 'osm-bright',
    }).addTo(map);

  }, [mapContainer]);

  return (
    <div className="map-container" ref={el => mapContainer = el}>
    </div>
  )
}

export default MyMap;