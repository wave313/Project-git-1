import React from "react";
import VideoPlayer from "./VideoPlayer";

const CourseDetail = ({ course, onBack }) => {
  return (
    <div>
      <button className="mb-4 text-blue-600" onClick={onBack}>← กลับ</button>
      <h2 className="text-2xl font-bold">{course.title}</h2>
      <p className="mb-4">{course.description}</p>

      <VideoPlayer videoUrl={course.videoUrl} />

      <h3 className="mt-4 font-semibold">หัวข้อบทเรียน:</h3>
      <ul className="list-disc ml-5">
        {course.lessons.map((lesson, index) => (
          <li key={index}>{lesson}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetail;
