import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { Col, Row } from "reactstrap";
import hero1 from "../../assets/images/p-therapy.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* <div className="hidden sm:flex"> */}
      <Topbar />
      {/* </div> */}
      <main className="opacity-[6]">
        <div className="flex w-full">
          <Leftbar />
          <div id="right-pane" className="">
            <div className="pt-[10px] px-[25px] pb-[25px]">
              <Row>
                <Col className="flex w-[85%] mx-auto">
                  <h1 className="text-center font-bold mt-32 mb-[16px] mx-auto text-[3.5rem] text-[blue]">
                    Texas Alliance of Physical Therapist Assistant Educators
                    <br /> (<span className="">TAPTAE</span>)
                  </h1>
                </Col>
              </Row>
              <Row className="z-[99]">
                <Col className="flex w-[85%] mx-auto">
                  <h1 className="text-center text-[black] font-outline-2 text-4xl font-bold mt-10 mb-[24px] mx-auto">
                    <i>
                      Promoting collaboration and quality education
                      <br /> in PTA Programs across Texas
                    </i>
                  </h1>
                </Col>
              </Row>
              <Row className="h-24"></Row>
              <Row className="">
                <h1 className="text-center text-2xl font-normal text-[#05055edb] mt-12 mb-[8px] mx-auto">
                  <Link
                    to="/ptaMacsForm"
                    // href=""
                    className="text-[white] border-2 p-2 font-semibold rounded-sm border-[blue] transition-all shadow-md shadow-black/70 hover:bg-white/70 hover:text-[blue] bg-[blue] hover:!shadow-none"
                    style={{ textDecoration: "none" }}
                  >
                    Order your PTA MACS here
                  </Link>
                </h1>
              </Row>
              
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
