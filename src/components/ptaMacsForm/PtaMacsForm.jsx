import React from "react";
import Topbar from "../topbar/Topbar";
import Leftbar from "../leftbar/Leftbar";
import { Form, Row } from "reactstrap";

const PtaMacsForm = () => {
  return (
    <>
      <Topbar />
      <div className="flex w-full">
        <Leftbar />
        <div className="flex-[6]">
          <div className="mt-[30px] px-[25px] pb-[25px]">
            <div className="bg-[#0000000d] pt-[16px] pb-[32px] px-[16px] border-b-[2px] border-b-[#999]">
              <Row className="flex justify-center">
                <h2 className="text-xl font-semibold mt-0 mb-[16px] mx-0">Order PTA MACs Binder</h2>
              </Row>
              <Form>Form</Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PtaMacsForm;
