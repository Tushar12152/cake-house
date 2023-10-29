import PropTypes from "prop-types";
import { AiFillDelete } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';


const ManageProductDetail = ({ product }) => {
  const { name, category, price, description, photo } = product;

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
            <button className="btn bg-gradient-to-r from-pink-200 to-red-500"><AiFillDelete></AiFillDelete></button>

            <button className="btn bg-gradient-to-r from-pink-200 to-red-500"><GrUpdate></GrUpdate></button>
          </div>
        </div>
      </div>
    </div>
  );
};

ManageProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ManageProductDetail;
