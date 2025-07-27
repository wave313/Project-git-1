import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CourseList from "./components/CourseList";
import CourseDetail from "./components/CourseDetail";
import courses from "./data/course";
import LoginPage from "./pages/LoginPage";
import AuthContext from "./context/AuthContext";

const Home = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">ระบบการเรียนออนไลน์</h1>
      {!selectedCourse ? (
        <CourseList courses={courses} onSelect={setSelectedCourse} />
      ) : (
        <CourseDetail course={selectedCourse} onBack={() => setSelectedCourse(null)} />
      )}
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(stored);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;