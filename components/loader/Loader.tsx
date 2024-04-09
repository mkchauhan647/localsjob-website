import React from "react";
import { LuLoader2 } from "react-icons/lu";
const Loader = () => {
  return (
    <div className="text-black flex min-h-screen items-center justify-center min-w-[100vw] animate-spin animate-infinite">
      <LuLoader2 />
    </div>
  );
};

export default Loader;
