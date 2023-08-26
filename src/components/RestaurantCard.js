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
    <div className="m-4 p-4 w-80 h-auto bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        alt="restaurant image"
        src={CDN_URL + cloudinaryImageId}
        className="rounded-lg"
      />
      <h3 className="py-4 font-bold text-lg truncate">{name}</h3>
      <p className="truncate">{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
      <p>{avgRating} stars</p>
      <p>{sla.deliveryTime} minutes</p>
    </div>
  );
};

export default RestaurantCard;
