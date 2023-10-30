import { useLoaderData, useParams } from "react-router-dom";
import RecipieDetails from "./RecipieDetails";

const Recipies = () => {
  const category = useParams();
  // console.log(category)
  const Categoris = useLoaderData();
  //   console.log(Categoris)

  const filterData = Categoris.filter(
    (cat) => cat.category.toLowerCase() === category.category.toLowerCase()
  );

  console.log(filterData);

  return (
    <div>
      {filterData.length > 0 ? (
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6 ">
          {filterData.map((data) => (
            <RecipieDetails key={data.id} data={data}></RecipieDetails>
          ))}
        </div>
      ) : (
        <div>
          <h1 className="font-bold text-bold text-pink-400 text-center mt-28 text-3xl">
            Product is not Available Right Now
          </h1>
        </div>
      )}
    </div>
  );
};

export default Recipies;
