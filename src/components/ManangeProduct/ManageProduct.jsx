import { useQuery } from "@tanstack/react-query";
import ManageProductDetail from "./ManageProductDetail/ManageProductDetail";

const ManageProduct = () => {
   const {data,isLoading,}=useQuery({
       queryKey:['products'],
       queryFn:async()=>{
           const data=await fetch("http://localhost:5002/products")
           return await data.json();
       }
   })
   
//    console.log(data);

   if(isLoading){
    return <span className="loading loading-spinner text-warning"></span>
   }



    return (
        <div className="grid grid-cols-1 gap-6 p-5">
            {
                data.map(product=><ManageProductDetail
                    key={product._id}
                    product={product}
                ></ManageProductDetail>)

            }
        </div>
    );
};

export default ManageProduct;