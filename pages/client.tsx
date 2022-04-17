// @ts-nocheck
import { Button, IconButton } from "@mui/material";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { Header } from "../src/components";
import { addCoords, useAppDispatch, useAppSelector } from "../src/store";

const containerStyle = {
  width: "100%",
  height: "620px",
  position: "relative",
};

const center = { lat: 33.982115336278206, lng: -6.865274188820471 }; // ESI

const onLoad2 = (marker) => {
  // console.log("marker: ", marker);
};

function ClientPage() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCBWXezU2_gdOJuhYbiWMzIgGRgGik2BkM",
  });
  const [markers, setMarkers] = React.useState([]);
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const dispatch = useAppDispatch();

  const sendCoordToServer = () => {
    dispatch(addCoords(markers));
  };
  return isLoaded ? (
    <div>
      <Header />

      <GoogleMap
        id="google-map-scripts"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={(event) => {
          setMarkers([
            ...markers,
            {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
            },
          ]);
        }}
      >
        <div
          className="absolute top-4 right-20 py-2 px-4
      bg-white rounded-lg z-10 items-center
      "
        >
          <ul className="max-h-[200px] overflow-y-auto">
            <li className="text-base mb-3 font-semibold">
              Lattitude & Longitude:
            </li>
            {markers.map((marker) => (
              <li
                key={marker.id}
                className="text-gray-700 
                flex items-center flex-row
                "
              >
                {marker.lat}, {marker.lng}
                <IconButton
                  onClick={() => {
                    setMarkers(
                      markers.filter(
                        (m) => m.lat !== marker.lat && m.lng !== marker.lng
                      )
                    );
                  }}
                  size="small"
                  className="ml-2"
                >
                  <AiOutlineCloseSquare />
                </IconButton>
              </li>
            ))}
            <Button disabled={markers.length === 0} onClick={sendCoordToServer}>
              Set Orders List
            </Button>
          </ul>
        </div>
        {markers.map((path, index) => (
          <Marker
            key={index}
            animation={window.google.maps.Animation.DROP}
            onLoad={onLoad2}
            position={path}
          />
        ))}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(ClientPage);
