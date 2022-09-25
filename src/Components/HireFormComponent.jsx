import React, { useState } from "react";
import Animate from "../Animate";
import { skillsList } from "./Lists";
import { motion } from "framer-motion";
const HireFormComponent = () => {
  const [reason, setReason] = useState("");

  return (
    // <!-- Hire me -->
    <Animate>
      <div className="container mt-6 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section className="w-full">
          <h2 id="hire" className="secondary-title">
            Make Enquiries
          </h2>
          <p className="section-paragraph">
            Feel free to to contact me any time, through any method below.
          </p>

          <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-12">
            <div className="space-y-12">
              <div>
                <label className="text-white block mb-6 text-xl font-bold">
                  Email
                  <span
                    title="Your email is required."
                    className="ml-[1px] font-extrabold text-emerald-400"
                  >
                    *
                  </span>
                </label>
                <input
                  type="email"
                  className="w-full border border-input-border rounded-lg bg-input px-4 py-4"
                />
              </div>
              <div>
                <label className="text-white block mb-6 text-xl font-bold">
                  Reason
                  <span
                    title="You need to tell me a reason."
                    className="ml-[1px] font-extrabold text-emerald-400"
                  >
                    *
                  </span>
                </label>
                <div className="w-full flex flex-col gap-4 border transition-all border-input-border rounded-lg bg-input px-4 py-4">
                  <span className="w-full text-base font-semibold">
                    Select what you want to make enquiry for
                  </span>
                  <ul className="flex flex-col gap-4 select-none">
                    {skillsList.map((n, idx) => (
                      <div className="flex flex-col gap-2" key={idx}>
                        <li
                          onClick={() =>
                            setReason(reason === n.skill ? "" : n.skill)
                          }
                          className={`flex gap-2 transition-all duration-75 ${
                            reason !== "" && reason !== n.skill
                              ? "opacity-10"
                              : "opacity-100"
                          } shadow-2xl rounded-lg cursor-pointer items-center font-semibold text-lg capitalize bg-gray-800 p-2`}
                        >
                          <span
                            className={`rounded-full p-2 bg-${n.color}-100 text-${n.color}-500`}
                          >
                            {n.icon}
                          </span>
                          <span>{n.skill}</span>
                        </li>
                        {reason === n.skill &&
                          n.options &&
                          n.options.length > 0 && (
                            <motion.div
                              initial={{ translateY: "-20px", opacity: 0 }}
                              animate={{ translateY: "0px", opacity: 1 }}
                              className="mx-6 flex flex-col bg-slate-800 overflow-hidden rounded-lg"
                            >
                              {n.options.map((option, idx) => (
                                <React.Fragment key={idx}>
                                  <div
                                    className={`text-base group flex gap-4 hover:bg-gray-700 py-2 h-full cursor-pointer font-semibold px-2 capitalize`}
                                  >
                                    <div>{n.optionsIcon}</div>
                                    {option}
                                  </div>
                                  <div
                                    className={`${
                                      idx !== n.options.length - 1
                                        ? "border-b border-gray-600 w-full"
                                        : ""
                                    }`}
                                  ></div>
                                </React.Fragment>
                              ))}
                            </motion.div>
                          )}
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
              <div class="outline outline-none rounded-md relative border-2 border-input-border focus-within:border-theme">
                <textarea
                  type="text"
                  id="message"
                  placeholder=" "
                  className="block animated-input text-base appearance-none focus:outline-none w-full bg-transparent p-4 h-56 resize-none"
                ></textarea>
                <label
                  for="message"
                  class="absolute top-0 text-3xl text-white p-4 duration-300 origin-0"
                >
                  Message
                </label>
              </div>
              <button className="px-6 py-2 bg-theme rounded-lg w-full text-white font-bold">
                Make that dream come true
              </button>
            </div>

            <div className="mt-12">
              {/* <!-- Contact info --> */}
              <p className="text-secondary">555-555-1234</p>
              <a
                href="mailto:datalphamale7@gmail.com"
                className="text-secondary underline mt-3 block"
              >
                datalphamale7@gmail.com
              </a>

              {/* <!-- Socials --> */}
              <div className="flex mt-20 space-x-6">
                {/* <!-- Skype --> */}
                <a href="#">
                  <svg
                    className="w-8 h-8 lg:w-12 lg:h-12"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.1494 28.252C43.3496 27.1533 43.457 26.0303 43.457 24.9072C43.457 22.417 42.9688 20 42.0068 17.7295C41.0791 15.5322 39.7461 13.5596 38.0518 11.8652C36.3716 10.1808 34.3799 8.83914 32.1875 7.91504C29.9121 6.95313 27.5 6.46484 25.0098 6.46484C23.8379 6.46484 22.6611 6.57715 21.5186 6.79687C19.9376 5.9591 18.176 5.51995 16.3867 5.51758C13.4717 5.51758 10.7275 6.65527 8.66699 8.71582C7.65021 9.72738 6.84403 10.9305 6.29507 12.2555C5.74611 13.5806 5.46526 15.0013 5.46875 16.4355C5.46875 18.291 5.94727 20.1172 6.84082 21.7285C6.66016 22.7734 6.5625 23.8428 6.5625 24.9072C6.5625 27.3975 7.05078 29.8145 8.0127 32.085C8.94043 34.2822 10.2686 36.2549 11.9629 37.9492C13.6572 39.6436 15.6299 40.9717 17.8272 41.8994C20.1025 42.8613 22.5147 43.3496 25.0049 43.3496C26.0889 43.3496 27.1729 43.252 28.2373 43.0615C29.8731 43.9844 31.7188 44.4775 33.6084 44.4775C36.5234 44.4775 39.2676 43.3447 41.3281 41.2793C43.3936 39.2188 44.5264 36.4746 44.5264 33.5596C44.5313 31.7041 44.0527 29.873 43.1494 28.252ZM25.083 36.2061C18.5303 36.2061 15.6006 32.9834 15.6006 30.5713C15.6006 29.3311 16.5137 28.4668 17.7734 28.4668C20.5762 28.4668 19.8535 32.4951 25.083 32.4951C27.7637 32.4951 29.2432 31.04 29.2432 29.5508C29.2432 28.6572 28.8037 27.6611 27.0361 27.2266L21.2061 25.7715C16.5137 24.5947 15.6592 22.0557 15.6592 19.6729C15.6592 14.7217 20.3223 12.8613 24.7022 12.8613C28.7354 12.8613 33.4912 15.0928 33.4912 18.0615C33.4912 19.3359 32.3877 20.0732 31.1279 20.0732C28.7354 20.0732 29.1748 16.7627 24.3555 16.7627C21.9629 16.7627 20.6397 17.8467 20.6397 19.3945C20.6397 20.9424 22.5293 21.4355 24.1699 21.8115L28.4863 22.7686C33.2129 23.8232 34.4092 26.582 34.4092 29.1797C34.4092 33.1982 31.3184 36.2061 25.083 36.2061Z"
                      fill="white"
                    />
                  </svg>
                </a>
                {/* <!-- Twitter --> */}
                <a href="#">
                  <svg
                    className="w-8 h-8 lg:w-12 lg:h-12"
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 0C9.40313 0 0 9.40313 0 21C0 32.5969 9.40313 42 21 42C32.5969 42 42 32.5969 42 21C42 9.40313 32.5969 0 21 0ZM31.0922 15.8297C31.1062 16.05 31.1062 16.2797 31.1062 16.5047C31.1062 23.3859 25.8656 31.3125 16.2891 31.3125C13.3359 31.3125 10.5984 30.4547 8.29219 28.9781C8.71406 29.025 9.11719 29.0437 9.54844 29.0437C11.9859 29.0437 14.2266 28.2188 16.0125 26.8219C13.725 26.775 11.8031 25.275 11.1469 23.2125C11.9484 23.3297 12.6703 23.3297 13.4953 23.1188C12.3175 22.8795 11.2588 22.2398 10.4991 21.3084C9.73949 20.377 9.32572 19.2113 9.32812 18.0094V17.9437C10.0172 18.3328 10.8281 18.5719 11.6766 18.6047C10.9633 18.1293 10.3784 17.4854 9.97365 16.7298C9.5689 15.9743 9.35683 15.1306 9.35625 14.2734C9.35625 13.3031 9.60938 12.4172 10.0641 11.6484C11.3714 13.2578 13.0028 14.5741 14.8522 15.5117C16.7016 16.4493 18.7275 16.9873 20.7984 17.0906C20.0625 13.5516 22.7063 10.6875 25.8844 10.6875C27.3844 10.6875 28.7344 11.3156 29.6859 12.3281C30.8625 12.1078 31.9875 11.6672 32.9906 11.0766C32.6016 12.2812 31.7859 13.2984 30.7031 13.9406C31.7531 13.8281 32.7656 13.5375 33.7031 13.1297C32.9953 14.1703 32.1094 15.0938 31.0922 15.8297Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Animate>
  );
};

export default HireFormComponent;
