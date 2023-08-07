const RestaurantCard = (props) => {
  
    const { resData } = props
    const { name, cuisines, imageId, costForTwo, avgRating } = resData;
  
    return (
      <div className="res-card">
        <img
          alt="restaurant image"
          src="https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/pass/new%20restaurant%20menus%20in%20Mumbai.jpg"
          className="res-img"
        />
        <p>{name}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>{avgRating} stars</p>
      </div>
    );
};

export default RestaurantCard;