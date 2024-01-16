import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import emailjs from "@emailjs/browser";

import iconSuccess from "../../assets/images/texas-logo.png";
import Topbar from "../topbar/Topbar";
import "./ptaMacs.css";

const PtaMacsForm = () => {
  const [FrmData, setFrmData] = useState("");
  const [valuePhone, setValuePhone] = useState();
  const [valueFax, setValueFax] = useState();
  const [valueEmail, setValueEmail] = useState("");

  const [showState, setShowState] = useState(false);
  const inputRefEmail = useRef(null);
  const form = useRef();

  const switchToSignup = () => {
    window.location.href = "/home";
  };

  const currentEmailValue = () => {
    return inputRefEmail.current?.value;
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFrmData({
      ...FrmData,
      [name]: value.toUpperCase(),
    });
  };

  // function to submit form data to Google Sheets
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    e.preventDefault();

    console.log("Successfully submitted");
    fetch(
      "https://script.google.com/macros/s/AKfycbwB9vQ9_U6RvIUgUp4_jOaJiboJlSrqYaBSIe5UBzvYV_SDtvd60A3Ke8pQ9OX-MPaxjQ/exec",
      {
        method: "POST",
        body: formDatab,
      }
    );

    setTimeout(function () {
      setShowState(true);
    }, 750);
    sendEmail(e);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pzd3iyk",
        "template_ynmsynn",
        form.current,
        "ayFb8lBIUAPEnYeal"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const order1 = FrmData.EmacOrderNum > 0 ? FrmData.EmacOrderNum * 25 : 0;
  const order2 =
    FrmData.MemberOrderNum > 0 ? FrmData.MemberOrderNum * 50 + 20 : 0;
  const order3 =
    FrmData.NonMemberOrderNum > 0 ? FrmData.NonMemberOrderNum * 60 + 20 : 0;
  const order = order1 + order2 + order3;

  const thankState = () => {
    return (
      <div className="flex flex-col mt-[45px]">
        <div className="container-thank">
          <div className="flex flex-col p-3 items-center justify-center rounded-[15px] w-[530px] backdrop-blur-[15px] border-2 border-[blue]">
            <div className="mt-3">
              <img
                className="border-[2px] border-[#d06767] rounded-3xl pr-1"
                src={iconSuccess}
                alt=""
              />
            </div>

            <h1 className="text-[#ff0000af]">Thank you!</h1>
            <div className="text-center">
              <h2 className="text-red">
                Your order has been
                <br /> successfully submitted
              </h2>
            </div>
            <p className="mt-3 justify-center">
              A confirmation email has been sent to:
              <br />
              <hr className="mt-[1.5rem] mb-[.25rem] opacity-0" />
              <span className="flex flex-col">
                <span className="text-center text-[1.75rem]">
                  {currentEmailValue()}
                </span>
              </span>
            </p>

            <button onClick={switchToSignup} className="button-1">
              Dismiss This Message
            </button>
          </div>
        </div>
      </div>
    );
  };
  const signupState = () => {
    return (
      <>
        <div className="hidden sm:flex">
          <Topbar />
        </div>
        <div className="flex  max-w-[75%] mx-auto">
          <div className="flex-[6]">
            <div className="mt-[25px] 800px:px-[25px] pb-[25px]">
              <div className="pt-[16px] pb-[32px] 480px:px-[16px]">
                <form
                  className="form App 800px:scale-[.9] mx-[1rem] 800px:mx-[4rem] -mt-[2rem]"
                  onSubmit={(e) => Submit(e)}
                  ref={form}
                >
                  <h3 className="h3 bg-blue-700">
                    Texas Alliance of Physical Therapist Assistant Educators
                    (TAPTAE)
                  </h3>
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
                      name="Name"
                      required
                      placeholder="Contact Name"
                    />
                    <input
                      type="text"
                      name="Organization"
                      placeholder="Organization Name"
                      className="input-1"
                    />
                  </div>
                  <div className="input-div">
                    <input
                      type="address"
                      name="Address"
                      placeholder="Shipping Address-Street"
                      className="input-1"
                    />
                    <input
                      type="text"
                      name="Address2"
                      placeholder="Shipping Address-Line 2"
                      className="input-1"
                    />
                  </div>
                  <div className="input-div">
                    <input
                      type="text"
                      name="City"
                      placeholder="City"
                      className="input-1"
                    />
                    <input
                      type="text"
                      name="State"
                      placeholder="State"
                      className="input-1"
                    />
                    <input
                      type="text"
                      name="Zip"
                      placeholder="Zip"
                      className="input-1"
                    />
                  </div>
                  <div className="input-div">
                    <PhoneInput
                      type="tel"
                      country="US"
                      value={valuePhone}
                      onChange={setValuePhone}
                      name="Phone"
                      placeholder="Phone"
                      className="input-1"
                    />
                    <PhoneInput
                      type="tel"
                      country="US"
                      value={valueFax}
                      onChange={setValueFax}
                      name="Fax"
                      placeholder="Fax"
                      className="input-1"
                    />
                  </div>
                  <div className="input-div">
                    <input
                      type="email"
                      name="Email"
                      placeholder="Email Address"
                      className="input-1"
                      ref={inputRefEmail}
                      value={currentEmailValue()}
                      onChange={(e) => setValueEmail(e.target.value)}
                    />
                    <label className="font-bold">Needed:</label>
                    <input
                      type="date"
                      name="NeededBy"
                      placeholder="Date Needed"
                      className="input-1"
                    />

                    {/* =============================================================== */}
                    <textarea
                      type="textarea"
                      rows="4"
                      value="Thank you for your order. Payment is required in full prior to shipment. Please refer to the instructions below for payment options. For any questions please contact Michele Voight."
                      name="Message"
                      placeholder=""
                      className="hidden"
                      readOnly
                    />
                    {/* =============================================================== */}
                  </div>
                  <div className="mb-2">
                    {/* <span className="bg-[#3a4257] text-white pt-0 pb-1 px-1"> */}
                    <span className="bg-blue-700 text-white pt-0 pb-1 px-1">
                      (Allow at least 2 weeks for delivery)
                    </span>
                  </div>
                  <h4 className="directions">
                    <i className="ptamacs-order text-blue-700">
                      PTA MACS order
                    </i>{" "}
                    Pick one of the options below and write the number of PTA
                    MACS in the space before the type of publication ordering.
                    Each binder order includes a $20.00 shipping and handling
                    fee.
                  </h4>
                  <div className="grid grid-cols-7 w-[90%] mt-2">
                    <div className="col-span-4">
                      <span className="font-semibold text-lg text-black">
                        Number of PTA MACS
                      </span>
                      <div className="">
                        <input
                          type="number"
                          name="EmacOrderNum"
                          min="0"
                          onChange={handleOnChange}
                          value={
                            FrmData.EmacOrderNum > 0 ? FrmData.EmacOrderNum : 0
                          }
                          placeholder=""
                          className="input-2 w-[24px] 800px:w-[8%] h-[25px] mt-1 border-2 border-[#888]"
                        />
                        <span className="ml-1">
                          {" "}
                          e-Mac (on line version) @ $25 each
                        </span>
                      </div>
                      <div className="mt-2">
                        <input
                          type="number"
                          name="MemberOrderNum"
                          min="0"
                          onChange={handleOnChange}
                          value={
                            FrmData.MemberOrderNum > 0
                              ? FrmData.MemberOrderNum
                              : 0
                          }
                          className="input-2 w-[24px] 800px:w-[8%] h-[25px] border-2 border-[#888]"
                        />
                        <span className="ml-1">
                          {" "}
                          Binder TAPTAE Members (printed) @ $50 each, +S&H
                        </span>
                      </div>
                      <div className="mt-2">
                        <input
                          type="number"
                          name="NonMemberOrderNum"
                          min="0"
                          onChange={handleOnChange}
                          value={
                            FrmData.NonMemberOrderNum > 0
                              ? FrmData.NonMemberOrderNum
                              : 0
                          }
                          className="input-2 w-[24px] 800px:w-[8%] h-[25px] border-2 border-[#888]"
                        />
                        <span className="ml-1">
                          {" "}
                          Binder TAPTAE Non-Members (printed) @ $60 each, +S&H
                        </span>
                      </div>
                    </div>
                    <div className=" hidden 600px:flex">
                      <div className="">
                        <span className="font-semibold text-lg text-black">
                          Subtotal
                        </span>
                        <div className="">
                          <input
                            name="EmacSubtotal"
                            className="mt-1 w-[64px]"
                            value={
                              FrmData.EmacOrderNum > 0
                                ? "$" + FrmData.EmacOrderNum * 25 + ".00"
                                : 0
                            }
                            onChange={handleOnChange}
                          />
                        </div>
                        <div className="">
                          <input
                            name="MemberSubtotal"
                            className="mt-2 w-[64px]"
                            value={
                              FrmData.MemberOrderNum > 0
                                ? "$" + FrmData.MemberOrderNum * 50 + ".00"
                                : 0
                            }
                            onChange={handleOnChange}
                          />
                        </div>
                        <div className="">
                          <input
                            name="NonMemberSubtotal"
                            className="mt-2 w-[64px]"
                            value={
                              FrmData.NonMemberOrderNum > 0
                                ? "$" + FrmData.NonMemberOrderNum * 60 + ".00"
                                : 0
                            }
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="">
                        <span className="font-semibold text-lg text-black">
                          S&H
                        </span>
                        <div className="mt-1">
                          <span className="text-transparent">---</span>
                        </div>
                        <div className="mt-2">
                          <span className="">+ $20.00</span>
                        </div>
                        <div className="mt-2">
                          <span className="">+ $20.00</span>
                        </div>
                        <div className="mb-3 pb-1 text-transparent border-b-2 border-[#3a4257]">
                          $
                        </div>
                        <span className="font-semibold text-[1.2rem]">
                          Total Order:
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <div className="">
                        <span className="font-semibold text-lg text-black">
                          Total
                        </span>
                        <div className="">
                          <input
                            name="EmacTotal"
                            className="mt-1 w-[80px]"
                            value={
                              FrmData.EmacOrderNum > 0
                                ? "$" + FrmData.EmacOrderNum * 25 + ".00"
                                : 0
                            }
                            onChange={handleOnChange}
                          />
                        </div>
                        <div className="">
                          <input
                            name="MemberTotal"
                            className="mt-2 w-[80px]"
                            value={
                              FrmData.MemberOrderNum > 0
                                ? "$" +
                                  (FrmData.MemberOrderNum * 50 + 20) +
                                  ".00"
                                : 0
                            }
                            onChange={handleOnChange}
                          />
                        </div>
                        <div className="">
                          <input
                            name="NonMemberTotal"
                            className="mt-2 w-[80px]"
                            value={
                              FrmData.NonMemberOrderNum > 0
                                ? "$" +
                                  (FrmData.NonMemberOrderNum * 60 + 20) +
                                  ".00"
                                : 0
                            }
                            onChange={handleOnChange}
                          />
                        </div>
                        <div className=" mt-1 text-transparent border-b-2 border-[#3a4257]">
                          $
                        </div>
                        <div className="w-[120px] mt-2 border-2 border-blue-700">
                          {" "}
                          <div className="">
                            <input
                              name="TotalOrder"
                              className="ml-1 w-[90px] bg-transparent font-bold text-[1.3rem] text-blue-700"
                              value={"$" + order + ".00"}
                              onChange={handleOnChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-semibold mt-4">
                    Payment must be made{" "}
                    <span className="font-bold">IN FULL</span> at the time of
                    ordering. Make checks payable to:
                  </p>
                  <p className="font-bold text-xl mt-1">
                    Texas Alliance of Physical Therapist Assistant Educators
                    (TAPTAE)
                  </p>
                  <p className="w-[80%] mt-3 flex justify-center">
                    **For group orders, please send a SINGLE check. Credit Card
                    payment is available by contacting Renee Pruitt @
                    936-520-8026 -- there is a 5% credit card fee.
                  </p>
                  <div className="grid grid-cols-5 w-[80%] border-4 border-[#888] mt-4 mb-2">
                    <div className="col-span-3">
                      {/* <span className="font-semibold flex justify-center text-lg border-b-2 border-[#888] py-2 text-white bg-[#3a4257]">
                        Ordering
                      </span> */}
                      <span className="font-semibold flex justify-center text-lg border-b-2 border-[#888] py-2 text-white bg-blue-700">
                        Ordering
                      </span>
                      <div className="">
                        <ul className="pl-3 pt-2 pb-2">
                          <li className="">
                            Fill out this form and press{" "}
                            <em className="font-semibold">
                              "Submit Your Order"
                            </em>{" "}
                            below
                          </li>
                          <li className="">Fax: 713-718-6495</li>
                          <li className="">
                            e-mail:{" "}
                            <a
                              href="mailto:michele.voight@hccs.edu"
                              className="ml-1 underline"
                            >
                              michele.voight@hccs.edu
                            </a>
                          </li>
                          <li className="">
                            <em className="font-semibold">
                              **Manuals will be ordered when payment has been
                              received.
                            </em>
                          </li>

                          <li className="">
                            Confirmation will be sent to the name above when the
                            order is placed.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-span-2 border-l-2 border-[#888]">
                      <span className="font-semibold flex justify-center text-lg border-b-2 border-[#888] py-2 text-white bg-blue-700 ">
                        Payment
                      </span>
                      <div className="">
                        <ul className="pl-3 pt-2">
                          <li className="font-semibold">Mail checks to:</li>
                          <li className="">Dr. Renee Pruitt (Treasurer)</li>
                          <li className="">3600 FM 1488 RD 120-159</li>
                          <li className="">Conroe, Texas 77384-3818</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-span-5 border-t-2 border-[#888]">
                      <span className="flex justify-center items-center py-2">
                        Questions? Please email Michele Voight at
                        <a
                          href="mailto:michele.voight@hccs.edu"
                          className="ml-2 font-bold underline"
                        >
                          michele.voight@hccs.edu
                        </a>
                      </span>
                    </div>
                  </div>
                  <button
                    name=""
                    type="submit"
                    className="button-1 transition bg-blue-700"
                  >
                    Submit Your Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {showState ? (
        <div className="main-container">{thankState()}</div>
      ) : (
        <div>{signupState()}</div>
      )}
    </div>
  );
};

export default PtaMacsForm;
