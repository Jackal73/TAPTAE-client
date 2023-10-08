import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { Col, Row } from "reactstrap";

export default function Members() {
  return (
    <>
      <Topbar />
      <div className="flex w-full">
        <Leftbar />
        <div className="flex-[6]">
          <div className="mt-[30px] px-[25px] pb-[25px]">
            <div className="bg-[#0000000d] pt-[16px] pb-[32px] px-[16px] border-b-[2px] border-b-[#999]">
              <Row className="flex justify-center">
                <h2 className="text-xl font-semibold mt-0 mb-[16px] mx-0">Member Page</h2>
              </Row>
              {/* ============================================ */}
              <Row className="flex flex-row my-0 mx-[16px]">
                <Col className="w-6/12 flex flex-col mr-4 border items-center">Dr.Seuss</Col>
                <Col className="flex flex-col w-6/12 border items-center">Dr.Phil</Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
