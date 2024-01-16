import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { Col, Row } from "reactstrap";

const UpcomingCCUs = () => {
  return (
    <>
      <Topbar />
      <div className="flex w-full">
        {/* <Leftbar /> */}
        <div className="flex-[8]">
          <div className="mt-[30px] px-[25px] pb-[25px]">
            <h1 className="flex font-bold text-center italic justify-center text-4xl text-blue-700 ">
              ~ Upcoming CCUs ~
            </h1>
            <hr className="w-full border-b-[1px] border-b-[#eee] my-[16px] mx-[auto]" />
            <Row className="flex my-0 mx-[16px]">
              <Col className=" flex flex-col mr-4 border items-center">
                January CCU
              </Col>
            </Row>
            <Row className="flex my-3 mx-[16px]">
              <Col className=" flex flex-col mr-4 border items-center">
                February CCU
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingCCUs;
