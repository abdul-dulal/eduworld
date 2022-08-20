import React from "react";
import man from "../../../assets/bulk-sms-service.jpg";
import underline from "../../../assets/underline.png";
const Faq = () => {
  return (
    <>
      <div>
        <h1 className=" text-2xl font-semibold text-center">FAQ</h1>
        <img src={underline} className="block mx-auto mt-3" alt="" />
      </div>
      <div className="grid grid-cols-2 container gap-10 my-16">
        <div className="">
          <img src={man} alt="" />
        </div>
        <div className="w-10/12 mt-20">
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-xl font-medium">
              How are your courses conducted?
            </div>
            <div class="collapse-content">
              <p>
                You will find our songs online recorded video tutorial records.
                Contact us after enrolling. You can view when you login.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-xl font-medium">
              How can I get help if I don't understand something?
            </div>
            <div class="collapse-content">
              <p>
                Every topic is discussed in detail so that you don't have any
                difficulty in understanding anything. You will watch the
                tutorials carefully. If you still have difficulty understanding
                something, post it in the Facebook support group. After
                enrolling you will get support group link.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-xl font-medium">
              Can I watch the tutorial on multiple devices?
            </div>
            <div class="collapse-content">
              <p>
                No,But you can watch the tutorial on your computer as well as
                mobile.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-xl font-medium">
              Can I share my account with someone I know?
            </div>

            <div class="collapse-content">
              <p>
                Our courses are for single account. Sharing with another person
                or team sharing cannot be done. As we put a lot of effort into
                preparing the course materials, it is not possible for us to
                allow sharing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
