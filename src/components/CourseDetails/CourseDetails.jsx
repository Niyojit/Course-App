import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { enrollCourse } from '../Redux/actions';
import { productRows } from '../courseinfo/courseinfo.js';
import './coursedetails.css';

const CourseDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.enrolledCourses);
  const course = productRows.find((course) => course.id === parseInt(id, 10));

  if (!course) {
    return <div>Course not found</div>;
  }

  const isEnrolled = enrolledCourses.some(enrolledCourse => enrolledCourse.id === course.id);

  const handleEnroll = () => {
    dispatch(enrollCourse(course));
  };

  return (
    <div className="course-details">
      <div className="coursedetails1">

      <div className="coursedetailscontent">
      <h2 className="courseDetailsHeading">{course.Course}</h2>

      <p><strong>Instructor:</strong> {course.Instructor}</p>
      <p><strong>Description:</strong> {course.Description}</p>
      <p><strong>Enrollment Status:</strong> {course.EnrollmentStatus}</p>
      {isEnrolled ? (
        <div>
          <p className="enrolled-message">Already Enrolled</p>
          <Link to="/dashboard" className="dashboardLink">
            <button className="dashboardbtn">Go to Dashboard →</button>
          </Link>
        </div>
      ) : (
        <button onClick={handleEnroll} className="detailsbtn">Enroll</button>
      )}
      </div>
      <div className="coursedetailsothercontent">

      <p><strong>Duration:</strong> {course.Duration}</p>
      <p><strong>Schedule:</strong> {course.Schedule}</p>
      <p><strong>Location:</strong> {course.Location}</p>
      <p><strong>Prerequisites:</strong> {course.Prerequisites}</p>
      <p><strong>Rating:</strong> {course.Rating}</p>
      <p><strong>Skills:</strong> {course.Skills}</p>
      </div>
      </div>
      <div className="courseDetailsmaincontent">

      <h3>Syllabus</h3>
      <ul>
        {course.syllabus.map((week, index) => (
          <li key={index}>
            <strong>Week {week.week}:</strong> {week.topic}
            <p>{week.content}</p>
          </li>
        ))}
      </ul>

      <h3 className="enrolledheading">Enrolled Students</h3>
      <ul className="enrolled">
        {course.students.map((student) => (
          <li key={student.id}>
            <strong>{student.name}</strong> ({student.email})
          </li>
        ))}
      </ul>
      </div>

      
    </div>
  );
};

export default CourseDetails;
