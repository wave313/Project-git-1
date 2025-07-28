import React from "react";

const CourseDetail = ({ course, onBack }) => {
  return (
    <div>
      <button onClick={onBack} className="mb-4 bg-gray-300 px-4 py-2 rounded">
        กลับ
      </button>

      <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
      <p className="mb-4">{course.description}</p>

      {/* ✅ วิดีโอ YouTube ฝัง */}
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          width="100%"
          height="500"
          src={course.videoUrl}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default CourseDetail;
