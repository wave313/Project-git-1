import React from "react";

const CourseList = ({ courses, onSelect }) => {
  return (
    <div className="space-y-4">
      {courses.map(course => (
        <div
          key={course.id}
          className="border p-4 rounded hover:bg-gray-100 cursor-pointer"
          onClick={() => onSelect(course)}
        >
          <h2 className="text-xl font-bold">{course.title}</h2>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
