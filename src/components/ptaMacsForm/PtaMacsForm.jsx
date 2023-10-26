import React from "react";
import Topbar from "../topbar/Topbar";
import Leftbar from "../leftbar/Leftbar";
import { Row } from "reactstrap";
import PTAmacs from "../pdf/Fillable MACS Form 3rd Edition[1069].pdf";

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
                <h2 className="text-xl font-semibold mt-0 mb-[16px] mx-0">Order your PTA MACS</h2>
              </Row>
              {/* <Form> */}
              <iframe src={PTAmacs} frameborder="0" width="100%" height="1200px"></iframe>
              {/* </Form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PtaMacsForm;
