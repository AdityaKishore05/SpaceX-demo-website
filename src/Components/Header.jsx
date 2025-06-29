import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { X, User, Lock } from 'lucide-react';

const Header = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAuthPopup = (signUp = false) => {
    setIsSignUp(signUp);
    setIsAuthOpen(true);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const handleAuth = () => {
    const mode = isSignUp ? "Sign-up" : "Sign-in";
    alert(`${mode} attempt with email: ${email}`);
    setEmail("");
    setPassword("");
    setUsername("");
    setIsAuthOpen(false);
  };

  return (
    <header className="flex justify-between items-center md:p-7 p-5 pt-6 select-none">
      <div
        className="absolute top-[3%] left-0 right-0 h-10 md:h-14
        shadow-[0_0_20px_10px_rgba(255,255,255,0.7)] -z-10"
      ></div>
      <div
        className="absolute top-[100%] left-0 right-0 h-10 md:h-14
        shadow-[0_0_20px_10px_rgba(255,255,255,0.7)] -z-10"
      ></div>

      <svg version="1.1" x="0px" y="0px" viewBox="0 0 350 60" aria-hidden="false" className="w-32 md:w-38">
        <title>SpaceX Logo</title>
        <g class="letter_s">
          <path class="fill-white" d="M37.5,30.5H10.9v-6.6h34.3c-0.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7,0-9,2.1-9,6.7v4.9c0,4,3.4,6.3,8.4,6.3h26.9v7H1.5
          c0.9,3.8,3.8,5.8,9,5.8h27.1c5.7,0,8.5-2.2,8.5-6.9v-4.9C46.1,33.1,42.8,30.8,37.5,30.5z"></path>
        </g>
        <g class="letter_p">
          <path class="fill-white" d="M91.8,18.6H59v30.7h9.3V37.5h24.2c6.7,0,10.4-2.3,10.4-7.7v-3.4C102.8,21.4,98.6,18.6,91.8,18.6z M94.8,28.4
          c0,2.2-0.4,3.4-4,3.4H68.3l0.1-8h22c4,0,4.5,1.2,4.5,3.3V28.4z"></path>
        </g>
        <g class="letter_a">
          <polygon class="fill-white" points="129.9,17.3 124.3,24.2 133.8,37.3 114,37.3 109.1,42.5 137.7,42.5 142.6,49.3 153.6,49.3 	"></polygon>
        </g>
        <g class="letter_c">
          <path class="fill-white" d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3
          c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z"></path>
        </g>
        <g class="letter_e">
          <polygon class="fill-white" points="228.3,43.5 228.3,34.1 247,34.1 247,28.9 218.9,28.9 218.9,49.3 260.4,49.3 260.4,43.5 	"></polygon>
          <rect class="fill-white" x="219.9" y="18.6" width="41.9" height="5.4"></rect>
        </g>
        <g class="letter_x">
          <path class="fill-white" d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z"></path>
          <path class="fill-white" d="M308.8,34.3c-2.5,1.7-5,3.6-7.4,5.4l13,9.5h14.7L308.8,34.3z"></path>
        </g>
        <g class="letter_swoosh">
          <path class="fill-white" d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z"></path>
        </g>
      </svg>

      <nav data-aos="zoom-out"os-easing="linear"
     data-aos-duration="1500" className="hidden xl:flex items-center justify-center gap-12 px-5">
        {["FALCON 9", "FALCON HEAVY", "DRAGON", "STARSHIP", "HUMAN SPACEFLIGHT"].map(t => (
          <a key={t} href="#" className="text-lg tracking-wider relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:duration-300">
            {t}
          </a>
        ))}
      </nav>

      <button onClick={() => toggleAuthPopup(false)} className="hidden xl:block bg-[#b7b7b7] text-black py-2 px-5 rounded-full font-medium transition hover:bg-white z-50 cursor-pointer">
        SIGN IN
      </button>

      <button onClick={toggleMobileMenu} className="xl:hidden text-3xl p-2 z-50"><IoIosMenu /></button>

      <div className={`fixed top-16 bottom-0 left-0 right-0 bg-transparent backdrop-blur-sm h-screen z-30 xl:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <nav className="flex flex-col justify-center gap-10 items-center p-10">
          {/* mobile auth buttons */}
          <button onClick={() => toggleAuthPopup(false)} className="w-40 rounded-md border border-white py-2 text-white hover:bg-white hover:text-black transition cursor-pointer">Sign in</button>
          {["FALCON 9", "FALCON HEAVY", "DRAGON", "STARSHIP", "HUMAN SPACEFLIGHT"].map(t => (
            <a key={t} href="#" className="text-xl tracking-wider relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:duration-300">
              {t}
            </a>
          ))}
        </nav>
      </div>

      {isAuthOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-transparent bg-opacity-70 backdrop-blur" onClick={() => setIsAuthOpen(false)}></div>

          <div className="bg-transparent bg-opacity-70 backdrop-blur rounded-lg w-full max-w-md mx-4 p-6 pb-10 z-10 relative shadow-[0_0_5px_3px_white]">
            <button onClick={() => setIsAuthOpen(false)} className="absolute top-4 right-4 text-white border-2 rounded-lg p-1.5 border-white hover:bg-white hover:text-black transition cursor-pointer"><X size={20} /></button>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white ">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
            </div>

            <div className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <label htmlFor="username" className="block text-sm font-medium text-white">Username</label>
                  <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-4 py-2 border border-white rounded-md" placeholder="Your username" />
                </div>
              )}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><User size={16} className="text-white" /></div>
                  <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="pl-10 w-full px-4 py-2 border border-white rounded-md" placeholder="you@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Lock size={16} className="text-white" /></div>
                  <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="pl-10 w-full px-4 py-2 border border-white rounded-md" placeholder="••••••••" />
                </div>
              </div>
              {!isSignUp && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input id="remember-me" type="checkbox" className="h-4 w-4" />
                    <label htmlFor="remember-me" className="ml-2 text-sm text-white">Remember me</label>
                  </div>
                  <button className="text-sm font-medium text-white hover:underline cursor-pointer">Forgot password?</button>
                </div>
              )}
              <button onClick={handleAuth} className="w-full py-2 px-4 border rounded-md text-sm font-medium text-white border-white hover:bg-white hover:text-black transition cursor-pointer">{isSignUp ? 'Sign up' : 'Sign in'}</button>
            </div>

            <p className="mt-6 text-center text-sm text-white">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button onClick={() => setIsSignUp(!isSignUp)} className="font-medium underline hover:text-gray-300 cursor-pointer">
                {isSignUp ? 'Sign in' : 'Sign up'}
              </button>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
