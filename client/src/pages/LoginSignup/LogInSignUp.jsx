import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex justify-between items-center h-screen">
      <div className="flex">
        <div className="w-1/2 p-6 border-r">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          {/* Login form fields */}
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" className="border border-gray-400 rounded-md p-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" className="border border-gray-400 rounded-md p-2" />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">Login</button>
          </form>
        </div>
        <div className="w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          {/* Signup form fields */}
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="new-username">Username:</label>
              <input type="text" id="new-username" name="new-username" className="border border-gray-400 rounded-md p-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" className="border border-gray-400 rounded-md p-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="new-password">Password:</label>
              <input type="password" id="new-password" name="new-password" className="border border-gray-400 rounded-md p-2" />
            </div>
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
