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
              ~ Members ~
            </h1>
            {/* ============================================ */}
            <Row className="flex flex-row my-0 mx-[16px]">
              <Col className="w-6/12 flex flex-col mr-4 border items-center">
                Dr.Seuss
              </Col>
              <Col className="flex flex-col w-6/12 border items-center">
                Dr.Phil
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
