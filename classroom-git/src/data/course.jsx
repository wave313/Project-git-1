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
    title: "แอปพลิเคชันบนมือถือ",
    description: "เรียนรู้การพัฒนา Mobile App เบื้องต้นด้วย React Native หรือ Flutter",
    videoUrl: "https://www.youtube.com/embed/Zjf0sfkOF3Q",
    lessons: ["Layout พื้นฐาน", "Component และ State", "เชื่อม API เบื้องต้น"]
  },
  {
    id: 10,
    title: "เทคโนโลยีคลาวด์และ DevOps",
    description: "ศึกษาการใช้งาน Cloud Service และแนวคิด CI/CD สำหรับงาน IT สมัยใหม่",
    videoUrl: "https://www.youtube.com/embed/YIVc4zGbh8o",
    lessons: ["Cloud คืออะไร", "Docker และ Git", "พื้นฐาน DevOps และ Pipeline"]
  }
];

export default courses;
