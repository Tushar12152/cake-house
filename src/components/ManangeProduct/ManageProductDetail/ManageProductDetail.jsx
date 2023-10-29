import axios from "axios";
import PropTypes from "prop-types";
import { AiFillDelete } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import swal from "sweetalert";


const ManageProductDetail = ({ product,datas,setDatas ,refetch}) => {
  const {_id, name, category, price, description, photo } = product || {};


  const handleDelete=id=>{

    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
       

            axios.delete(`http://localhost:5002/products/${id}`)
            .then(res=>{
            //  console.log(res.data)
            if(res.data.deletedCount>0){
                swal(`${name}! Your imaginary product has been deleted!`, {
                    icon: "success", });
                    refetch()
                    // const remaining=datas?.filter(data=>data._id!==id)
                    // setDatas(remaining)
            }
           
            })


        } else {
          swal("Your imaginary product is safe!");
        }
      });




       
  }

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[200px] w-[200px]"
            src={photo}
          
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Description:{description}</p>
          <p>Category: {category}</p>
          <p> price: {price} Taka</p>
          <div className="card-actions   justify-end">
            <button onClick={()=>handleDelete(_id)} className="btn bg-gradient-to-r from-pink-200 to-red-500"><AiFillDelete></AiFillDelete></button>

            <button className="btn bg-gradient-to-r from-pink-200 to-red-500"><GrUpdate></GrUpdate></button>
          </div>
        </div>
      </div>
    </div>
  );
};

ManageProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  datas:PropTypes.array,
  setDatas:PropTypes.any,
  refetch:PropTypes.func
};

export default ManageProductDetail;
