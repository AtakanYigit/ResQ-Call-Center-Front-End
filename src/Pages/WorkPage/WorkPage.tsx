import {useRef, useState, useEffect} from "react";
import GoogleMap  from "google-maps-react-markers";
import mapOptions from "./mapoptions.json";
import Marker     from "./Marker";
import Sidebar    from "../../Components/Sidebar";
import axios      from "axios";
import Conf       from "../../Configurations";
import "./WorkPage.scss";

export interface PostInterface{
    id:              number;
    age:             number;
    date:            string;
    firstName:       string;
    lastName:        string;
    gender:          string;
    height:          string;
    bloodType:       string;
    identityNumber:  string;
    title:           string;
    weight:          string;
    categoryName:    string;
    allergies:       string[];
    diseases:        string[];
    description:     string;
    altitude:        number;
    longitude:       number;
    latitude:        number;
}

interface Coordinate{
    lat:  number;
    lng:  number;
    name: string;
}

const WorkPage: React.FC = () => {
    const mapRef                                = useRef(null)
    const [coordinates,     setCoordinates]     = useState<Coordinate[]>([]);
    const [posts,           setPosts]           = useState<PostInterface[]>([]);

    //Fetch data from server
    const fetchData = async () => {
        axios.get(Conf.getEmergencies)
            .then((res) => {
                const data = res.data.data;

                const recievedCoordinates : Coordinate[] = data.map((post: PostInterface) => {
                    return {
                        lat:  post.latitude,
                        lng:  post.longitude,
                        name: `${post.firstName}${post.lastName}${Math.random()}`
                    }
                });

                setPosts(data);
                setCoordinates(recievedCoordinates);
            }).catch((err) => {
                console.log(err);
            });
    }

    useEffect(()=>{
        fetchData();
    }, []);
    
    //Setting Ref
    const onGoogleApiLoaded = ({map}: any) =>{
        mapRef.current = map;
    };
    
    //Scroll to Marker
    const scrollTo = (lat:number, lng:number) =>{
        if (!mapRef.current) return;
        const map = mapRef.current as unknown as google.maps.Map;
        map.panTo({ lat, lng });
	}

    return (
        <div className = "workPage">
            <Sidebar posts = {posts} fetchData = {fetchData} seeOnMap = {scrollTo}/>
            <GoogleMap apiKey            = ""
                       defaultCenter     = {{lat: 40.960505, lng: 29.190040}}
                       defaultZoom       = {11}
                       options           = {mapOptions}
                       mapMinHeight      = "100vh"
                       onGoogleApiLoaded = {onGoogleApiLoaded}>

                {coordinates.map(({lat, lng, name}, index) => (
                    <Marker key          = {index} 
                            lat          = {lat} 
                            lng          = {lng} 
                            markerId     = {name} 
                            clickHandler = {scrollTo} 
                            className    = "marker"/>
                ))}
            </GoogleMap>
        </div>
    )
}

export default WorkPage;