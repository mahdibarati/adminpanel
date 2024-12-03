import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      user
      <ul className="mt-10">
        <li>
          <Link href="/users/1">user1</Link>
        </li>
        <li>
          <Link href="/users/2">user2</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
