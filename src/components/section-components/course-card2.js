import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {

  const gatFDate = (dateData) => {
		const date = new Date(dateData);
		const day = date.getDate();
		const month = date.getMonth();
		const year = date.getFullYear();
		return `${day}/${month}/${year - 2000}`;
	};
  return (
    <>
      <div className="col-md-6">
        <div className="single-course-inner">
          <div className="thumb text-center">
            {/* <img src={course.course_cover} alt="img" height="200px" /> */}
            <img src={process.env.PUBLIC_URL+"/assets/img/blog/1.png"} alt="img" />
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
                <span className="align-self-center">{course.user_update ? course.user_update : course.user_create}</span>
              </div>
              <h6>
                <Link to="/course-details">{course.course_name}</Link>
              </h6>
            </div>
            <div className="emt-course-meta">
              <div className="row">
                <div className="col-6">
                  <div className="rating">
                    update: {gatFDate(course.udp_date)}
                  </div>
                </div>
                <div className="col-6">
                  <div className="price text-right">
                    Code: <span>{course.course_code}</span>
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
