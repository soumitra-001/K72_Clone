import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[Lausanne500] flex items-center justify-center gap-2">
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50]  h-32 flex items-center px-10 border-white rounded-full uppercase">
        <Link className="text-[6vw] mt-6" to='/projects'>Project</Link>
      </div>
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-32 flex items-center px-10 border-white rounded-full uppercase">
        <Link className="text-[6vw] mt-6" to='/agence'>agence</Link>
      </div>
     
     
      {/* <Link
        to="/projects"
        className="uppercase text-white text-[6.5vw] leading-[6vw] font-semibold border-5  border-white rounded-full px-7 py-3 tracking-wide">
        Projects
      </Link>

      <Link
        to="/agence"
        className="uppercase text-white text-[6.5vw] leading-[6vw] font-semibold border-5  border-white rounded-full px-7 py-3 tracking-wide">
        Agence
      </Link> */}
    </div>
  );
};

export default HomeBottomText;
