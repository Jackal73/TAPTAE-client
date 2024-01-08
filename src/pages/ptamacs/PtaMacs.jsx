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
        <div className="flex-[10]">
          <div className="mt-[30px] px-[25px] pb-[25px]">
            <div
              className="bg-[#0000000d] pt-[16px] pb-[32px] px-[16px] 
            
            "
            >
              <Row className="mb-2">
                <h1 className="text-left text-3xl font-normal text-[#05055edb] mt-0 mb-[8px] mx-auto">
                  What is the PTA MACS?
                  <p className="text-base font-normal leading-6 text-black mt-[8px] mb-0 mx-auto">
                    The{" "}
                    <i>
                      Physical Therapist Assistant Manual for the Assessment of
                      Clinical Skills (PTA MACS)
                    </i>{" "}
                    is a clinical skills assessment document that has been
                    developed and revised by PTA academic and clinical faculty.
                    Its format is similar to the <i>PTA Blue MACS</i>, an
                    assessment tool originally developed by The Committee for
                    the PTA Blue MACS in 1982 at St. Phillips College, San
                    Antonio, Texas. This original form was adapted from{" "}
                    <i>The Blue MACS</i> as developed by the Texas Consortium
                    for Physical Therapy Clinical Education.
                    <br />
                    <br /> The <i>PTA MACS</i> is used as a method for
                    evaluating clinical performance and a tool to promote
                    clinical teaching and learning. It identifies skills every
                    student needs to develop in order to be considered
                    entry-level. The skill content of the <i>PTA MACS</i> was
                    developed based upon definitions for professional behaviors
                    identified as the <i>Generic Abilities</i>. Guidelines for
                    entry-level clinical practice were incorporated into the{" "}
                    <i>PTA MACS</i> from information outlined in{" "}
                    <i>
                      Minimum Required Skills of Physical Therapist Assistant
                      Graduates at Entry-Level, A Normative Model of Physical
                      Therapist Assistant Education
                    </i>
                    , and from the <i>Guide for Physical Therapist Practice</i>.
                    Clinical instructors and students can also use the{" "}
                    <i>PTA MACS</i> to collaborate in developing a successful
                    clinical learning experience. Educational requirements
                    necessary for entry-level practice were also incorporated
                    into the <i>PTA MACS</i>
                    and were developed from the{" "}
                    <i>
                      Standards and Required Elements for Accreditation of
                      Physical Therapist Assistant Education Programs
                    </i>
                    .
                  </p>
                </h1>
              </Row>
              <br />
              <Row className="mb-2">
                <h1 className="text-left text-3xl font-normal text-[#05055edb] mt-0 mb-[8px] mx-auto">
                  PTA MACS Instructions
                  {/* and Video Tutorial */}
                </h1>
                <p className="text-base font-normal leading-6 text-black mt-[8px] mb-0 mx-auto">
                  For a PDF instructions on the use of the hardcopy PTA MACS
                  click here:{" "}
                  <a
                    href="#!"
                    className="text-lg pl-2 text-[blue] hover:underline"
                  >
                    PTA MACS Instructions
                  </a>
                </p>
                {/* <p className="text-base font-normal leading-6 text-black mt-[8px] mb-0 mx-auto">
                  For a 6-minute video tutorial click here:{" "}
                  <a href="#!" className="text-lg pl-2 text-[blue] hover:underline">
                    PTA MACS Video Instructions
                  </a>
                </p> */}
              </Row>
              <br />
              <Row className="">
                <h1 className="text-center text-3xl font-normal text-[#05055edb] mt-12 mb-[8px] mx-auto">
                  <a
                    href="/ptaMacsForm"
                    className="border p-2 rounded-md border-blue-500 transition hover:shadow-lg shadow-black"
                  >
                    Order your PTA MACS
                  </a>
                </h1>
                {/* <p className="text-base font-normal leading-6 text-black mt-[8px] mb-0 mx-auto">
                  <a
                    href="/ptamacsform"
                    className="text-lg pl-2 text-[blue] hover:underline"
                  >
                    Please click here
                  </a>
                  <span> to order your PTA MACS</span>
                </p> */}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
