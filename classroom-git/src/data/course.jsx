const courses = [
  {
    id: 1,
    title: "การเขียนโปรแกรมเบื้องต้น",
    description: "เรียนรู้พื้นฐานการเขียนโปรแกรมด้วยภาษา C, Python และแนวคิดเชิงตรรกะ",
    videoUrl: "https://www.youtube.com/embed/8PopR3x-VMY",
    lessons: ["ตัวแปรและประเภทข้อมูล", "คำสั่งเงื่อนไข", "ลูปและฟังก์ชัน"]
  },
  {
    id: 2,
    title: "โครงสร้างข้อมูลและอัลกอริทึม",
    description: "เข้าใจโครงสร้างข้อมูล เช่น อาร์เรย์ ลิงก์ลิสต์ สแต็ก คิว และการค้นหา/เรียงลำดับ",
    videoUrl: "https://www.youtube.com/embed/RBSGKlAvoiM",
    lessons: ["อาร์เรย์", "สแต็กและคิว", "Bubble Sort และ Binary Search"]
  },
  {
    id: 3,
    title: "ระบบฐานข้อมูล",
    description: "ศึกษาแนวคิดฐานข้อมูล SQL และการออกแบบฐานข้อมูล",
    videoUrl: "https://www.youtube.com/embed/HXV3zeQKqGY",
    lessons: ["ตารางและความสัมพันธ์", "คำสั่ง SQL", "การออกแบบฐานข้อมูล"]
  },
  {
    id: 4,
    title: "ระบบเครือข่ายเบื้องต้น",
    description: "เรียนรู้พื้นฐานของระบบเครือข่าย การเชื่อมต่อ และอุปกรณ์",
    videoUrl: "https://www.youtube.com/embed/3QhU9jd03a0",
    lessons: ["ประเภทเครือข่าย", "IP Address", "Routing และ Switching"]
  },
  {
    id: 5,
    title: "การพัฒนาเว็บไซต์",
    description: "ฝึกสร้างเว็บไซต์ด้วย HTML, CSS และ JavaScript",
    videoUrl: "https://www.youtube.com/embed/pQN-pnXPaVg",
    lessons: ["HTML Layout", "CSS Styling", "JavaScript Events"]
  },
  {
    id: 6,
    title: "ความมั่นคงปลอดภัยระบบคอมพิวเตอร์",
    description: "ศึกษาเกี่ยวกับภัยคุกคามทางไซเบอร์ การป้องกัน และความปลอดภัยของข้อมูล",
    videoUrl: "https://www.youtube.com/embed/inWWhr5tnEA",
    lessons: ["มัลแวร์", "Firewall และ Antivirus", "Social Engineering"]
  },
  {
    id: 7,
    title: "การเขียนโปรแกรมเชิงวัตถุ (OOP)",
    description: "เรียนรู้แนวคิด OOP ด้วยภาษา Java หรือ Python",
    videoUrl: "https://www.youtube.com/embed/SS-9y0H3Si8",
    lessons: ["Class และ Object", "Encapsulation", "Inheritance และ Polymorphism"]
  },
  {
    id: 8,
    title: "การวิเคราะห์และออกแบบระบบ",
    description: "ศึกษา SDLC, การวิเคราะห์ความต้องการ และ UML",
    videoUrl: "https://www.youtube.com/embed/NH9dC8uT0bQ",
    lessons: ["SDLC", "Use Case Diagram", "ER Diagram และ DFD"]
  },
  
  {
    id: 9,
    title: "การพัฒนาแอปพลิเคชันมือถือ",
    description: "เรียนรู้การพัฒนาแอปบน Android และ iOS ด้วย React Native",
    videoUrl: "https://www.youtube.com/embed/0-S5a0eXPoc",
    lessons: ["React Native Basics", "Components and State", "Navigation"]
  },
  {
    id: 10,
    title: "การวิเคราะห์ข้อมูลและ Machine Learning",
    description: "ศึกษาแนวคิดพื้นฐานของการวิเคราะห์ข้อมูลและ Machine Learning ด้วย Python",
    videoUrl: "https://www.youtube.com/embed/ukzFI9rgwfU",
    lessons: ["Data Analysis with Pandas", "Machine Learning Basics", "Model Evaluation"]
  }
];

export default courses;
