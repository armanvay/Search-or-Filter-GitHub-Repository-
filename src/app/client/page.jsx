"use client"
import FoodCard from '@/Component/FoodCard/FoodCard';
import React, { useEffect, useState } from 'react';

const ClientPage = () => {

//     const [food,setFood]=useState([])
//      const [searchfild, setSearchfild] = useState("");
//      const [filterinp, setfilterinp] = useState("");

//     useEffect( ()=>{
//         fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods")
//         .then(res =>res.json())
//         .then(data =>setFood(data.data))
//     } ,[])

// // console.log(searchfild);


// const hendelSearch =()=>{
//     const expected = food.filter((food) =>
//       food.dish_name.toLowerCase().includes(searchfild.toLowerCase()),
//     );
//     console.log(expected,"expected ")
//     setFood(expected)

// }



// const hendelFilter =(e)=>{
//     const value =e.target.value
//         const expected = food.filter((food) => food.category === value);
//        setFood(expected)

//     console.log(expected,"expected",value);

// }


const [food, setFood] = useState([]);
const [allFoods, setAllFoods] = useState([]); 
const [searchfild, setSearchfild] = useState("");

useEffect(() => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods")
    .then((res) => res.json())
    .then((data) => {
      setFood(data.data);
      setAllFoods(data.data); 
    });
}, []);


const hendelSearch = () => {
    if (searchfild.length ==0) {
        alert("Plz search Now")
    }


  const expected = allFoods.filter((item) =>
    item.dish_name.toLowerCase().includes(searchfild.toLowerCase()),
  );

  setFood(expected);
  console.log(expected, "search result");
};

const hendelFilter = (e) => {
  const value = e.target.value;

  if (value === "all") {
    setFood(allFoods);
    return;
  }

  const expected = allFoods.filter((item) => item.category === value);

  setFood(expected);
  console.log(expected, "filter result", value);
};





    return (
      <div className="mt-10">
        <div className="flex justify-between items-center max-w-4xl mx-auto mb-10">
          <h1 className="text-2xl font-bold underline">Food List</h1>
          <div className="flex items-center">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={searchfild}
                onChange={(e) => setSearchfild(e.target.value)}
                type="search"
                required
                placeholder="Search"
              />
            </label>
            <button onClick={hendelSearch} className="btn bg-orange-400">
              Search Now
            </button>
          </div>
          <div>
            <label className="select">
              <span className="label">Choice your food</span>
              <select onChange={hendelFilter}>
                <option value="all">All food </option>
                <option value="dish">Dish</option>
                <option value="burger">Burger </option>
                <option value="biriyani">Biriyani </option>
                <option value="beverage">Beverage </option>
              </select>
            </label>
          </div>
        </div>
        <div className="max-w-10/12 mx-auto grid grid-cols-3 gap-5">
          {food.map((item) => (
            <FoodCard key={item.id} item={item}></FoodCard>
          ))}
        </div>
      </div>
    );
};

export default ClientPage;