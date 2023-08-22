import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(MENU_API + resId);
    const json = await res.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
