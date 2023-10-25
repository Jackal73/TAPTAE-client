import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { Col, Row } from "reactstrap";
import hero1 from "../../assets/images/p-therapy.jpg";
import heroPic from "../../assets/images/about-banner.webp";

export default function AboutUs() {
  return (
    <>
      <Topbar />
      <div className="flex w-full">
        <Leftbar />
        <div className="flex-[6]">
          <div className="mt-[30px] px-[25px] pb-[25px]">
            <Row>
              <Col>
                <img className="h-48 w-full object-cover mb-4 rounded-sm" src={heroPic} alt="" />
              </Col>
            </Row>
            <div className="rounded-sm bg-[#0000000d] pt-[16px] pb-[32px] px-[16px] border-b-[2px] border-[#999]">
              <Row className="z-[99]">
                <Col className="flex text-[#000] ">
                  <h1 className="text-left text-2xl font-normal text-[#05055edb] mt-0 mb-[8px] mx-auto">
                    Advancing Clinical and Academic Partnership in PTA Education
                    <p className="text-base font-normal leading-6 text-black rounded mt-[16px] mb-0 mx-auto">
                      The Texas Alliance of Physical Therapist Assistant Educators (TAPTAE) consists of 28 academic
                      programs of physical therapist assistant education, represented by program directors, academic
                      coordinators of clinical education and faculty from the member institutions.
                    </p>
                  </h1>
                  <img
                    className="w-auto h-40 object-cover rounded-full border-[2px] border-[#ccc]"
                    src={hero1}
                    alt=""
                  />
                </Col>
              </Row>
              <hr className="w-full border border-[#999] my-[16px] mx-[auto]" />

              <Row className="z-[99]">
                <h1 className="text-left text-2xl font-normal text-[#05055edb] mt-0 mb-[8px] mx-auto">Focus</h1>
                <p className="text-base font-normal leading-6 text-black rounded mt-[16px] mb-0 pb-[16px] mx-auto">
                  Here, you will find a central source of information about the many Physical Therapist Assistant
                  programs in Texas. TAPTAE developed the Physical Therapist Assistant Manual for the Assessment of
                  Clinical Skills (PTA MACS) and meets bi-annually to discuss current teaching methodology,
                  accreditation, and TAPTAE policy and procedures.
                </p>
              </Row>

              <hr className="w-full border border-[#999] my-[16px] mx-[auto]" />

              <Row className="z-[99]">
                <h1 className="text-left text-2xl font-normal text-[#05055edb] mt-0 mb-[8px] mx-auto">Incorporation</h1>
                <p className="text-base font-normal leading-6 text-black rounded mt-[16px] mb-0 mx-auto">
                  The Texas Alliance of Physical Therapist Assistant Educators (TAPTAE) is the result of a collaborative
                  arrangement among the physical therapist assistant programs in the state.
                </p>
              </Row>

              {/* <hr className="w-full border border-[#999] my-[16px] mx-[auto]" /> */}

              {/* <Row className="z-[99]">
                <h1 className="text-left text-2xl font-normal text-[#05055edb] mt-0 mb-[8px] mx-auto">Members List</h1>
                <a href="/members" className="text-lg pl-2 text-[blue] hover:underline">
                  Click here for Consortium member and contact information.
                </a>
              </Row> */}
            </div>

            {/* <hr className="w-full border-[2px] border-[#999] my-[32px] mx-auto" /> */}
          </div>
        </div>
      </div>
    </>
  );
}
