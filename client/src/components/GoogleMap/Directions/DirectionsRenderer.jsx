import React, { useState } from "react";
import { DirectionsRenderer } from "@react-google-maps/api";
import mapSlice from "redux/map/mapSlice";
import { useDispatch } from "react-redux";

function Renderer({ route }) {
  const dispatch = useDispatch();

  const [instance, setInstance] = useState(null);
  const onDirectionLoad = React.useCallback(function onLoad(e) {
    setInstance(e);
  }, []);

  return (
    <DirectionsRenderer
      options={{
        directions: route,
      }}
      onLoad={onDirectionLoad}
      onDirectionsChanged={() => {
        instance &&
          dispatch(
            mapSlice.actions.setDirections(
              instance?.directions.routes[0].legs[0].end_address
            )
          );
      }}
    />
  );
}

export default React.memo(Renderer);
