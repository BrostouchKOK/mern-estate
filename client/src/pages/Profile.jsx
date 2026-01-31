import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-3xl font-semibold text-center my-5">Profile</h1>
      <form className="flex flex-col gap-3">
        <img
          src={currentUser.avatar}
          className="w-20 h-20 rounded-full object-cover self-center cursor-pointer"
          alt="profile"
        />
        <input
          type="text"
          placeholder="username"
          id="username"
          className="p-3 rounded-lg border"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="p-3 rounded-lg border"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="p-3 rounded-lg border"
        />
        <button className="uppercase p-3 bg-blue-600 text-white cursor-pointer hover:opacity-95 
        disabled:opacity-80 rounded-lg">
          update
        </button>
      </form>
      <div className="mt-4 flex justify-between">
        <span className="text-red-600 cursor-pointer hover:underline">Delete Account</span>
        <span className="text-red-600 cursor-pointer hover:underline">Sign out</span>
      </div>
    </div>
  );
};

export default Profile;
