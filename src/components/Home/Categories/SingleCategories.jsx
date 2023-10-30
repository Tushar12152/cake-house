import PropTypes from "prop-types";

const SingleCategories = ({ category }) => {
  const { img, categories } = category;
  return (
    <div  data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <div className="card w-96 bg-pink-100 shadow-xl">
        <figure>
          <img
            className="w-full h-[300px] p-5"
            src={img}
            alt="Cake"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-2xl text-center">{categories}</h2>
         
         
        </div>
      </div>
    </div>
  );
};

SingleCategories.propTypes = {
  category: PropTypes.object.isRequired,
};

export default SingleCategories;
