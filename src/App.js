import './App.css';
import Home from './components/Home/Home';
import Sidebar from './components/sidebar/sidebar';
import Topbar from './components/topbar/topbar';
import Course from './components/courseinfo/Course';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Topbar onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course/>} />
        <Route path="/CourseDetails/:id" element={<CourseDetails/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
