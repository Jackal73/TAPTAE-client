import React from "react";
import "./leftbar.css";
import styles from "../../styles/styles";

export default function Leftbar() {
  return (
    // <div className="flex-[2] w-[100%] h-[calc(100vh-76px)] overflow-y-scroll sticky top-[78]">
    <div className="">
      {/* <div className="w-full  rounded-2xl bg-[#e0e6f6] shadow-md backdrop-blur-[15px] border border-[#0000004d] p-[10px] absolute left-0 "> */}
      <div
        id="left-pane"
        className="flex-[2] h-[calc(100vh-76px)]  rounded-2xl"
      >
        <div className="flex justify-center text-blue-700 text-xl mb-2 px-3 pt-3 font-bold text-center">
          Texas Physical Therapist
          <br /> Assistant Programs
        </div>
        <hr className="leftBarHr" />

        <ul className="list-none mt-2 leading-3 p-0 text-center">
          <a
            href="https://www.actx.edu/phys_therapist/index.php"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Amarillo College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.actx.edu
              </p>
              {/* <span className={`${styles.shortUrl}`}>https://www.actx.edu</span> */}
            </li>
          </a>
          <a
            href="https://sites.austincc.edu/health/ptha/"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Austin Community College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://sites.austincc.edu/
              </p>
            </li>
          </a>
          <a
            href="https://www.blinn.edu/physical-therapist-assistant/index.html"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Blinn College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.blinn.edu/
              </p>
            </li>
          </a>
          {/* ======================================================================= */}
          <a
            href="https://www.collin.edu/department/physicaltherapist/"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Collin College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.collin.edu/
              </p>
            </li>
          </a>
          <a
            href="https://www.concorde.edu/patient-care-programs/physical-therapist-assistant/dallas"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Concorde Career College-Dallas
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.concorde.edu/
              </p>
            </li>
          </a>
          <a
            href="https://www.concorde.edu/patient-care-programs/physical-therapist-assistant"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Concorde Career College-San Antonio
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.concorde.edu/
              </p>
            </li>
          </a>
          <a
            href="https://www.delmar.edu/degrees/physical-therapist-assistant/index.html"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Del Mar College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.delmar.edu/
              </p>
            </li>
          </a>
          <a
            href="https://www.epcc.edu/Academics/Health/physical-therapist-assistant"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              El Paso Community College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.epcc.edu/
              </p>
            </li>
          </a>
          <a
            href="https://www.hccs.edu/programs/areas-of-study/health-sciences/physical-therapist-assistant/"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Houston Community College System
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.hccs.edu/
              </p>
            </li>
          </a>
          <a
            href="hthttps://www.kilgore.edu/courses/physical-therapist-assistant/tps://www.actx.edu/phys_therapist/index.php"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Kilgore College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.kilgore.edu/
              </p>
            </li>
          </a>
          <a
            href="https://www.laredo.edu/Academic-Career-Pathways/health-sciences/aas-physical-therapist-asst.html"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Laredo College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.laredo.edu/
              </p>
            </li>
          </a>
          <a
            href="https://www.lonestar.edu/physical-therapist-assistant-dept-montgomery.htm"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Lone Star College–Montgomery
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.lonestar.edu/
              </p>
            </li>
          </a>
          {/* ******************************************************************************* */}

          <a
            href="https://www.mclennan.edu/health-professions/physical-therapist-assistant/index.html"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              McLennan Community College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.mclennan.edu/
              </p>
            </li>
          </a>

          <a
            href="https://www.navarrocollege.edu/academics/physical-therapist-assistant/index.html"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Navarro College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.navarrocollege.edu/
              </p>
            </li>
          </a>

          <a
            href="https://www.ntcc.edu/academics/programs-study/health-sciences/physical-therapist-assistant"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Northeast Texas Community College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.ntcc.edu/
              </p>
            </li>
          </a>

          <a
            href="https://www.odessa.edu/programs/Schools/HealthSciences/Physical-Therapist-Assistant/index.html"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Odessa College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.odessa.edu/
              </p>
            </li>
          </a>

          <a
            href="https://pmi.edu/on-campus-programs/associate/physical-therapist-assistant/"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Pima Medical Institute – Houston
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://pmi.edu/
              </p>
            </li>
          </a>

          <a
            href="https://www.rgvcollege.edu/program-pta.asp"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Rio Grande Valley College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.rgvcollege.edu/
              </p>
            </li>
          </a>

          <a
            href="https://www.sanjac.edu/programs/areas-of-study/health/pta/ "
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              San Jacinto College South
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.sanjac.edu/
              </p>
            </li>
          </a>

          <a
            href="https://www.southplainscollege.edu/exploreprograms/healthoccupations/alliedhealth/spcpta.php"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              South Plains College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.southplainscollege.edu/
              </p>
            </li>
          </a>

          <a
            href="https://www.southtexascollege.edu/academics/physical-therapist-assistant/"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              South Texas College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.southtexascollege.edu/
              </p>
            </li>
          </a>

          <a
            href="https://www.southuniversity.edu/austin/physical-therapist-assistant-as"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              South University – Austin
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.southuniversity.edu/
              </p>
            </li>
          </a>

          <a
            href="https://www.alamo.edu/spc/pta/"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              St Philip's College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.alamo.edu/
              </p>
            </li>
          </a>

          <a
            href="https://www.tccd.edu/academics/courses-and-programs/programs-a-z/credit/physical-therapist-assistant/"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Tarrant County College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.tccd.edu/
              </p>
            </li>
          </a>

          <a
            href="https://www.victoriacollege.edu/Explore/ProgramsCourses/HealthCareers/PhysicalTherapistAssistant"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              The Victoria College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.victoriacollege.edu/
              </p>
            </li>
          </a>

          <a
            href="https://www.tjc.edu/PTA"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Tyler Junior College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.tjc.edu/
              </p>
            </li>
          </a>

          <a
            href="https://www.wc.edu/programs/all-programs/physical-therapist-assistant-program/index.php"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Weatherford College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.wc.edu/
              </p>
            </li>
          </a>

          <a
            href="https://www.westerntech.edu/programs/associates-science/physical-therapist-assistant/"
            className={`${styles.schoolLink}`}
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Western Technical College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.westerntech.edu/
              </p>
            </li>
          </a>

          <a
            href="https://www.wcjc.edu/Programs/allied-health/physical-therapist-assistant/index.aspx"
            className=" no-underline text-[12px] font-semibold hover:text-[blue]"
            alt="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={`${styles.affiliate}`}>
              Wharton County Junior College
              <br />
              <p className="text-[10px] text-[#555] hover:text-[blue]">
                https://www.wcjc.edu/
              </p>
            </li>
          </a>
        </ul>
        <hr className="my-[56px]" />
      </div>
    </div>
  );
}
