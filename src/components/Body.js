import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) return <h2>Looks like you are not connected!</h2>

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0790239&lng=72.9080122&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    
    setListOfRestaurants(
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants?.length === 0) return <Shimmer />;
  
  return (
    <div className="body-section">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
