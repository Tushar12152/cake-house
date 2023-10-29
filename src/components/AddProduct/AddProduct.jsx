
const AddProduct = () => {

    const AddData=e=>{
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

        console.log(product)
    }


    return (
        <div>
            <form onSubmit={AddData} className="card-body">


            <div className="form-control">
          <label className="label">
           
          </label>
         <div className="flex gap-6 w-full">
         <input type="text" name="productName" placeholder="Product Name" className="input input-bordered w-[50%]" required />
         
   
    
         <input type="text" name="category" placeholder="Product Category" className="input input-bordered w-[50%]" required />
      
         </div>
        </div>



        <div className="form-control">
          <label className="label">
           
          </label>
         <div className="flex gap-6 w-full">
         <input type="text" name="price" placeholder="Price" className="input input-bordered w-[50%]" required />
         
   
    
         <input type="text" name="description" placeholder="Description" className="input input-bordered w-[50%]" required />
      
         </div>
        </div>



        <div className="form-control">
          <label className="label">
          
          </label>
          <input type="text" name="photo" placeholder="Product Photo URL" className="input input-bordered" required />
          <label className="label">
          
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn b bg-gradient-to-r from-pink-200 to-blue-200">Add Poduct</button>
        </div>
      </form>
        </div>
    );
};

export default AddProduct;