import Section from "../section";
import SectionTitle from "../title";
import { contactMail, serverURL } from "../../data/social-media";
import { useState, useEffect } from "react";

export default function ShortContact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [valid, setValid] = useState(true);

  const inputClass =
    "text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-600 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100";

  useEffect(() => {
    if (!!name && !!email && !!subject && !!message) {
      setValid(true);
    }
  }, [name, email, subject, message]);

  const sendRequest = (e) => {
    e.preventDefault();

    if (!!name && !!email && !!subject && !!message) {
      fetch(`${serverURL}/send`, {
        method: "POST",
        body: JSON.stringify({ name, email, subject, message }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else setValid(false);
  };

  return (
    <Section className="leading-8 text-sm md:text-lg md:leading-10" id="about">
      <SectionTitle title="Contact" />

      <p>
        Want to get in touch? Reach me at{" "}
        <a
          className="text-indigo-600 hover:text-indigo-800 dark:text-rose-400"
          href={`mailto:${contactMail}`}
        >
          {contactMail}
        </a>
        &nbsp; or send a message through the contact form below.
      </p>
      <form
        onSubmit={sendRequest}
        className="w-full flex flex-col justify-center my-12 sm:my-0 lg:px-28"
      >
        <div className="md:flex items-center mt-12">
          <div className="md:w-[49%] flex flex-col">
            <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
              What should I call you
            </label>
            <input
              tabIndex="0"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="md:w-[49%] flex flex-col md:ml-6 md:mt-0 mt-8">
            <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
              How can I reach you back
            </label>
            <input
              tabIndex="0"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
        <div className="w-full flex flex-col mt-8">
          <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
            TL;DR What you wanna say
          </label>
          <input
            tabIndex="0"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="w-full flex flex-col mt-8">
          <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
            Please elaborate
          </label>
          <textarea
            tabIndex="0"
            role="textbox"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
          ></textarea>
        </div>
        <div className="flex items-center justify-center w-full">
          <button className="mt-9 text-sm font-semibold leading-none text-white py-3 px-8 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none bg-indigo-600 hover:bg-indigo-800 dark:bg-rose-500 dark:hover:bg-rose-600 dark:focus:ring-rose-600">
            SUBMIT
          </button>
        </div>
        {!valid ? (
          <div
            id="formError"
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6"
            role="alert"
          >
            <strong className="font-bold">Invalid Data! </strong>
            <span className="block sm:inline">
              Fill up all the fields to send message
            </span>
          </div>
        ) : (
          <></>
        )}
      </form>
    </Section>
  );
}
