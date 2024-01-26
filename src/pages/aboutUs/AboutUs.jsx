import React from "react";
import Topbar from "../../components/topbar/Topbar";
import { Col, Row } from "reactstrap";
import hero1 from "../../assets/images/p-therapy.jpg";
import heroPic from "../../assets/images/sec-cir.jpg";
import heroPic1 from "../../assets/images/hcc.jpg";

export default function AboutUs() {
  return (
    <>
      <Topbar />
      <div className="flex max-w-[1400px] mx-auto">
        <div className="flex-[8]">
          <div className="mt-[32px] px-[25px] pb-[25px]">
            <div className="mt-[100px]">
              <h1 className="flex font-bold text-center italic justify-center text-4xl text-blue-700 ">
                ~ About Us ~
              </h1>
              <Row className="z-[99] mt-20 flex grid-cols-2 justify-around items-center">
                <Col className=" text-[#000] pr-10 w-[45%] h-[20rem] border-r border-blue-700">
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
                    className="w-auto h-[26rem] object-cover rounded-sm border-[0px] border-[#ccc] shadow-2xl shadow-black/80 ml-10"
                    src={hero1}
                    alt=""
                  />
                </Col>
              </Row>

              <Row className="h-24"></Row>

              <Row className="z-[99] mt-20 flex grid-cols-2 justify-around items-center">
                <Col className=" text-[#000] ml-10 w-[50%]">
                  <img
                    className="w-auto h-[24rem] object-cover rounded-sm border-[0px] border-[#ccc] shadow-2xl shadow-black/80"
                    src={heroPic}
                    alt=""
                  />
                </Col>
                <Col className=" text-[#000] ml-10 pl-5 w-[40%] border-l border-blue-700">
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
                <Col className="text-[#000] mr-10 w-[45%] h-[20rem] pr-5 border-r border-blue-700">
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
                    className="w-auto h-[24rem] object-cover rounded-sm border-[0px] border-[#ccc] shadow-2xl shadow-black/80 ml-10 mb-10"
                    src={heroPic1}
                    alt=""
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
