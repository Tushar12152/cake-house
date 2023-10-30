import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Update = () => {
    const navigate=useNavigate()
  const data=useLoaderData()
//   console.log(data)

  const {_id, name, category, price, description, photo}=data;



  const UpdateData=e=>{
    e.preventDefault()
    const form=e.target;
    const name=form.productName?.value || 'not given';
    const category=form.category?.value  || 'not given';
    const price=form.price?.value  || 'not given';
    const description=form.description?.value  || 'not given';
    const photo=form.photo?.value  || 'not given';

    const  product={
        name,category,price,description,photo
    }

    axios.put(`http://localhost:5002/products/${_id}`,product)
    .then(res=>{

        console.log(res.data);
        if(res.data. modifiedCount>0){
            swal ("success","Your product is updated successfully","success")

            navigate("/dashboard/manageProduct")
        }
    })

   
}



    return (
        <div>
              <p className="text-center font-bold p-5 ">update your product</p>
            <form onSubmit={UpdateData} className="card-body">


            <div className="form-control">
          <label className="label">
           
          </label>
         <div className="flex gap-6 w-full">
         <input type="text" defaultValue={name} name="productName" placeholder="Product Name" className="input input-bordered w-[50%]" required />
         
   
    
         <input type="text" name="category"  defaultValue={category} placeholder="Product Category" className="input input-bordered w-[50%]" required />
      
         </div>
        </div>



        <div className="form-control">
          <label className="label">
           
          </label>
         <div className="flex gap-6 w-full">
         <input type="text" defaultValue={price} name="price" placeholder="Price" className="input input-bordered w-[50%]" required />
         
   
    
         <input defaultValue={description} type="text" name="description" placeholder="Description" className="input input-bordered w-[50%]" required />
      
         </div>
        </div>



        <div className="form-control">
          <label className="label">
          
          </label>
          <input type="text" defaultValue={photo} name="photo" placeholder="Product Photo URL" className="input input-bordered" required />
          <label className="label">
          
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn b bg-gradient-to-r from-pink-200 to-blue-200">Update Poduct</button>
        </div>
      </form>
        </div>
    );
};

export default Update;