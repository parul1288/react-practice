import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState({});

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(MENU_API + resId);
    const json = await res.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const name = resInfo?.cards?.[0]?.card?.card?.info?.name;
  const costForTwoMessage =
    resInfo?.cards?.[0]?.card?.card?.info?.costForTwoMessage;
  const cuisines = resInfo?.cards?.[0]?.card?.card?.info?.cuisines || [];
  const itemCards =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs. {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
