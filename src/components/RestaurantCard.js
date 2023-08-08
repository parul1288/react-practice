import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    avgRating,
    sla,
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        alt="restaurant image"
        src={CDN_URL + cloudinaryImageId}
        className="res-img"
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
      <p>{avgRating} stars</p>
      <p>{sla.deliveryTime} minutes</p>
    </div>
  );
};

export default RestaurantCard;
