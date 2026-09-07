import React from "react";

const SignIn = () => {
  return (
    <div className=" flex min-h- py-30 items-center justify-center bg-amber-100 px-4">
      <div className="w-full max-w-md    rounded-2xl border border-dashed border-amber-600 shadow-lg  px-2">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Sign In
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Welcome back! Please sign in to your account.
        </p>

        <form className="space-y-5">
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" required/>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <input type="password" id="password"  name="password" placeholder="Enter your password" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              required/>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4"
              />
              <span>Remember me</span>
            </label>

            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition duration-300"
          >
            Sign In
          </button>

        </form>

        {/* Sign Up */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </a>
        </p>

      </div>
    </div>
  );
};

export default SignIn;