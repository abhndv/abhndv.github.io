import Section from "../section";
import SectionTitle from "../title";
import { email } from "../../data/social-media";

export default function ShortContact(props) {
  const inputClass =
    "text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100";

  return (
    <Section className="leading-8 text-sm md:text-lg md:leading-10" id="about">
      <SectionTitle title="Contact" />

      <p>
        Want to get in touch? Reach me at{" "}
        <a
          className="text-indigo-600 dark:text-rose-400"
          href={`mailto:${email}`}
        >
          {email}
        </a>
        &nbsp; or send a message through the contact form below.
      </p>
      <div className="w-full flex flex-col justify-center my-12 sm:my-0 lg:px-28">
        <div className="md:flex items-center mt-12">
          <div className="md:w-[49%] flex flex-col">
            <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
              What should I call you
            </label>
            <input
              tabIndex="0"
              type="name"
              className={inputClass}
              placeholder="Please input name"
            />
          </div>
          <div className="md:w-[49%] flex flex-col md:ml-6 md:mt-0 mt-8">
            <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
              How can I reach you back
            </label>
            <input
              tabIndex="0"
              type="name"
              className={inputClass}
              placeholder="Please input email address"
            />
          </div>
        </div>
        <div className="w-full flex flex-col mt-8">
          <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
            TL;DR What you wanna say
          </label>
          <input
            tabIndex="0"
            role="input"
            type="name"
            className={inputClass}
            placeholder="Please input company name"
          />
        </div>
        <div className="w-full flex flex-col mt-8">
          <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
            Please elaborate
          </label>
          <textarea
            tabIndex="0"
            role="textbox"
            type="name"
            className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
          ></textarea>
        </div>
        <div className="flex items-center justify-center w-full">
          <button className="mt-9 text-sm font-semibold leading-none text-white py-3 px-8 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none bg-indigo-600 hover:bg-indigo-800 ">
            SUBMIT
          </button>
        </div>
      </div>
    </Section>
  );
}
