import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      {/* Accordion Header */}
      <div className="w-6/12 bg-gray-100 shadow-lg my-4 mx-auto">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="m-2 p-2 font-semibold">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="m-2 p-2">⌄</span>
        </div>

        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
