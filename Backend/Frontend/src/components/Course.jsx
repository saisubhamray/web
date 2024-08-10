import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${window.location.origin}/book`);
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 bg-white">
      <div className="items-center justify-center text-center bg-white">
          <h1 className="mt-16 text-2xl md:text-5xl bg-white">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :</span>
          </h1>
          <p className="mt-10 text-xl md:text-xl text-purple-400">
          <span className="text-orange-500"> Hi Users!</span>
            {" "}, Now you can access all our book in the webpage.We also add some exciting books and novels for you in upcoming day.In the next update we added some extra feature.Stay tuned. 
            
           </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 bg-white">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
