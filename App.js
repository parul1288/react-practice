import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *      Logo
 *      Nav links
 * Body
 *      Search Bar
 *      Restaurants Container
 *          Restaurant Card
 * Footer
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo-img"
          alt="food delivery logo"
          src="https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
        />
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Search = () => {
  return <div className="search">Search</div>;
};

const ResCard = (props) => {
  
  const { resData } = props
  const { name, cuisines, imageId, costForTwo } = resData;

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
    </div>
  );
};

const resList = [
  {
    id: "419708",
    name: "KFC",
    cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
    locality: "Jhalawar Road",
    areaName: "Indraprastha Industrial Area",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 3.9,
    parentId: "547",
    avgRatingString: "3.9",
    totalRatingsString: "5K+",
    deliveryTime: 28,
  },
  {
    id: "76951",
    name: "Burger Garage Talwandi",
    cloudinaryImageId: "8d8e8b772b50d94c7648b44e3e3b31a6",
    locality: "Jawahar Nagar",
    areaName: "Talwandi",
    costForTwo: "₹150 for two",
    cuisines: ["Pastas", "Burgers", "Ice Cream"],
    avgRating: 4.2,
    veg: true,
  },
  {
    id: "176890",
    name: "Rominus Pizza & Burger",
    cloudinaryImageId: "9ec9ffd900c24ef751e2f34ba3d2fd4b",
    locality: "Laxman Vihar",
    areaName: "Ladpura",
    costForTwo: "₹200 for two",
    cuisines: ["Italian-American", "Pizzas", "American", "Barbecue", "Grill"],
    avgRating: 4,
  },
  {
    id: "134839",
    name: "Kebabs & Curries Company",
    cloudinaryImageId: "jukw7ribptvi7ibrsyk9",
    locality: "Rajeev Gandhi Nagar",
    areaName: "Indraprastha Industrial Area",
    costForTwo: "₹400 for two",
    cuisines: [
      "North Indian",
      "Thalis",
      "Chinese",
      "Mughlai",
      "Chaat",
      "Punjabi",
      "Desserts",
      "Snacks",
      "Rajasthani",
      "Tandoor",
      "Sweets",
      "Indian",
      "Beverages",
      "Ice Cream",
      "Italian",
      "Pastas",
    ],
    avgRating: 4,
  },
  {
    id: "86886",
    name: "Burger Farm",
    cloudinaryImageId: "jd2mgfyedgkvxsm7rjss",
    locality: "Rajeev Gandhi Nagar",
    areaName: "Indraprastha Industrial Area",
    costForTwo: "₹200 for two",
    cuisines: [
      "Fast Food",
      "American",
      "Italian-American",
      "Snacks",
      "Grill",
      "Beverages",
      "Barbecue",
    ],
    avgRating: 4.2,
  },
  {
    id: "104492",
    name: "Hunger Buddy Fast Food Restaurant",
    cloudinaryImageId: "vkpeoa1vlnfoisqc3jgk",
    locality: "Sabji Mandi Main Road",
    areaName: "Talwandi",
    costForTwo: "₹150 for two",
    cuisines: [
      "Pastas",
      "Chinese",
      "North Indian",
      "South Indian",
      "Burgers",
      "Ice Cream",
      "Pizzas",
      "Biryani",
    ],
    avgRating: 3.6,
    veg: true,
  },
  {
    id: "499826",
    name: "Mirch Masala",
    cloudinaryImageId: "trkp8nkh7q0iwqwibuo9",
    locality: "Electronic Complex",
    areaName: "Talwandi",
    costForTwo: "₹199 for two",
    cuisines: [
      "Chinese",
      "North Indian",
      "Burgers",
      "Ice Cream",
      "Pizzas",
      "Biryani",
    ],
    avgRating: 3.6,
    veg: true
  }
];

const ResContainer = () => {
  return (
    <div className="res-container">
      {resList.map(restaurant => <ResCard resData={restaurant} />)}
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-section">
      <Search />
      <ResContainer />
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
