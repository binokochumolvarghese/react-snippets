// src/App.js
import React from 'react';
import { auth, provider } from './components/firebase'
import { signInWithPopup, signOut } from "firebase/auth";

function App() {
  const [user, setUser] = React.useState(null);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result)
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  return (
    <div className=" flex flex-col items-center justify-start min-h-screen bg-gray-100 p-10">
      <h1>Google SSO with React</h1>
      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2>Welcome, {user.displayName}</h2>
          <img src={user.photoURL} alt={user.displayName} />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <button className='text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center' onClick={signInWithGoogle}>Sign In with Google</button>
      )}
    </div>
  );
}

export default App;
