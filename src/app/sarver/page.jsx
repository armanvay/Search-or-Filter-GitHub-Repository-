import FoodCard from '@/Component/FoodCard/FoodCard';
import React from 'react';


const getFood = async (category = "", search="") => {
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`,
  );
  const data = await res.json();
  return data.data;
};

const page = async ({ searchParams }) => {
  const sp = await searchParams;
  console.log(sp);
  const food = await getFood(sp.category,sp.search);
  console.log(food);

  return (
    <div>
      im a sarver side
      <div className="max-w-10/12 mx-auto grid grid-cols-3 gap-5">
        {food.map((item) => (
          <FoodCard key={item.id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default page;