import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import CourseList from "./components/CourseList";
import CourseDetail from "./components/CourseDetail";
import courses from "./data/course";
import LoginPage from "./pages/LoginPage";

const Home = () => {
  const [selectedCourse, setSelectedCourse] = React.useState(null);

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

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;
