import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { Col, Row } from "reactstrap";

export default function Members() {
  return (
    <>
      <Topbar />
      <div className="flex max-w-[1400px] mx-auto">
        {/* <Leftbar /> */}
        <div className="flex-[8]">
          <div className="mt-[30px] px-[25px] pb-[25px]">
            <h1 className="flex font-bold text-center italic justify-center text-4xl text-blue-700 ">
              ~ Contact Us ~
            </h1>
            {/* <hr className="w-full border-b-[1px] border-b-[#eee] my-[16px] mx-[auto]" /> */}
            <div className="pt-[16px] pb-[32px] px-[16px]">
              <Row className="mb-2 mt-6">
                <h2 className="flex font-semibold text-2xl text-blue-700 justify-center mb-[25px]">
                  For any questions or comments, please feel free to contact us:
                </h2>
              </Row>
              <Row className="flex mb-3 justify-center">
                <Col className="flex w-[30%] text-xl text-blue-700 border-b border-b-blue-700 font-bold justify-start">
                  Name
                </Col>
                <Col className="flex w-[30%] text-xl text-blue-700 border-b border-b-blue-700 font-bold justify-start">
                  Email
                </Col>
              </Row>
              <Row className="flex mb-3 justify-center">
                <a
                  href="mailto:blender@yahoo.com"
                  className="flex w-[30%] 1300px:text-xl 1000px:text-lg 800px:text-sm text-xs text-[black] font-semibold justify-start  hover:underline hover:text-blue-700"
                >
                  Michele Voight (Program Director)
                </a>
                <Col className="flex w-[30%] 1300px:text-xl 1000px:text-lg 800px:text-sm text-xs text-[black] justify-start">
                  michele.voight@hccs.edu
                </Col>
              </Row>
            </div>
            <Row>
              <Col>
                <h1 className="flex justify-center text-3xl text-orange-500 mt-[24px]">
                  ** Page under construction **
                </h1>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
