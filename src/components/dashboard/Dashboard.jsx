// src/components/Dashboard.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markCourseCompleted } from '../Redux/actions';
import './dashboard.css';

const Dashboard = () => {
  const enrolledCourses = useSelector((state) => state.enrolledCourses);
  const dispatch = useDispatch();

  const handleCompleteCourse = (courseId) => {
    dispatch(markCourseCompleted(courseId));
  };

  return (
    <div>
      <div className="enrolled">
        <h1 className="enrolledHeading">Enrolled Courses</h1>
        {enrolledCourses.length === 0 ? (
          <p>No courses enrolled yet.</p>
        ) : (
          <ul className="course-list">
            {enrolledCourses.map((course) => (
              <li key={course.id} className={`course-item ${course.completed ? 'completed' : ''}`}>
                <h2>{course.Course}</h2>
                <p><strong>Instructor:</strong> {course.Instructor}</p>
                <p><strong>Duration:</strong> {course.Duration}</p>
                <p><strong>Schedule:</strong> {course.Schedule}</p>
                <p><strong>Location:</strong> {course.Location}</p>
                <div className="progress-container">
                  <p><strong>Progress:</strong> {course.completed ? '100%' : `${course.progress}%`}</p>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: course.completed ? '100%' : `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                <button
                  onClick={() => handleCompleteCourse(course.id)}
                  disabled={course.completed}
                  className="mark"
                >
                  {course.completed ? 'Completed' : 'Mark as Completed'}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
