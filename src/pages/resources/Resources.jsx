import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { Col, Row } from "reactstrap";
import hero1 from "../../assets/images/p-therapy.jpg";
import hero2 from "../../assets/images/p-therapy-2.jpg";
import hero3 from "../../assets/images/p-therapy-3.jpg";

export default function Resources() {
  return (
    <>
      <Topbar />
      <div className="flex w-full">
        <Leftbar />
        <div className="flex-[6]">
          <div className="mt-[30px] px-[25px] pb-[25px]">
            <div className="rounded-sm bg-[#0000000d] pt-[16px] pb-[32px] px-[16px] border-b-[2px] border-b-[#999]">
              <Row>
                <Col className="flex text-[black]">
                  {/* <h1 className="text-left text-2xl font-normal mt-0 mb-[8px] mx-auto text-[#05055edb]">
                    Resources for Site Coordinators of Clinical Education (SCCEs)
                    <ul className="mt-[16px]">
                      <li>
                        <a href="#!" className="text-lg pl-2 text-[blue] hover:underline">
                          Master Calendar
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg pl-2 text-[blue] hover:underline">
                          Master Calendar
                        </a>
                      </li>
                    </ul>
                  </h1> */}
                </Col>
              </Row>
              <hr className="w-full border-b-[1px] border-b-[#eee] my-[16px] mx-[auto]" />

              <Row className="">
                <Col className="flex text-[black]">
                  {/* <h1 className="text-left text-2xl font-normal mt-0 mb-[8px] mx-auto text-[#05055edb]">
                    Resources for Clinical Instructors (CIs)
                    <ul className="mt-[16px]">
                      <li>
                        <a href="#!" className="text-lg pl-2 text-[blue] hover:underline">
                          Weekly Summary Sheet
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg pl-2 text-[blue] hover:underline">
                          Weekly Summary Sheet
                        </a>
                      </li>
                    </ul>
                  </h1> */}
                </Col>
              </Row>
              <hr className="w-full border-b-[1px] border-b-[#eee] my-[16px] mx-[auto]" />

              <Row className="flex items-center mt-10 justify-evenly">
                <img className="w-auto h-48 object-cover rounded-full border-[2px] border-[#ccc]" src={hero1} alt="" />
                <img className="w-auto h-48 object-cover rounded-full border-[2px] border-[#ccc]" src={hero2} alt="" />
                <img className="w-auto h-48 object-cover rounded-full border-[2px] border-[#ccc]" src={hero3} alt="" />
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
