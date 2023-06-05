import React      from "react";
import MarkerIcon from "../../assets/SeeOnMapIcon.png";

interface MarkerProps {
    className: string;
    markerId:  string;
    lat:       number;
    lng:       number;
    clickHandler:   (e: any, marker: any) => void;
}

const Marker: React.FC<MarkerProps> = ({className, lat, lng, markerId, clickHandler}) => {
	return (
		<img className = {className}
			 src       = {MarkerIcon}
			 onClick   = {() => (clickHandler(lat, lng))}
			 style     = {{ cursor: 'pointer', fontSize: 40 }}
			 alt       = {markerId}/>
	)
};

export default Marker;