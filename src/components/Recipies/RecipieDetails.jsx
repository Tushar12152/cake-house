
import PropTypes from 'prop-types';

const RecipieDetails = ({data}) => {
    const {description,name,photo,price}=data

    return (
        <div  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p>Price: {price} Taka</p>
    <div className="card-actions">
    
    </div>
  </div>
</div>
        </div>
    );
};

RecipieDetails.propTypes = {
    data:PropTypes.object
};

export default RecipieDetails;