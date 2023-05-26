import {useState, useEffect} from "react";
import Post  from "./Post";
import axios from "axios";
import Conf  from "../Configurations";
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
    const [selectedFilter, setSelectedFilter] = useState<"New"| "Ongoing" |"Completed">("New");
    interface PostInterface{
        id: number;
        name: string;
        age: number;
        gender: string;
        height: string;
        bloodType: string;
        emergencyType: string;
        allergies: string[];
        ongoingDiseases: string[];
        resourses: string[];
        location: {lat: number, lng: number};
    }
    
    const [posts, setPosts] = useState<PostInterface[]>([]);

    useEffect(() => {
        axios.get(`${Conf.getEmergencies}`)
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        setPosts([
            {
                id:              5,
                name:            "Jane Doe",
                age:             26,
                gender:          "Female",
                height:          "1.75m",
                bloodType:       "0RH-",
                emergencyType:   "Fall Injury",
                allergies:       ["Peanuts", "Lactose"],
                ongoingDiseases: ["Diabetes", "Asthma"],
                resourses:       ["image1", "image2", "image3"],
                location:        {lat: 45.4046987, lng: 12.2472504}
            },
            {
                id:              5,
                name:            "Jane Doe",
                age:             26,
                gender:          "Female",
                height:          "1.75m",
                bloodType:       "0RH-",
                emergencyType:   "Fall Injury",
                allergies:       ["Peanuts", "Lactose"],
                ongoingDiseases: ["Diabetes", "Asthma"],
                resourses:       ["image1", "image2", "image3"],
                location:        {lat: 45.4046987, lng: 12.2472504}
            },
            {
                id:              5,
                name:            "Jane Doe",
                age:             26,
                gender:          "Female",
                height:          "1.75m",
                bloodType:       "0RH-",
                emergencyType:   "Fall Injury",
                allergies:       ["Peanuts", "Lactose"],
                ongoingDiseases: ["Diabetes", "Asthma"],
                resourses:       ["image1", "image2", "image3"],
                location:        {lat: 45.4046987, lng: 12.2472504}
            },
            {
                id:              5,
                name:            "Jane Doe",
                age:             26,
                gender:          "Female",
                height:          "1.75m",
                bloodType:       "0RH-",
                emergencyType:   "Fall Injury",
                allergies:       ["Peanuts", "Lactose"],
                ongoingDiseases: ["Diabetes", "Asthma"],
                resourses:       ["image1", "image2", "image3"],
                location:        {lat: 45.4046987, lng: 12.2472504}
            },
            {
                id:              5,
                name:            "Jane Doe",
                age:             26,
                gender:          "Female",
                height:          "1.75m",
                bloodType:       "0RH-",
                emergencyType:   "Fall Injury",
                allergies:       ["Peanuts", "Lactose"],
                ongoingDiseases: ["Diabetes", "Asthma"],
                resourses:       ["image1", "image2", "image3"],
                location:        {lat: 45.4046987, lng: 12.2472504}
            }
        ]);
    }, []);

    return (
        <div className = "sidebar">
            <div className = "filters">
                <p className = {`filter ${selectedFilter === "New" ? "selectedFilter" : ""}`}       onClick = {()=> setSelectedFilter("New")}      >New</p>
                <p className = {`filter ${selectedFilter === "Ongoing" ? "selectedFilter" : ""}`}   onClick = {()=> setSelectedFilter("Ongoing")}  >Ongoing</p>
                <p className = {`filter ${selectedFilter === "Completed" ? "selectedFilter" : ""}`} onClick = {()=> setSelectedFilter("Completed")}>Completed</p>
            </div>

            <div className = "posts">
                {posts.map((post) => (
                    <Post post = {post} key = {post.id} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar;