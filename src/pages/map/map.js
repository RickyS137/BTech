import React, {useEffect} from 'react';
import { load } from "@2gis/mapgl"
import MapWrapper from "./mapWrapper";
import {MapContext} from "./mapProvider";
import locate from "../../media/red-locate.svg"
import {useSelector} from "react-redux";

export const Map = () => {
    const [_, setMapInstance] = React.useContext(MapContext);
    const latitude = useSelector(state => state.city.coordinate.latitude)
    const longitude = useSelector(state => state.city.coordinate.longitude)
    const zoom = useSelector(state => state.city.coordinate.zoom)

    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [latitude, longitude],
                zoom: zoom,
                key: 'de312fb7-6924-4f8b-a267-57a17b523c82',
            });
            const marker = new mapglAPI.Marker(map, {
                coordinates: [74.610116, 42.869677],
                icon: locate
            });
            const marker2 = new mapglAPI.Marker(map, {
                coordinates: [74.601239, 42.867924],
                icon: locate
            });
        });


        setMapInstance(map);

        return () => map && map.destroy();
    }, [latitude, longitude, zoom]);

    return (
        <div style={{ width: '360px', height: '196px', borderRadius: "12px", overflow:"hidden"}}>
            <MapWrapper />
        </div>
    );
};

export default Map;