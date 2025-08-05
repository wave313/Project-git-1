import React from "react";
import { Link } from "react-router-dom";

const courseList = [
  { id: 1, title: "คณิตศาสตร์พื้นฐาน" },
  { id: 2, title: "ภาษาอังกฤษเบื้องต้น" },
  { id: 3, title: "วิทยาศาสตร์ทั่วไป" },
  { id: 4, title: "ประวัติศาสตร์ไทย" },
  { id: 5, title: "การเขียนโปรแกรม Python" },
  { id: 6, title: "ฟิสิกส์เบื้องต้น" },
  { id: 7, title: "ชีววิทยา" },
  { id: 8, title: "เคมี" },
  { id: 9, title: "เศรษฐศาสตร์" },
  { id: 10, title: "จิตวิทยาเบื้องต้น" },
];

const Courses = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">รายวิชาทั้งหมด</h2>
      <ul>
        {courseList.map((course) => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`} className="text-blue-500">
              {course.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
