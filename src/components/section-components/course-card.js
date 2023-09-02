import { Link } from "react-router-dom";

const CourseCard = ({ blog }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="single-course-inner">
          <div className="thumb text-center">
            <img src={blog.image} alt="img" height="200px" />
          </div>
          <div className="details">
            <div className="details-inner">
              <div className="emt-user">
                <span className="u-thumb">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/author/1.png"}
                    alt="img"
                  />
                </span>
                <span className="align-self-center">{blog.category}</span>
              </div>
              <h6>
                <Link to="/course-details">{blog.title}</Link>
              </h6>
            </div>
            <div className="emt-course-meta">
              <div className="row">
                <div className="col-6">
                  <div className="rating">
                    <i className="fa fa-star" /> {blog.rating.rate}
                    <span> ({blog.rating.count})</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="price text-right">
                    Price: <span>{blog.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
