// src/redux/actions.js
export const ENROLL_COURSE = 'ENROLL_COURSE';

export const enrollCourse = (course) => ({
  type: ENROLL_COURSE,
  payload: course,
});


export const markCourseCompleted = (courseId) => ({
  type: 'MARK_COURSE_COMPLETED',
  payload: courseId,
});
