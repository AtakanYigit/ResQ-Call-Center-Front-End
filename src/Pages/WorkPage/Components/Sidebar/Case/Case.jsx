import BloodIcon    from "../../../../../Assets/Blood.png";
import AmbulaceIcon from "../../../../../Assets/SendTeamIcon.png";
import MarkerIcon   from "../../../../../Assets/SeeOnMapIcon.png";
import axios        from "axios";
import Conf         from "../../../../../Configurations";
import "./Case.scss";

const Case = ({data, injuryImage, setLocation}) => {
    data = {}

    const {
        name       = "User Name",
        age        = "Age",
        gender     = "Gender",
        height     = "Height",
        bloodType  = "Blood Type",
        allergies  = [],
        diseases   = [],
        resources  = [],
        lat        = "",
        lang       = "",
        injuryType = "Injury Type",
        requestId  = 0,
        userId     = 0,
        userImage  = "",
    } = data;

    const sendTeam = () => {
        alert("Team Sent");
        // axios.get(Conf.sendTeam + requestId);
    }

    const showOnMap = () => {
        setLocation({lat: lat, lng: lang});
    }

    const deleteRequest = () => {
        alert("Request Deleted");
        // axios.get(Conf.deleteRequest + requestId);
    }

    return (
        <div className = "case">
            <div className = "caseHeader">
                <div className = "infoContainer">
                    <div className = "imageContainer">
                        <img src = {userImage} alt = ""/>
                    </div>
                    <div className = "mainInfoContainer">
                        <p className = "userName">{name}</p>
                        <div className = "infoContainerBottom">
                            <p>{age}</p>
                            <p>{gender}</p>
                            <p>{height}</p>
                            <div className = "bloodType">
                                <img src = {BloodIcon} alt = "" />
                                <p>{bloodType}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "injuryType">
                    <img src = {injuryImage} alt="" />
                    <p>{injuryType}</p>
                </div>
            </div>

            <div>
                <div className = "allergiesAndDiseases">
                    <div className = "section">
                        <p className = "sectionHeader">Allergies</p>
                        <ul>
                            {allergies.length > 0 
                                ? allergies.map((allergy, index) => {
                                    return <li key = {index} className = "item">{allergy}</li>
                                  }) 
                                : <li>No Known Allergies</li>
                            }
                        </ul>
                    </div>
                    <div className = "section">
                        <p className = "sectionHeader">Ongoing Diseases</p>
                        <ul>
                            {diseases.length > 0 
                                ? diseases.map((allergy, index) => {
                                    return <li key = {index} className = "item">{allergy}</li>
                                  }) 
                                : <li>No Known Diseases</li>
                            }
                        </ul>
                    </div>
                </div>

                <div className = "resourcesSection">
                    <p className = "resourcesHeader">Resources</p>
                    <div className = "resources">
                        {resources.length > 0
                            ? resources.map((resource, index) => {
                                if(resource.type === "image"){
                                    return(
                                        <div className = "resource">
                                            <img src = "" alt = "" />
                                        </div>
                                    )
                                }else if(resource.type === "video"){
                                    return(
                                        <div className = "resource">
                                            <video src = "" alt = "" />
                                        </div>
                                    )
                                }else if(resource.type === "audio"){
                                    return(
                                        <div className = "resource">
                                            <audio src = "" alt = "" />
                                        </div>
                                    )
                                }else if(resource.type === "text"){
                                    return(
                                        <div className = "resource">
                                            <p>{resource.data}</p>
                                        </div>
                                    )
                                }
                            })
                            : <p>No Resources</p>
                        }
                    </div>
                </div>

                <div className = "buttonsContainer">
                    <button onClick = {sendTeam}>
                        <img src = {AmbulaceIcon} alt = ""/> Send Team
                    </button>
                    <button onClick = {showOnMap}>
                        <img src = {MarkerIcon} alt = ""/> See On Map
                    </button>
                    <button onClick = {deleteRequest}>
                        X
                    </button>
                </div>
                
            </div>
        </div>
    )
}
export default Case;