import {useRef, useState, useEffect} from "react";
import GoogleMap  from "google-maps-react-markers";
import Marker     from "./Marker";
import mapOptions from "./mapoptions.json";
import "./WorkPage.scss";

const WorkPage: React.FC = () => {
    interface Coordinate{
        lat:  number;
        lng:  number;
        name: string;
    }
    
    const coordinates: Coordinate[] = [
        { lat: 45.4046987, lng: 12.2472504, name: "Marker 1" },
        { lat: 51.5074, lng: -0.1278, name: "Marker 2" },
        // Add more coordinates here if needed
    ];

    const mapRef = useRef(null)
	const [mapReady, setMapReady] = useState(false)
	const [mapBounds, setMapBounds] = useState({})
	const [usedCoordinates, setUsedCoordinates] = useState(0)
	const [currCoordinates, setCurrCoordinates] = useState(coordinates[usedCoordinates])
	const [highlighted, setHighlighted] = useState(null)

    const onGoogleApiLoaded = ({map}: any) => {
        mapRef.current = map;
        setMapReady(true);
    };
    
    const onMarkerClick = (e:any, { markerId, lat, lng }: any) => {
        console.log("Clicked: ", markerId);
		setHighlighted(markerId)
	}
    
	const onMapChange = ({bounds, zoom}: any) => {
		const ne = bounds.getNorthEast()
		const sw = bounds.getSouthWest()
		setMapBounds({ ...mapBounds, bounds: [sw.lng(), sw.lat(), ne.lng(), ne.lat()], zoom })
		setHighlighted(null)
	}

    useEffect(() => {
        setCurrCoordinates(coordinates[usedCoordinates]);
    }, [usedCoordinates]);

    return (
        <div className = "workPage">
            <div className = "sideBar">

            </div>
            {mapReady && <div>Map is ready. See for logs in developer console.</div>}
            <GoogleMap apiKey            = ""
                       defaultCenter     = {{ lat: 45.4046987, lng: 12.2472504 }}
                       defaultZoom       = {5}
                       options           = {mapOptions}
                       mapMinHeight      = "100vh"
                       onGoogleApiLoaded = {onGoogleApiLoaded}
                       onChange          = {onMapChange}>

                {coordinates.map(({lat, lng, name}, index) => (
                    <Marker key       = {index} 
                            lat       = {lat} 
                            lng       = {lng} 
                            markerId  = {name} 
                            onClick   = {onMarkerClick} 
                            className = "marker"/>
                ))}
            </GoogleMap>
        </div>
    )
}

export default WorkPage;