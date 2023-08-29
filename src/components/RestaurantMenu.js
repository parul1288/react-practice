import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null)

  if (resInfo === null) return <Shimmer />;

  const name = resInfo?.cards?.[0]?.card?.card?.info?.name;
  const costForTwoMessage =
    resInfo?.cards?.[0]?.card?.card?.info?.costForTwoMessage;
  const cuisines = resInfo?.cards?.[0]?.card?.card?.info?.cuisines || [];
  const itemCards =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];

  const categories =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="m-4 text-center">
      <h1 className="my-2 font-bold text-3xl">{name}</h1>
      <p className="my-6 font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordion */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {showIndex ? setShowIndex(null) : setShowIndex(index)}}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
