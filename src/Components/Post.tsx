import {PostInterface}      from "../Pages/WorkPage/WorkPage";
import axios                from "axios";
import Conf                 from "../Configurations";
import DefaultPic           from '../assets/DefaultUserPic.png';
import BloodIcon            from '../assets/BloodICon.png';
import CrossIcon            from '../assets/CrossIcon.png';
import LocationIcon         from '../assets/LocationIcon.png';
import AmbulanceIcon        from '../assets/AmbulanceIcon.png';
import DefaultEmergencyIcon from '../assets/DefaultEmergencyIcon.png';
import "./Post.scss";

interface PostProps {
    post: PostInterface;
    fetchData: () => void;
    seeOnMap: (lat:number, lng:number) => void;
}

const Post: React.FC<PostProps> = ({post, fetchData, seeOnMap}) => {
    const sendTeam = () =>{
        alert("Team Sent!");
    };

    const cancel = async (id: number) =>{
        console.log("deleting: " + id);
        
        await axios.delete(Conf.cancelEmergency, { params: { id } });
        fetchData();
    };

    return (
        <div className = "post">
            <div className = "mainInfoContainer">
                <div className = "imageAndInfoContainer">
                    <img src = {DefaultPic} className = "profileImage" alt="" />
                    <div className = "mainInfo">
                        <p>{`${post.firstName.charAt(0).toUpperCase() + post.firstName.slice(1).toLowerCase()} ${post.lastName.charAt(0).toUpperCase() + post.lastName.slice(1).toLowerCase()}`}</p>
                        <div className = "mainInfoSubContainer">
                            <p>{post.age}</p>
                            <p>{post.gender}</p>
                            <p>{post.height}</p>
                            <div className = "bloodType">
                                <img src = {BloodIcon} alt="" />
                                <p>{post.bloodType}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "emergencyType">
                    <img src = {DefaultEmergencyIcon} alt="" />
                    <p>{post.categoryName}</p>
                </div>
            </div>
            
            <div className = "allergiesDiseasesContainer">
                <div className = "allergiesDiseasesSubContainer">
                    <h6>Allergies</h6>
                    <div className = "allergiesDiseases">
                        {post.allergies.map((allergy,index) => (
                            <p key = {index} className = "allergyDisease">{allergy}</p>
                        ))}

                        {post.allergies.length === 0 && (
                            <p>No allergies</p>
                        )}
                    </div>
                </div>
                
                <div className = "allergiesDiseasesSubContainer">
                    <h6>Ongoing Diseases</h6>
                    <div className = "allergiesDiseases">
                        {post.diseases.map((disease, index) => (
                            <p key = {index} className = "allergyDisease">{disease}</p>
                        ))}

                        {post.diseases.length === 0 && (
                            <p>No allergies</p>
                        )}
                    </div>
                </div>
            </div>

            <div className = "resourcesContainer">
                <h6>Resources</h6>
                {/* <div className = "resources">
                    {post.resourses.map((resource, index) => (
                        <img key = {index} src = {resource} className = "resource" alt="" />
                    ))}
                </div> */}
                <div className = "resources">
                    <p>{post.description}</p>
                </div>
            </div>

            <div className = "actionsContainer">
                <button className = "action" onClick = {sendTeam}>
                    <img src = {AmbulanceIcon} alt = ""/>
                    <p>Send Team</p>
                </button>
                <button className = "action" onClick = {()=> seeOnMap(post.latitude, post.longitude)}>
                    <img src = {LocationIcon} alt = ""/>
                    <p>See On Map</p>
                </button>
                <button className = "action" onClick = {()=> cancel(post.id)}>
                    <img src = {CrossIcon} alt = ""/>
                </button>
            </div>
        </div>
    );
};

export default Post;
