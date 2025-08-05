import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar = ({ user }) => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <Link to="/">หน้าแรก</Link>
      <div className="flex gap-4">
        <Link to="/courses">รายวิชา</Link>
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={() => signOut(auth)}>ออกจากระบบ</button>
          </>
        ) : (
          <>
            <Link to="/login">เข้าสู่ระบบ</Link>
            <Link to="/register">สมัคร</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
