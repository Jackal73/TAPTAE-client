import React from "react";
import "./leftbar.css";
import styles from "../../styles/styles";

export default function Leftbar() {
  return (
    <div className="flex-[1.5] h-[calc(100vh-76px)] overflow-y-scroll sticky top-[78]">
      <div className="w-full rounded-2xl  bg-[#27335933] shadow-md backdrop-blur-[15px] border border-[#0000004d] p-[10px] absolute left-0 ">
        <div className="flex justify-center text-[blue] text-xl mb-2 text-center">
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
            <li className="mb-[6px] hover:border-[blue] border border-transparent hover:rounded hover:text-[blue] pb-[2px]">
              Amarillo College
              <br />
              <span className={`${styles.shortUrl}`}>https://www.actx.edu</span>
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
              <span className={`${styles.shortUrl}`}>https://sites.austincc.edu/</span>
            </li>
          </a>

          {/* ======================================================================= */}
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.blinn.edu/physical-therapist-assistant/index.html"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blinn College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.blinn.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.collin.edu/department/physicaltherapist/"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Collin College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.collin.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.concorde.edu/patient-care-programs/physical-therapist-assistant/dallas"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Concorde Career College-Dallas
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.concorde.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.concorde.edu/patient-care-programs/physical-therapist-assistant"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Concorde Career College-San Antonio
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.concorde.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.delmar.edu/degrees/physical-therapist-assistant/index.html"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Del Mar College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.delmar.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.epcc.edu/Academics/Health/physical-therapist-assistant"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              El Paso Community College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.epcc.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.hccs.edu/programs/areas-of-study/health-sciences/physical-therapist-assistant/"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Houston Community College System
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.hccs.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="hthttps://www.kilgore.edu/courses/physical-therapist-assistant/tps://www.actx.edu/phys_therapist/index.php"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kilgore College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.kilgore.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.laredo.edu/Academic-Career-Pathways/health-sciences/aas-physical-therapist-asst.html"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Laredo College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.laredo.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.lonestar.edu/physical-therapist-assistant-dept-montgomery.htm"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lone Star College–Montgomery
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.lonestar.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.mclennan.edu/health-professions/physical-therapist-assistant/index.html"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              McLennan Community College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.mclennan.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.navarrocollege.edu/academics/physical-therapist-assistant/index.html"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Navarro College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.navarrocollege.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.ntcc.edu/academics/programs-study/health-sciences/physical-therapist-assistant"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Northeast Texas Community College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.ntcc.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.odessa.edu/programs/Schools/HealthSciences/Physical-Therapist-Assistant/index.html"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Odessa College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.odessa.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://pmi.edu/on-campus-programs/associate/physical-therapist-assistant/"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pima Medical Institute – Houston
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://pmi.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.rgvcollege.edu/program-pta.asp"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rio Grande Valley College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.rgvcollege.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.sanjac.edu/programs/areas-of-study/health/pta/ "
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              San Jacinto College South
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.sanjac.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.southplainscollege.edu/exploreprograms/healthoccupations/alliedhealth/spcpta.php"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              South Plains College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.southplainscollege.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.southtexascollege.edu/academics/physical-therapist-assistant/"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              South Texas College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.southtexascollege.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.southuniversity.edu/austin/physical-therapist-assistant-as"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              South University – Austin
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.southuniversity.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.alamo.edu/spc/pta/"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              St Philip's College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.alamo.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.tccd.edu/academics/courses-and-programs/programs-a-z/credit/physical-therapist-assistant/"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tarrant County College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.tccd.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.victoriacollege.edu/Explore/ProgramsCourses/HealthCareers/PhysicalTherapistAssistant"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Victoria College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.victoriacollege.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.tjc.edu/PTA"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tyler Junior College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.tjc.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.wc.edu/programs/all-programs/physical-therapist-assistant-program/index.php"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weatherford College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.wc.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.westerntech.edu/programs/associates-science/physical-therapist-assistant/"
              className={`${styles.schoolLink}`}
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Western Technical College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.westerntech.edu/</span>
          </li>
          <li className={`${styles.affiliate}`}>
            <a
              href="https://www.wcjc.edu/Programs/allied-health/physical-therapist-assistant/index.aspx"
              className=" no-underline text-[12px] font-semibold hover:text-[blue]"
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wharton County Junior College
            </a>
            <br />
            <span className={`${styles.shortUrl}`}>https://www.wcjc.edu/</span>
          </li>
        </ul>
        <hr className="my-[20px]" />
      </div>
    </div>
  );
}
