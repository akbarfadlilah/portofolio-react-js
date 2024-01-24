import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("", "", form.current, "").then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-semibold text-center">
          Contact <span className="text-[#FFA500]">Me</span>
          <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label
              htmlFor="user_email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light hover:border-gray-700"
              placeholder="Your Email Addres"
              required
            />
          </div>
          <div>
            <label
              htmlFor="from_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              name="from_name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light hover:border-gray-700"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="6"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="py-[5px] px-[18px] bg-[#FFA500] border-2 border-[#FFA500] rounded-full text-white hover:bg-gray-900 hover:text-white hover:border-black"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
