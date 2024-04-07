import React from "react";

const Slugs = ({ params }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-700 text-slate-200 flex-col gap-20">
      <p>Details page Name:{params.slug}</p>
      <p>adrress:something</p>
    </div>
  );
};

export default Slugs;
