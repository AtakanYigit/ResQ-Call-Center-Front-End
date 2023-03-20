import "./filters.scss";

const filters = ({filterSelected, setFilterSelected}) => {
    return (
        <ul className = "filters">
            <li className = {`noSelect filter ${filterSelected === 1 ? "filterSelected" : ""}`} onClick = {()=> setFilterSelected(1)}>New</li>
            <li className = {`noSelect filter ${filterSelected === 2 ? "filterSelected" : ""}`} onClick = {()=> setFilterSelected(2)}>Ongoing</li>
            <li className = {`noSelect filter ${filterSelected === 3 ? "filterSelected" : ""}`} onClick = {()=> setFilterSelected(3)}>Completed</li>
        </ul>

    )
}
export default filters;