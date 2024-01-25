import React from "react";
import Topbar from "../topbar/Topbar";
import pdf from "../../assets/pdf/instructions.pdf";

const PtaMacsInstructions = () => {
  return (
    <>
      <div className="hidden sm:flex">
        <Topbar />
      </div>
      <div className="flex text-4xl text-blue-700 mt-[24px] mb-[12px] justify-center">
        PTA MACS Instructions
      </div>
      <div className="flex text-xl text-blue-700 my-[12px] justify-center">
        (Downloadable and Printable)
      </div>
      <iframe src={pdf} width="100%" height="768px" />
    </>
  );
};

export default PtaMacsInstructions;
