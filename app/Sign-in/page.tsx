"use client";

import React, { FormEvent } from "react";

interface FormDataType {
  email: string;
  password: string;
}

const SignIn = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data: FormDataType = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    console.log("Sign in submitted:", data);
    e.currentTarget.reset();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-amber-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-dashed border-amber-600 px-6 py-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Sign In
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Welcome Back !
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-amber-600 py-3 font-semibold text-white transition duration-300 hover:bg-amber-700"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a
            href="/SignUp"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;