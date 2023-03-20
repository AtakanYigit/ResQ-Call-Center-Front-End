import {useState} from "react";
import Sidebar    from "./Components/Sidebar/Sidebar";
import Map        from "./Components/Map/Map";
import axios      from "axios";
import "./WorkPage.scss";


const WorkPage = () => {
    const [filterSelected, setFilterSelected] = useState(1);
    const [currentLocation, setCurrentLocation] = useState({lat: 0, lng: 0});

    return (
        <div className = "workPage">
            <Sidebar filterSelected = {filterSelected} setFilterSelected = {setFilterSelected} setLocation = {setCurrentLocation}/>
            <Map/>
        </div>
    )
}

export default WorkPage;