import React, { useState } from "react";
import Topbar from "../topbar/Topbar";
import "./ptaMacs.css";
import Leftbar from "../leftbar/Leftbar";
import { Row } from "reactstrap";
import PTAmacs from "../pdf/Fillable MACS Form 3rd Edition[1069].pdf";

const PtaMacsForm = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // appendSpreadsheet(formData);
  };

  return (
    <>
      <Topbar />
      <div className="flex w-full">
        <div className="flex-[6]">
          <div className="mt-[30px] 800px:px-[25px] pb-[25px]">
            <div className="bg-[#0000000d] pt-[16px] pb-[32px] 480px:px-[16px] border-b-[2px] border-b-[#999]">
              <form className="App" onSubmit={handleSubmit}>
                <h3 className="h3">Texas Alliance of Physical Therapist Assistant Educators (TAPTAE)</h3>
                <div className="flex items-center justify-center">
                  <h1 className="h1">
                    Physical Therapist Assistant Manual for the
                    <br /> Assessment of Clinical Skills
                  </h1>
                </div>

                <p className="form-title">
                  <i>PTA MACS</i> Order Form
                </p>
                <span className="copyright">4th Edition ©2023</span>
                <div className="input-div">
                  <input
                    className="input-1"
                    type="text"
                    name="name"
                    placeholder="Contact Name"
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="class"
                    placeholder="Organization Name"
                    onChange={handleInputChange}
                    className="input-1"
                  />
                </div>
                <div className="input-div">
                  <input
                    type="text"
                    name="mark"
                    placeholder="Shipping Address Street"
                    onChange={handleInputChange}
                    className="input-1"
                  />
                  <input
                    type="text"
                    name="mark"
                    placeholder="Shipping Address Line 2"
                    onChange={handleInputChange}
                    className="input-1"
                  />
                </div>

                <div className="input-div">
                  <input type="text" name="mark" placeholder="City" onChange={handleInputChange} className="input-1" />
                  <input type="text" name="mark" placeholder="State" onChange={handleInputChange} className="input-1" />
                  <input type="text" name="mark" placeholder="Zip" onChange={handleInputChange} className="input-1" />
                </div>
                <div className="input-div">
                  <input type="text" name="mark" placeholder="Phone" onChange={handleInputChange} className="input-1" />
                  <input type="text" name="mark" placeholder="Fax" onChange={handleInputChange} className="input-1" />
                </div>
                <div className="input-div">
                  <input
                    type="text"
                    name="mark"
                    placeholder="Email Address"
                    onChange={handleInputChange}
                    className="input-1"
                  />
                  <input
                    type="text"
                    name="mark"
                    placeholder="Date Needed"
                    onChange={handleInputChange}
                    className="input-1"
                  />
                </div>
                <h4 className="directions">
                  <i className="ptamacs-order">PTA MACS order</i> Pick one of the options below and write the number of
                  PTA MACS in the space before the type of publication ordering—when completing form with a computer the
                  costs are auto-filled. Each binder order includes a $20.00 shipping and handling fee.
                </h4>

                <button type="submit" className="button-1">
                  Submit Order
                </button>
              </form>
              {/* <Row className="flex justify-center">
                <h2 className="text-xl font-semibold mt-0 mb-[16px] mx-0">
                  Order your <span className="text-[blue]">PTA MACS</span>
                </h2>
              </Row>
              <iframe src={PTAmacs} frameborder="0" width="100%" height="1200px"></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PtaMacsForm;
