import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { Col, Row } from "reactstrap";

const UpcomingCCUs = () => {
  return (
    <>
      <Topbar />
      <div className="flex w-full">
        <Leftbar />
        <div className="flex-[6]">
          <div className="mt-[30px] px-[25px] pb-[25px]">
            <div className="bg-[#0000000d] pt-[16px] pb-[32px] px-[16px] border-b-[2px] border-b-[#999]">
              <Row className="flex justify-center">
                <h2 className="text-xl font-semibold mt-0 mb-[8px] mx-0">Upcoming CCUs</h2>
              </Row>
              <hr className="w-full border-b-[1px] border-b-[#eee] my-[16px] mx-[auto]" />
              <Row className="flex my-0 mx-[16px]">
                <Col className=" flex flex-col mr-4 border items-center">January CCU</Col>
              </Row>
              <Row className="flex my-3 mx-[16px]">
                <Col className=" flex flex-col mr-4 border items-center">February CCU</Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingCCUs;
