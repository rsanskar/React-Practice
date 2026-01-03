import { Link } from "react-router-dom";

const RestoCard = ({id,name,image,cusines,rating}) =>{
    return(
        <Link to={`/restaurant/${id}`}>
        <div className="resto-card">
            <img src={image}></img>
            <h2 id="resto-name">{name}</h2>
            <h3>{cusines.join(", ")}</h3>
            <h4>{rating} stars</h4>
        </div>
        </Link>
    );
}

export default RestoCard;