import { useState, useEffect } from "react";

const User = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    // Api Calls
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/parul1288");
    const json = await data.json();

    setUserInfo(json);
  };

  const { name, location, avatar_url } = userInfo;
  return (
    <div className="user-card">
      <img src={avatar_url} />
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
    </div>
  );
};

export default User;
