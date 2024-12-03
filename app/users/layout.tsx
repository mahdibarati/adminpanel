import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p className="w-full text-2xl text-center p-3 my-3 text-white bg-black">
        user nav
      </p>
      {children}
    </div>
  );
};

export default Layout;
