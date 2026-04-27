import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<any>(null);

  // Check if user is already logged in
  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session ? (session as any).user : null);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login Failed: " + error.message);
    } else {
      setUser(data.user);
    }
  };

  // 1. "Not going to further page" fix: Conditional Rendering
  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <h1 className="text-2xl font-bold">Welcome to the further page (Dashboard)!</h1>
        <button 
          onClick={() => supabase.auth.signOut().then(() => setUser(null))}
          className="ml-4 p-2 bg-red-500 text-white rounded"
        >Logout</button>
      </div>
    );
  }

  // 2. Login Authentication UI
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-6 font-bold text-center">HawkEye Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-6 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
