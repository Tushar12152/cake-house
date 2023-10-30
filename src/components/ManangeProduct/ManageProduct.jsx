import { useQuery } from "@tanstack/react-query";
import ManageProductDetail from "./ManageProductDetail/ManageProductDetail";
// import { useEffect, useState } from "react";

const ManageProduct = () => {

   const { data,isLoading,refetch}=useQuery({
       queryKey:['products'],
       queryFn:async()=>{
           const data=await fetch("http://localhost:5002/products")
           return await data.json();
       },
      
   })
   
//    const [datas,setDatas]=useState([])


//    useEffect(() => {
//     if (data) {
//       setDatas(data);
//     }
//   }, [data]);
// //    console.log(datas)

//    console.log(datas);








   if(isLoading){
    return <span className="loading loading-spinner text-warning"></span>
   }



    return (
        <div className="grid grid-cols-1 gap-6 p-5">

            {data?.length}
            {
                data?
                
                <div className="grid gap-6">
                      {
                   data?.map(product=><ManageProductDetail
                    key={product._id}
                    // datas={datas}
                    // setDatas={setDatas}
                    refetch={refetch}
                    product={product}
                ></ManageProductDetail>)

            }
                </div>:
                <div className="text-black text-center mt-20 ">You have no any product ... please add product first.....</div>
            }
        </div>
    );
};

export default ManageProduct;