import Link from "next/link";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <h1 className="text-2xl p-5">Admin Panel</h1>
      <ul className="pl-2">
        <li className="mb-2">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="mb-2">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
