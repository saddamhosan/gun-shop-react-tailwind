import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GunContext } from './../App';

const GunDetail = () => {
    const navigate=useNavigate()
    const [guns] = useContext(GunContext)
    const {id}=useParams()
    const gun=guns.find(gun=>gun.id=== +id)
    const { img, name, bullet, category, action, price } = gun;
    return (
      <div>
        <button className="bg-blue-100 mt-2 px-4" onClick={() => navigate(-1)}>
          back
        </button>
        <div className="flex justify-center m-3">
          <img className="max-h-[250px]" src={img} alt="" />
        </div>
        <div className="m-4 text-center">
          <h1>{name}</h1>
          <p>{bullet}</p>
          <p>{action}</p>
          <p>{category}</p>
          <p>${price}</p>
        </div>
      </div>
    );
};

export default GunDetail;