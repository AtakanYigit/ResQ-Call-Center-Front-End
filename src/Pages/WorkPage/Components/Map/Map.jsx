import {useEffect, useRef, useState} from "react"
import GoogleMap                     from "google-maps-react-markers";
import mapOptions                    from "./mapOptions";
import Marker                        from "./Marker";
import "./Map.scss";
import axios from "axios";


const Map = () => {
    const [mapBounds, setMapBounds] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [coordinates, setCoordinates] = useState([
        {
            lat: 40.8518,
            lng: 14.2681,
            name: "Naples",
        },
        {
            lat: 43.7696,
            lng: 11.2558,
            name: "Florence",
        },
        {
            lat: 37.5023,
            lng: 15.0873,
            name: "Catania",
        },
    ]);


    const mapRef = useRef(null);

	const onGoogleApiLoaded = ({ map, maps }) => {
		mapRef.current = map;
	}

	const onMapChange = ({ bounds, zoom }) => {
		const ne = bounds.getNorthEast();
		const sw = bounds.getSouthWest();
		setMapBounds({ ...mapBounds, bounds: [sw.lng(), sw.lat(), ne.lng(), ne.lat()], zoom })
	}

    return (
        <div className = "map">
            {/* {mapReady && <Info buttonAction={updateCoordinates} coordinates={coordinates} mapBounds={mapBounds} />} */}
            <div className="map-container">
                <GoogleMap apiKey            = {GOOGLE_MAPS_API_KEY}
                           defaultCenter     = {{ lat: 45.4046987, lng: 12.2472504 }}
                           defaultZoom       = {7}
                           options           = {mapOptions}
                           mapMinHeight      = "1080px"
                           onGoogleApiLoaded = {onGoogleApiLoaded}
                           onChange          = {onMapChange}
                >
                    {coordinates.map(({lat, lng, name}, index) => (
                        <Marker key={index} lat = {lat} lng={lng} markerId = {name} className="marker"/>
                    ))}
                </GoogleMap>
            </div>
        </div>
    )
}

export default Map;

