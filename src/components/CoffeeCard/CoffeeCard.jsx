import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeCard = ({coffee}) => {
    const {_id, name, chef, photo} = coffee

    const handleDelete =(_id)=>{
        fetch(`http://localhost:5000/coffees/${_id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                alert('deleted successfully')
            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl w-1/2 p-4 rounded-lg">
  <figure>
    <img 
      className="w-40 h-40 object-cover rounded-lg" 
      src={photo} 
      alt={`${name} preview`} 
    />
  </figure>
  <div className="card-body">
    <h2 className="text-lg font-semibold">Name: <span className="font-normal">{name}</span></h2>
    <p className="text-lg">Chef: <span className="font-normal">{chef}</span></p>
    <div className="card-actions flex justify-start items-center gap-2 mt-4">
      <button className="btn btn-sm btn-ghost bg-gray-200 hover:bg-gray-300 text-black">
        <i className="fas fa-eye">view</i>
      </button>
      <button className="btn btn-sm btn-ghost bg-gray-200 hover:bg-gray-300 text-black">
        <Link to={`updateCoffee/${_id}`}><i className="fas fa-edit">update</i></Link>
      </button>
      <button className="btn btn-sm btn-ghost bg-red-100 hover:bg-red-200 text-red-600">
        <i onClick={()=>handleDelete(coffee._id)} className="fas fa-trash-alt">X</i>
      </button>
    </div>
  </div>
</div>

    );
};

export default CoffeeCard;