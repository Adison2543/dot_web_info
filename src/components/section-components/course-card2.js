import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from '../../appConfig';
import { useTranslation } from 'react-i18next';

const CourseCard = ({ course, tran }) => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
		setCurrentLang(i18n.language);
	}, [i18n.language]);
  console.log(course);
  return (
    <>
      <div className="col-md-6">
        <Link to={`/course-details/${course.course_id}/${currentLang == 'lo' ? course.course_name_lo : course.course_name_eng}`}>
          <div className="single-course-inner">
            <div className="thumb text-center">
              {/* <img src={course.course_cover} alt="img" height="200px" /> */}
              <img src={`${API_BASE_URL}/media_file/file/?f=${course?.course_cover}`} style={{objectFit: 'cover'}} width={370} height={250}  alt="img" />
            </div>
            <div className="details">
              <div className="details-inner">
                {/* <div className="emt-user">
                  <i className="fa fa-user me-2" />
                  <span className="align-self-center">{course.user_update ? course.user_update : course.user_create}</span>
                </div> */}
                {/* <h6>
                  {tran('cur_lang')=="lo" ? course.course_name : course.course_remark_a}
                </h6> */}
                <h6>
                  {currentLang == 'lo' ? course.course_name_lo : course.course_name_eng}
                </h6>
              </div>
              <div className="emt-course-meta">
                <div className="row">
                  {/* <div className="col-6">
                    <div className="rating">
                      {tran('lastupdate')}: {gatFDate(course.udp_date)}
                    </div>
                  </div> */}
                  <div className="col-12">
                    <div className="price">
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
