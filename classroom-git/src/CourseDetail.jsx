import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">รายละเอียดวิชา ID: {id}</h1>
      <p>รายละเอียดเนื้อหาวิชา วิดีโอ บทเรียน แบบทดสอบ ฯลฯ</p>
    </div>
  );
};

export default CourseDetail;
