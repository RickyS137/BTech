import React from "react";

const MapWrapper = React.memo(
    () => {
        return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>;
    },
    () => true,
);
export default MapWrapper;