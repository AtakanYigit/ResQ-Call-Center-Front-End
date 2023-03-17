import GoogleMap from "google-maps-react-markers";
import {useRef, useState} from "react";
import "./WorkPage.scss";

const WorkPage = () => {
    const mapRef = useRef(null)
    const [mapReady, setMapReady] = useState(false)

    const onGoogleApiLoaded = ({ map, maps }) => {
        mapRef.current = map
        setMapReady(true)
    }
    
    const onMarkerClick = (markerId) => {
        console.log('This is ->', markerId)
    }

    return (
        <div className = "workPage">
            <div className = "sideBar">

            </div>
            {mapReady && <div>Map is ready. See for logs in developer console.</div>}
            <GoogleMap
                apiKey=""
                defaultCenter={{ lat: 45.4046987, lng: 12.2472504 }}
                defaultZoom={5}
                options={mapOptions}
                mapMinHeight="100vh"
                onGoogleApiLoaded={onGoogleApiLoaded}
                onChange={(map) => console.log('Map moved', map)}
            >
                {coordinates.map(({ lat, lng, name }, index) => (
                <Marker key={index} lat={lat} lng={lng} markerId={name} onClick={onMarkerClick} />
                ))}
            </GoogleMap>
        </div>
    )
}

export default WorkPage;