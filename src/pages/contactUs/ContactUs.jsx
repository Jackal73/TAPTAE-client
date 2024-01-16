import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { Col, Row } from "reactstrap";

export default function Members() {
  return (
    <>
      <Topbar />
      <div className="flex w-full">
        {/* <Leftbar /> */}
        <div className="flex-[8]">
          <div className="mt-[30px] px-[25px] pb-[25px]">
            <h1 className="flex font-bold text-center italic justify-center text-4xl text-blue-700 ">
              ~ Contact Us ~
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
