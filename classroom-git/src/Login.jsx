import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/courses');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">เข้าสู่ระบบ</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" placeholder="อีเมล" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="รหัสผ่าน" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">เข้าสู่ระบบ</button>
      </form>
    </div>
  );
};

export default Login;

