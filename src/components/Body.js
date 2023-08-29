import RestaurantCard, { withVegetarianLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { list } from "postcss";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  const RestaurantCardVegetarian = withVegetarianLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) return <h2>Looks like you are not connected!</h2>;

  const setStateVariable = (jsonData) => {
    const cardData = jsonData.data.cards.filter(
      (item) => item.card.card.id === "restaurant_grid_listing"
    );

    setListOfRestaurants(
      cardData[0].card.card.gridElements.infoWithStyle.restaurants
    );
    
    setFilteredRestaurants(
      cardData[0].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0790239&lng=72.9080122&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setStateVariable(jsonData);
  };

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body-section">
      <div className="flex">
        <div className="search">
          <input
            type="text"
            className="m-4 p-2 border border-black"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 text-cyan-50 bg-gray-500 rounded-md"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>

          <button
            className="m-10 px-4 py-2 bg-green-600 rounded-md"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants &&
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.veg ? (
                <RestaurantCardVegetarian resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
