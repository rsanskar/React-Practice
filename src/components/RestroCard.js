import { Link } from "react-router-dom";

const RestoCard = ({ id, name, image, cusines, rating }) => {
  return (
    <Link to={`/restaurant/${id}`}>
      <div className="resto-card bg-gray-300 border border-black h-75 w-50 m-2.5 p-2.5 shadow-2xs">
        <img src={image}></img>
        <h2 id="resto-name" className="text-2xl font-bold">
          {name}
        </h2>
        <h3>{cusines.join(", ")}</h3>
        <h4>{rating} stars</h4>
      </div>
    </Link>
  );
};

export default RestoCard;
