import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL, API_HEADERS } from '../../appConfig';
import { useTranslation } from 'react-i18next';

const CourseCard = ({ course, tran }) => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  // const gatFDate = (dateData) => {
	// 	const date = new Date(dateData);
	// 	const day = date.getDate();
	// 	const month = date.getMonth();
	// 	const year = date.getFullYear();
	// 	return `${day}/${month}/${year - 2000}`;
	// };

  return (
    <>
      <div className="col-lg-4 col-md-6">
        <Link to={`/course-details/${course.course_id}/${currentLang == 'lo' ? course.course_name_lo : course.course_name_eng}`}>
          <div className="single-course-inner">
            <div className="thumb text-center">
              {/* <img src={course.course_cover} alt="img" height="200px" /> */}
              <img src={`${API_BASE_URL}/media_file/file/?f=${course?.course_cover}`} style={{objectFit: 'cover'}} width={370} height={200} alt=""/>
            </div>
            <div className="details">
              <div className="details-inner">
                {/* <div className="emt-user">
                  <i className="fa fa-user me-2" />
                  <span className="align-self-center">{course.user_update ? course.user_update : course.user_create}</span>
                </div> */}
                <h6>
                  {currentLang == 'lo' ? course.course_name_lo : course.course_name_eng}
                </h6>
              </div>
              <div className="emt-course-meta">
                <div className="row">
                  <div className="col-6">
                    <div className="price text-start">
                    {tran('coursecode')}: <span>{course.course_code}</span>
                    </div>
                  </div>
                  <div className="col-6">
                    {/* <div className="rating">
                      {tran('lastupdate')}: {gatFDate(course.udp_date)}
                    </div> */}
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
