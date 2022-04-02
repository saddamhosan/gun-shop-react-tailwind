import React from 'react';
import { useNavigate } from 'react-router-dom';

const Gun = ({gun}) => {
    const navigate=useNavigate()
    const {img,name,bullet,category,action,price,id}=gun
    return (
        <div className='border-2'>
            <div className='flex justify-center m-3'>
                <img className='max-h-[250px]' src={img} alt="" />
            </div>
            <div className='m-4'>
                <h1>{name}</h1>
                <p>{bullet}</p>
                <p>{action}</p>
                <p>{category}</p>
                <p>${price}</p>
                <button onClick={()=>navigate(`/gun/${id}`)} className='bg-blue-100 mt-2 px-4'>Details</button>
            </div>
        </div>
    );
};

export default Gun;