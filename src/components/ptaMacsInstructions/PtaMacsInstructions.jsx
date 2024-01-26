import React from "react";
import Topbar from "../topbar/Topbar";
import pdf from "../../assets/pdf/Instructions.pdf";

const PtaMacsInstructions = () => {
  return (
    <>
      <div className="hidden sm:flex">
        <Topbar />
      </div>
      <div className=" w-full h-[calc(100vh-76px)">
        <div className="h-[24px]"></div>
        <div className="flex text-4xl text-[white] mt-[100px] mb-[6px] justify-center">
          PTA MACS Instructions
        </div>
        <div className="flex text-xl text-[white] mb-[24px] justify-center">
          (Downloadable and Printable)
        </div>
        <iframe
          src={pdf}
          width="90%"
          height="1366px"
          className="mx-auto 1200px:w-[80%] 1800px:w-[60%]"
        />
      </div>
    </>
  );
};

export default PtaMacsInstructions;
