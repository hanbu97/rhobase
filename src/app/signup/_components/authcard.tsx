import Link from "next/link";
import React from "react";

const AuthComponent = () => {

  return (
    <div className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 flex flex-col z-0">
      <div className="mb-4">
        <h1 className="text-xl font-bold mb-2 text-black">
          Create your account
        </h1>
        <p className="text-sm text-gray-800 mb-4">Continue to Rhobase Dashboard</p>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          Continue with GitHub
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mx-6 rounded-r">
          Continue with Google
        </button>
        <hr className="my-4" />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-grey-darker mr-2"
          type="text"
          placeholder="First name"
        />
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
          type="text"
          placeholder="Last name"
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-full"
          type="text"
          placeholder="Email address"
        />
      </div>
      <div className="mb-6">
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-full"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="flex items-center justify-between">
        <Link href="/organization/rhobase">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AuthComponent;
