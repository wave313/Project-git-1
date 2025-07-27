import React, { useState } from "react";
import CourseList from "./components/CourseList.jsx";
import CourseDetail from "./components/CourseDetail.jsx";
import courses from "./data/course.jsx";

const App = () => {
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

export default App;