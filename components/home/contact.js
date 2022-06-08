import Section from "../section";
import SectionTitle from "../title";
import { contactMail, serverURL } from "../../data/social-media";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ShortContact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const inputClass =
    "text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-600 mt-4 bg-gray-100 border rounded border-gray-200  dark:border-slate-700 dark:bg-slate-800 dark:text-white placeholder-gray-100";

  useEffect(() => {
    if (!!name && !!email && !!subject && !!message) {
      toast.dismiss();
    }
  }, [name, email, subject, message]);

  const sendRequest = (e) => {
    e.preventDefault();

    if (!!name && !!email && !!subject && !!message) {
      const loadToast = toast.loading("Sending...");
      fetch(`${serverURL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      })
        .then((response) => response.json())
        .then((data) => {
          toast.dismiss(loadToast);
          toast.success("Message sent..");
          clearForm();
        })
        .catch((error) => {
          toast.dismiss(loadToast);
          toast.error("Error sending message!!");
          console.error("Error:", error);
        });
    } else {
      toast.error("Fill up all the fields..");
    }
  };
  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
  };
  return (
    <Section
      className="leading-8 text-sm md:text-lg md:leading-10"
      id="contact"
    >
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
            className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border-gray-200 dark:border-slate-700 dark:bg-slate-800 border rounded  dark:text-white placeholder-gray-100 resize-none"
          ></textarea>
        </div>
        <div className="flex items-center justify-center w-full">
          <button className="mt-9 text-sm font-semibold leading-none text-white py-3 px-8 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none bg-indigo-600 hover:bg-indigo-800 dark:bg-rose-500 dark:hover:bg-rose-600 dark:focus:ring-rose-600">
            SUBMIT
          </button>
        </div>
      </form>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </Section>
  );
}
