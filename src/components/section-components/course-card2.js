import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course, tran }) => {
  
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
        <Link to={`/course-details/${course.course_id}/${course.course_name}`}>
          <div className="single-course-inner">
            <div className="thumb text-center">
              {/* <img src={course.course_cover} alt="img" height="200px" /> */}
              <img src={`https://dot-api.mpwt.gov.la/media_file/file/?f=${course?.course_cover}`} style={{objectFit: 'cover'}} width={370} height={250}  alt="img" />
            </div>
            <div className="details">
              <div className="details-inner">
                <div className="emt-user">
                  <i className="fa fa-user me-2" />
                  <span className="align-self-center">{course.user_update ? course.user_update : course.user_create}</span>
                </div>
                <h6>
                  {course.course_name}
                </h6>
              </div>
              <div className="emt-course-meta">
                <div className="row">
                  <div className="col-6">
                    <div className="rating">
                      {tran('lastupdate')}: {gatFDate(course.udp_date)}
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="price text-right">
                      {tran('coursecode')}: <span>{course.course_code}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CourseCard;
