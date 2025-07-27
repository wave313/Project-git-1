import React, { useState } from "react";
import CourseList from "./components/CourseList";
import CourseDetail from "./components/CourseDetail";
import courses from "./data/courses";

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
