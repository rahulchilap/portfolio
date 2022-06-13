import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ID", "template_ID", form.current, "Jhj8WiUsR7uq_v7eU")
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div id="contacts" className="contacts">
        <div className="text-center">
          <h1>Contact me</h1>
          <p>
            Please fillout the form and describe your project and I'll contact
            you as soon as possible.
          </p>
        </div>
        <div className="container">
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div className="text-center">
                  {/* Name Input */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                  />
                  <div className="line"></div>
                </div>
                {/* Phone Input */}
                <div className="text-center">
                  <input
                    type="Number"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                  />
                  <div className="line"></div>
                </div>

                {/* Email Input */}
                <div className="text-center">
                  <input
                    type="Email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                  />
                  <div className="line"></div>
                </div>

                {/* Subject Input */}
                <div className="text-center">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="email"
                  />
                  <div className="line"></div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="text-center">
                  <textarea
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Please Describe Shortly Your Project..."
                  ></textarea>
                  <div className="line"></div>
                </div>

                <button
                  className="btn-main-offer contact-btn"
                  type="submit"
                  onClick={() => {
                    alert(
                      "The Form has been submitted.Rahul will contact you back."
                    );
                  }}
                >
                  Contact me
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacts;
