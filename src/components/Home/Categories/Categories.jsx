import { useEffect, useState } from "react";
import SingleCategories from "./SingleCategories";


const Categories = () => {
const [Categoris,setCategory]=useState([])

useEffect(()=>{
    const loadData=async()=>{
        const res=await fetch('categories.json')
        const data= await res.json()
        setCategory(data)
    }
    loadData()

},[])




    return (
        <div>
               <div>

                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-red-500 text-4xl text-center p-16 font-bold"> Our Categories </h1>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto">

                   {
                    Categoris.map(category=><SingleCategories key={category.id}
                       category={category}
                    ></SingleCategories>)
                   }
                   </div>
               </div>
        </div>
    );
};

export default Categories;