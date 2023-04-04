import Filters from "./Filters/Filters";
import Case    from "./Case/Case";
import FallIcon from "../../../../Assets/Injuries/Fall.png";
import "./Sidebar.scss";

const Sidebar = ({filterSelected, setFilterSelected, setLocation}) => {
    // useEffect(() => {
    //     axios.get(Conf.getRequests)
    //         .then((response) => {
    //             const data = response.data;
    //             const newCoordinates = data.map((item) => {
    //                 return {
    //                     lat: item.lat,
    //                     lng: item.lang,
    //                     name: item.name,
    //                 }
    //             });
    //             setCoordinates(newCoordinates);
    //             setIsLoaded(true);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);

    return (
            <div className = "sideBar">
                <Filters filterSelected = {filterSelected} setFilterSelected = {setFilterSelected}/>
                <div className = "cases">
                    <Case data = {{}} injuryImage = {FallIcon} setLocation = {setLocation}/>
                    <Case data = {{}} injuryImage = {FallIcon} setLocation = {setLocation}/>
                    <Case data = {{}} injuryImage = {FallIcon} setLocation = {setLocation}/>
                    <Case data = {{}} injuryImage = {FallIcon} setLocation = {setLocation}/>
                    <Case data = {{}} injuryImage = {FallIcon} setLocation = {setLocation}/>
                </div>
            </div>
    )
}
export default Sidebar;