import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { Col, Row } from "reactstrap";
import hero1 from "../../assets/images/p-therapy.jpg";

export default function Home() {
  return (
    <>
      <div className="hidden sm:flex">
        <Topbar />
      </div>
      <div className="flex w-full">
        <Leftbar />
        <div className="flex-[10] container">
          <div className="pt-[10px] px-[25px] pb-[25px]">
            <Row>
              <Col className="flex">
                <h1 className="text-center font-medium mt-32 mb-[16px] mx-auto text-[48px]">
                  Texas Alliance of Physical Therapist Assistant Educators (
                  <span className="text-[blue]">TAPTAE</span>)
                </h1>
              </Col>
            </Row>
            <Row className="z-[99]">
              <Col className="flex">
                <h1 className="text-center text-gray-900 text-4xl font-semibold mt-10 mb-[24px] mx-auto">
                  <i>
                    Promoting collaboration and quality education <br />
                    <br /> in PTA Programs across Texas
                  </i>
                </h1>
              </Col>
            </Row>
            {/* <Row>
              <Col className="flex bg-[#2733597a] backdrop-blur-[10px] rounded-md p-[24px] w-3/5 m-auto border border-[#0000004d]">
                <p className="text-center text-lg font-[600] m-auto text-[#fff] rounded">
                  <i>
                    We welcome you to the Texas Alliance of Physical Therapist
                    Assistant Educator’s (TAPTAE) website. Our primary focus is
                    to promote excellence in Physical Therapist Assistant
                    Education.”
                  </i>
                </p>
              </Col>
            </Row> */}
            {/* 
            <Col
              lg="4"
              className="flex  bg-[#27335933] backdrop-blur-[10px] mt-8 rounded-md p-2 w-2/5 m-auto border border-[#0000004d]"
            >
              <div className="my-0 mr-0 flex justify-around">
                <img
                  className="hidden 1000px:flex rounded-full border-[2px] border-[#fff] my-[3px] mx-0 w-auto h-20 1200px:h-28 object-cover justify-center"
                  src={hero1}
                  alt=""
                />
                <br />

                <div className="pt-[20px] pl-[16px]">
                  <div className="flex items-center">
                    {" "}
                    <a
                      href="/ptamacs"
                      className="1300px:text-lg text-xs 1200px:px-[24px] px-2 border border-transparent text-[#d7d7fa] hover:border-b hover:underline"
                    >
                      PTA MACS Information
                    </a>
                  </div>
                  <div className="pb-[16px]">
                    {" "}
                    <a
                      href="/ptamacsform"
                      className="1300px:text-lg text-xs 1200px:px-[24px] px-2 border border-transparent text-[#d06767] hover:border-b hover:underline"
                    >
                      <span className="text-[red]">* </span>
                      PTA MACS Order Form
                      <span className="text-[red]"> *</span>
                    </a>
                  </div>
                </div>
              </div>
            </Col> */}
          </div>
        </div>
      </div>
    </>
  );
}
