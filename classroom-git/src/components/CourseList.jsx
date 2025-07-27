import React from "react";

const CourseList = ({ courses, onSelect }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">รายวิชา</h2>
      <ul>
        {courses.map((course) => (
          <li
            key={course.id}
            className="mb-2 p-2 border rounded cursor-pointer hover:bg-gray-100"
            onClick={() => onSelect(course)}
          >
            {course.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
