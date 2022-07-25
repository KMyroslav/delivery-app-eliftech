import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import { Bars } from "react-loader-spinner";

function MapWrapper() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:
      process.env.GOOGLE_API_KEY || "AIzaSyDHmk-TC2i5RLwMrxKA8kw8-UoDB7TNUec",
  });

  const renderMap = () => <Map />;
  return isLoaded ? (
    renderMap()
  ) : loadError ? (
    "Cant connect to google maps, sorry."
  ) : (
    <Bars
      height="30"
      width="30"
      color="#2196f3"
      ariaLabel="loading-indicator"
    />
  );
}

export default React.memo(MapWrapper);
