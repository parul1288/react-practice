import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <div className="flex justify-between">
      <div className="logo">
        <img className="w-32" alt="food delivery logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 items-center">
          <li className="mx-4 font-semibold">
            Call me
            <input
              className="mx-2 p-2 w-28 border border-black rounded-lg"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </li>
          <li className="mx-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-4">Cart</li>
          <button
            className="mx-4"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
