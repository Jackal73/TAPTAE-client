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
          <div className="mt-[25px] 800px:px-[25px] pb-[25px]">
            <div className="bg-[#0000000d] pt-[16px] pb-[32px] 480px:px-[16px] border-b-[2px] border-b-[#999]">
              <form className="App 800px:scale-[.9]" onSubmit={handleSubmit}>
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
                <div className="mb-2">
                  <span className="bg-[#3a4257] text-white p-1">(Allow at least 2 weeks for delivery)</span>
                </div>
                {/* <h4 className="directions">
                  <i className="ptamacs-order">PTA MACS order</i> Pick one of the options below and write the number of
                  PTA MACS in the space before the type of publication ordering—when completing form with a computer the
                  costs are auto-filled. Each binder order includes a $20.00 shipping and handling fee.
                </h4> */}
                <h4 className="directions">
                  <i className="ptamacs-order">PTA MACS order</i> Pick one of the options below and write the number of
                  PTA MACS in the space before the type of publication ordering. Each binder order includes a $20.00
                  shipping and handling fee.
                </h4>

                <div className="grid grid-cols-6 gap-4 w-[90%] mt-2">
                  <div className="col-span-3">
                    <span className="font-semibold text-lg text-black">Number of PTA MACS</span>
                    <div className="">
                      <input
                        type="number"
                        name="emac"
                        placeholder="1"
                        className="input-2 w-[8%] h-[25px] mt-1 border-2 border-[#888]"
                      />
                      <span className=""> e-Mac (on line version) @ $25 each</span>
                    </div>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="emac"
                        placeholder="2"
                        className="input-2 w-[8%] h-[25px] border-2 border-[#888]"
                      />
                      <span className=""> Binder TAPTAE Members (printed) @ $50 each, plus S&H</span>
                    </div>
                    <div className="mt-2">
                      <input type="number" name="emac" className="input-2 w-[8%] h-[25px] border-2 border-[#888]" />
                      <span className=""> Binder TAPTAE Non-Members (printed) @ $60 each, plus S&H</span>
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <span className="font-semibold text-lg text-black">Subtotal</span>
                      <div className="mt-1">$25</div>
                      <div className="mt-2">$100</div>
                      <div className="mt-2"></div>
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <span className="font-semibold text-lg text-black">S&H</span>
                      <div className="mt-1">
                        <span className="text-transparent">---</span>
                      </div>
                      <div className="mt-2">
                        <span className="">+ $20.00</span>
                      </div>
                      <div className="mt-2">
                        <span className="">+ $20.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <span className="font-semibold text-lg text-black">Total</span>
                      <div className="mt-1">$25</div>
                      <div className="mt-2">$120</div>
                      <div className="mt-2 text-transparent border-b-2 border-[#3a4257]">$</div>
                      <div className="font-bold text-lg mt-2 border-2 p-1 border-[#3a4257] text-[#3a4257]">
                        Order Total: $145
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-semibold mt-4">
                  Payment must be made <span className="font-bold">IN FULL</span> at the time of ordering. Make checks
                  payable to:
                </p>
                <p className="font-bold text-xl mt-1">
                  Texas Alliance of Physical Therapist Assistant Educators (TAPTAE)
                </p>
                <p className="w-[80%] mt-3 flex justify-center">
                  **For group orders, please send a SINGLE check. Credit Card payment is available by contacting Renee
                  Pruitt @ 936-520-8026 -- there is a 5% credit card fee.
                </p>
                <div className="grid grid-cols-5 w-[80%] border-4 border-[#888] mt-4 mb-2">
                  <div className="col-span-3">
                    <span className="font-semibold flex justify-center text-lg border-b-2 border-[#888] py-2 text-white bg-[#3a4257]">
                      Ordering
                    </span>
                    <div className="">
                      <ul className="pl-3 pt-2 pb-2">
                        {/* <li className="">Fill out, fax or e-mail this form to: Michele Voight</li> */}
                        <li className="">
                          Fill out this form and press <em className="font-semibold">"Submit Your Order"</em> below
                        </li>
                        <li className="">Fax: 713-718-6495</li>
                        <li className="">
                          e-mail:{" "}
                          <a href="mailto:michele.voight@hccs.edu" className="ml-1 underline">
                            michele.voight@hccs.edu
                          </a>
                        </li>
                        <li className="">Manuals will be ordered when payment has been received.</li>
                        <li className="">Confirmation will be sent to the name above when the order is placed.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 border-l-2 border-[#888]">
                    <span className="font-semibold flex justify-center text-lg border-b-2 border-[#888] py-2 text-white bg-[#3a4257] ">
                      Payment
                    </span>
                    <div className="">
                      <ul className="pl-3 pt-2">
                        <li className="">Mail checks to:</li>
                        <li className="">Dr. Renee Pruitt (Treasurer)</li>
                        <li className="">3600 FM 1488 RD 120-159</li>
                        <li className="">Conroe, Texas 77384-3818</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-5 border-t-2 border-[#888]">
                    <span className="flex justify-center items-center py-2">
                      Questions? Please email Michele Voight at
                      <a href="mailto:michele.voight@hccs.edu" className="ml-2 font-bold underline">
                        michele.voight@hccs.edu
                      </a>
                    </span>
                  </div>
                </div>

                <button type="submit" className="button-1">
                  Submit Your Order
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
