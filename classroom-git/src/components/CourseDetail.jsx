import React from "react";

const CourseDetail = ({ course, onBack }) => {
  return (
    <div>
      <button onClick={onBack} className="mb-4 bg-gray-300 px-4 py-2 rounded">
        กลับ
      </button>
      <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetail;
