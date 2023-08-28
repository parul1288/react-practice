import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="flex m-2 p-2 border-b-2 border-gray">
          <img src={CDN_URL + item.card.info.imageId} className="w-32" />  
          <div className="m-2 p-2 text-left">
            <span className="p-2 font-medium">{item.card.info.name}</span>
            <span>
              - Rs {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
