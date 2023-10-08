import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { Row } from "reactstrap";

export default function PtaMacs() {
  return (
    <>
      <Topbar />
      <div className="flex w-full">
        <Leftbar />
        <div className="flex-[6]">
          <div className="mt-[30px] px-[25px] pb-[25px]">
            <div className="bg-[#0000000d] pt-[16px] pb-[32px] px-[16px] border-b-[2px] border-b-[#999]">
              <Row className="mb-2">
                <h1 className="text-left text-2xl font-normal text-[#05055edb] mt-0 mb-[8px] mx-auto">
                  What is the PTA MACS?
                  <p className="text-base font-normal leading-6 text-black mt-[8px] mb-0 mx-auto">
                    The Physical Therapist Assistant Manual for the Assessment of Clinical Skills (PTA MACS), 2nd
                    Edition describes the skills that a newly graduated physical therapist assistant must be able to
                    perform in order to engage in safe and effective practice. The skills in the PTA MACS are based on
                    (1) entry-level physical therapist assistant education criteria as defined by A Normative Model for
                    Physical Therapist Assistant Education, (2) standards of practice, elements of patient/client
                    management and terminology as defined by The Guide to Physical Therapist Assistant Practice 3.0, and
                    (3) standards of professional behavior initially defined as the Generic Abilities
                  </p>
                </h1>
              </Row>
              <br />
              <Row className="mb-2">
                <h1 className="text-left text-2xl font-normal text-[#05055edb] mt-0 mb-[8px] mx-auto">
                  PTA MACS Instructions and Video Tutorial
                </h1>
                <p className="text-base font-normal leading-6 text-black mt-[8px] mb-0 mx-auto">
                  For a PDF instructions on the use of the PTA MACS click here:{" "}
                  <a href="#!" className="text-lg pl-2 text-[blue] hover:underline">
                    PTA MACS Instructions
                  </a>
                </p>
                <p className="text-base font-normal leading-6 text-black mt-[8px] mb-0 mx-auto">
                  For a 6-minute video tutorial click here:{" "}
                  <a href="#!" className="text-lg pl-2 text-[blue] hover:underline">
                    PTA MACS Video Instructions
                  </a>
                </p>
              </Row>
              <br />
              <Row className="">
                <h1 className="text-left text-2xl font-normal text-[#05055edb] mt-0 mb-[8px] mx-auto">
                  PTA MACS Ordering Instructions
                </h1>
                <p className="text-base font-normal leading-6 text-black mt-[8px] mb-0 mx-auto">
                  <a href="/ptamacsform" className="text-lg pl-2 text-[blue] hover:underline">
                    Please click here
                  </a>
                  <span> to order your PTA MACS</span>
                </p>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
