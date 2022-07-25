import React, { useState } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import shopIcon from "icons/shopIcon.svg";
import { DirectionsService, DirectionsRenderer } from "./Directions";
import { containerStyle, center, options } from "./constants";

function Map() {
  const [address, setAddress] = useState(null);
  const [route, setRoute] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center.current}
      zoom={9}
      options={options}
      onLoad={() => {
        setTimeout(() => {
          setIsLoaded(true);
        }, 50);
      }}
      onDblClick={({ latLng }) => {
        setAddress(latLng);
      }}
    >
      {isLoaded && (
        <Marker
          visible={!address}
          icon={shopIcon}
          position={center.shop}
        ></Marker>
      )}
      {address && <Marker position={address} />}
      {address !== null && (
        <DirectionsService address={address} setRoute={setRoute} />
      )}

      {route !== null && <DirectionsRenderer route={route} />}

      <p
        style={{
          width: "100%",
          backgroundColor: "#fff",
          color: "#ff6000",
          position: "absolute",
          opacity: "0.85",
          textAlign: "center",
        }}
      >
        Double click to set your address
      </p>
    </GoogleMap>
  );
}

export default React.memo(Map);
