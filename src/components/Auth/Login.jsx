import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="text-xl outline-none border-2 border-emerald-600 rounded-full py-3 px-5 bg-transparent placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="mt-4 text-xl outline-none border-2 border-emerald-600 rounded-full py-3 px-5 bg-transparent placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />

          <button className="mt-5 text-xl text-white outline-none border-none bg-emerald-600 rounded-full py-3 px-5 placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
