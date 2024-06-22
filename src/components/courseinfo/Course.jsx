import React, { useState, useEffect } from 'react';
import './course.css';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { productRows } from './courseinfo';
import Pagination from '@mui/material/Pagination'; // Import Pagination from Material UI

export default function Course() {
  const [data, setData] = useState(productRows);
  const [searchCourse, setSearchCourse] = useState('');
  const [searchInstructor, setSearchInstructor] = useState('');
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1200);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 4; // Adjust this number as needed

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Course',
      headerName: 'Course Name',
      width: 250,
      renderCell: (params) => (
        <Link to={`/coursedetails/${params.row.id}`} className="course-link">
          {params.value}
        </Link>
      ),
    },
    { field: 'Instructor', headerName: 'Instructor', width: 160 },
    
    { field: 'Rating', headerName: 'Rating', width: 120 },
    {
      field: 'Skills',
      headerName: 'Skills',
      width: 400,
    },
  ];

  const getRowClassName = (params) => {
    return params.row.id === data[0].id ? 'headerRow' : '';
  };

  const filteredCourses = data.filter((course) => {
    return (
      course.Course.toLowerCase().includes(searchCourse.toLowerCase()) &&
      course.Instructor.toLowerCase().includes(searchInstructor.toLowerCase())
    );
  });

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="course">
      <h1 className="CourseHeading">Course List</h1>
      <div className="searchBars">
        <input
          type="text"
          placeholder="Search by Course"
          value={searchCourse}
          onChange={(e) => setSearchCourse(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Instructor"
          value={searchInstructor}
          onChange={(e) => setSearchInstructor(e.target.value)}
        />
      </div>
      {isMobileView ? (
        <>
          <div className="course-box-container">
            {currentCourses.map((course) => (
              <div key={course.id} className="course-box">
                <h3>{course.Course}</h3>
                <p><strong>Instructor:</strong> {course.Instructor}</p>
                <p><strong>Duration:</strong> {course.Duration}</p>
                <p><strong>Rating:</strong> {course.Rating}</p>
                <p><strong>Skills:</strong> {course.Skills}</p>
                <Link to={`/coursedetails/${course.id}`} className="course-link">
                  View Details →
                </Link>
              </div>
            ))}
          </div>
          <Pagination
            count={Math.ceil(filteredCourses.length / coursesPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            className="pagination"
          />
        </>
      ) : (
        <DataGrid
          rows={filteredCourses}
          disableSelectionOnClick
          getRowClassName={getRowClassName}
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      )}
    </div>
  );
}
