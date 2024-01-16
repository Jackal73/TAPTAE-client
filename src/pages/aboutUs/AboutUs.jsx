import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { Col, Row } from "reactstrap";
import hero1 from "../../assets/images/p-therapy.jpg";
import heroPic from "../../assets/images/sec-cir.jpg";
import heroPic1 from "../../assets/images/hcc.jpg";

export default function AboutUs() {
  return (
    <>
      <Topbar />
      <div className="flex max-w-[1400px] mx-auto">
        {/* <Leftbar /> */}
        <div className="flex-[8]">
          <div className="mt-[32px] px-[25px] pb-[25px]">
            {/* <Row>
              <Col>
                <img
                  className="h-48 w-full object-cover mb-4 rounded-sm"
                  src={heroPic}
                  alt=""
                />
              </Col>
            </Row> */}
            <div className="mt-5">
              <h1 className="flex font-bold text-center italic justify-center text-4xl text-blue-700 ">
                ~ About Us ~
              </h1>
              <Row className="z-[99] mt-20 flex grid-cols-2 justify-around items-center">
                <Col className=" text-[#000] mr-10 w-[40%]">
                  <h1 className="text-center text-3xl font-normal text-blue-700 mb-[8px] mx-auto">
                    Advancing Clinical and Academic Partnership in PTA Education
                    <p className="text-xl font-normal leading-7 text-black mt-[16px] mb-0 mx-auto w-[75%]">
                      The Texas Alliance of Physical Therapist Assistant
                      Educators (TAPTAE) consists of 28 academic programs of
                      physical therapist assistant education, represented by
                      program directors, academic coordinators of clinical
                      education and faculty from the member institutions.
                    </p>
                  </h1>
                </Col>
                <Col className=" text-[#000]">
                  <img
                    className="w-auto h-[26rem] object-cover rounded-sm border-[0px] border-[#ccc] shadow-2xl shadow-black/80"
                    src={hero1}
                    alt=""
                  />
                </Col>
              </Row>

              <Row className="h-24"></Row>

              <Row className="z-[99] mt-20 flex grid-cols-2 justify-around items-center">
                <Col className=" text-[#000] ml-10 w-[50%]">
                  <img
                    className="w-auto h-[26rem] object-cover rounded-sm border-[0px] border-[#ccc] shadow-2xl shadow-black/80"
                    src={heroPic}
                    alt=""
                  />
                </Col>
                <Col className=" text-[#000] ml-10 w-[40%]">
                  <h1 className="text-center text-3xl font-normal text-blue-700 mb-[8px] mx-auto">
                    Focus
                    <p className="text-xl font-normal leading-7 text-black mt-[16px] mb-0 mx-auto w-[75%]">
                      Here, you will find a central source of information about
                      the many Physical Therapist Assistant programs in Texas.
                      TAPTAE developed the Physical Therapist Assistant Manual
                      for the Assessment of Clinical Skills (PTA MACS) and meets
                      bi-annually to discuss current teaching methodology,
                      accreditation, and TAPTAE policy and procedures.
                    </p>
                  </h1>
                </Col>
              </Row>

              <Row className="h-24"></Row>

              <Row className="z-[99] mt-20 flex grid-cols-2 justify-around items-center">
                <Col className=" text-[#000] mr-10 w-[40%]">
                  <h1 className="text-center text-3xl font-normal text-blue-700 mb-[8px] mx-auto">
                    Incorporation
                    <p className="text-xl font-normal leading-7 text-black mt-[16px] mb-0 mx-auto w-[80%]">
                      The Texas Alliance of Physical Therapist Assistant
                      Educators (TAPTAE) is the result of a collaborative
                      arrangement among the physical therapist assistant
                      programs in the state.
                    </p>
                  </h1>
                </Col>
                <Col className=" text-[#000]">
                  <img
                    className="w-auto h-96 object-cover rounded-sm border-[0px] border-[#ccc] shadow-2xl shadow-black/80"
                    src={heroPic1}
                    alt=""
                  />
                </Col>
              </Row>
              <Row className="h-48"></Row>

              {/* <hr className="w-full border border-[#999] my-[16px] mx-[auto]" /> */}

              {/* <Row className="z-[99]">
                <h1 className="text-left text-2xl font-normal text-blue-700 mt-0 mb-[8px] mx-auto">
                  Incorporation
                </h1>
                <p className="text-base font-normal leading-6 text-black rounded mt-[16px] mb-0 mx-auto">
                  The Texas Alliance of Physical Therapist Assistant Educators
                  (TAPTAE) is the result of a collaborative arrangement among
                  the physical therapist assistant programs in the state.
                </p>
              </Row> */}

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
