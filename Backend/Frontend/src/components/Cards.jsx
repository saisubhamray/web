import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3  bg-green-100">
        <div className="card w-92 bg-white shadow-xl hover:scale-105 duration-200 dark:border text-black">
          <figure className="cd">
            <img className="object-contain h-250 w-200" src={item.image} alt="Shoes"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className="card-titleee text-large md:text-small font-bold text-green-500" >{item.title}</p>

            <h2 className="card-titlee text-sm md:text-small font-bold  text-yellow-500">
            {item.description}
            </h2>
            
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                   Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
