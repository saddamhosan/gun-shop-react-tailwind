import React, { useContext, useEffect } from "react";
import { GunContext } from './../App';
import Gun from "./Gun";

const Shop = () => {
  const [guns, setGuns] = useContext(GunContext)
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="grid md:grid-cols-3 gap-6 m-5">
      {guns.map((gun) => (
        <Gun key={gun.id} gun={gun} />
      ))}
    </div>
  );
};

export default Shop;
