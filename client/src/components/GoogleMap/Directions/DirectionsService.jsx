import React from "react";
import { DirectionsService } from "@react-google-maps/api";
import { center } from "../constants";

function Service({ address, setRoute }) {
  const onServiceLoad = React.useCallback(
    function onLoad(result, status) {
      if (status === "OK" && result) {
        setRoute(result);
      } else {
        console.log(status);
      }
    },
    [setRoute]
  );

  return (
    <DirectionsService
      options={{
        origin: center.shop,
        destination: address,
        travelMode: "DRIVING",
      }}
      callback={onServiceLoad}
    />
  );
}

export default React.memo(Service);
