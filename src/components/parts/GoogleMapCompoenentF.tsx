// @ts-nocheck
import {
  GoogleMap,
  useJsApiLoader,
  Polygon,
  Marker,
} from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = { lat: 33.982115336278206, lng: -6.865274188820471 }; // ESI

// const paths = [
//   // 33.982115336278206, -6.865274188820471
//   { lat: 33.982115336278206, lng: -6.865274188820471 }, // ESI
//   // 33.985145499946086, -6.859888906276693
//   { lat: 33.985145499946086, lng: -6.859888906276693 }, // Souissi I (city
//   // 33.98213072576973, -6.8710362923394195
//   { lat: 33.98213072576973, lng: -6.8710362923394195 }, // Africa Business School
//   // 33.9813300389153, -6.872763634849634
//   { lat: 33.9813300389153, lng: -6.872763634849634 }, // Bricoma Rabat
//   // 33.98089410623472, -6.8732786189520585
//   { lat: 33.98089410623472, lng: -6.8732786189520585 }, // City Club Hassan 2
//   // 33.97938166939821, -6.869105101955326
//   { lat: 33.97938166939821, lng: -6.869105101955326 }, // MCA-Morocco
//   // 33.979079178801875, -6.8678605570411335
//   { lat: 33.979079178801875, lng: -6.8678605570411335 }, // Fonds Hassan II
//   // 33.98203286444763, -6.867345572938709
//   { lat: 33.98203286444763, lng: -6.867345572938709 }, // HCP Club
//   // 33.98238677320281, -6.856583777222592
//   { lat: 33.98238677320281, lng: -6.856583777222592 }, // Foyer des médcins internes
// ];

// const paths = {
//   lat_list: [
//     33.982115336278206, 33.985145499946086, 33.98213072576973, 33.9813300389153,
//     33.98089410623472, 33.97938166939821, 33.979079178801875, 33.98203286444763,
//     33.98238677320281,
//   ],
//   lng_list: [
//     -6.865274188820471, -6.859888906276693, -6.8710362923394195,
//     -6.872763634849634, -6.8732786189520585, -6.869105101955326,
//     -6.8678605570411335, -6.867345572938709, -6.856583777222592,
//   ],
// };

// const formatPaths = (paths) => {
//   return paths.lat_list.map((lat, index) => {
//     return { lat, lng: paths.lng_list[index] };
//   });
// };

const options = {
  strokeColor: "red",
  strokeOpacity: 1,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1,
};

const onLoad1 = (polygon) => {
  console.log("polygon: ", polygon);
};
const onLoad2 = (marker) => {
  console.log("marker: ", marker);
};

function GoogleMapCompoenent({ data, coords }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCBWXezU2_gdOJuhYbiWMzIgGRgGik2BkM",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const dataOrder = data[0];

  console.log("o", dataOrder);

  const sortCoordsUsingDataOrder = (coords) => {
    const sortedCoords = [];
    for (let i = 0; i < dataOrder.length - 1; i++) {
      const index = dataOrder[i];
      sortedCoords.push(coords[index]);
    }
    return sortedCoords;
  };
  console.log("coords", sortCoordsUsingDataOrder(coords));

  return isLoaded ? (
    <GoogleMap
      id="google-map-scripts"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={onLoad}
      onUnmount={onUnmount}
      // onClick={(event) => {
      //   console.log("yo yo yo: ", event.latLng.lat(), event.latLng.lng());
      // }}
    >
      <Polygon
        onLoad={onLoad1}
        paths={sortCoordsUsingDataOrder(coords)}
        options={options}
      />
      {sortCoordsUsingDataOrder(coords).map((path, index) => {
        return (
          <Marker
            key={index}
            animation={
              index % 2 === 0
                ? window.google.maps.Animation.DROP
                : window.google.maps.Animation.BOUNCE
            }
            onLoad={onLoad2}
            position={path}
          />
        );
      })}
    </GoogleMap>
  ) : (
    <></>
  );
}

export const GoogleMapCompoenentF = React.memo(GoogleMapCompoenent);
