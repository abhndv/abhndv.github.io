import { projectData } from "../../data/projects";
import Section from "../section";
import SectionTitle from "../title";

export default function ShortProjects(props) {
  return (
    <Section
      className="leading-8 text-sm md:text-lg md:leading-10"
      id="projects"
    >
      <SectionTitle title="Projects" />
      <p>You can find some of my completed &amp; ongoing projects here.</p>
      <br />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projectData.map(([title, description, img, tech]) => (
          <div
            key={title}
            className="sm:max-w-full bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-slate-900 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg object-cover	h-48 w-full"
                src={img}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
              </a>
              <p className="mb-3 text-base text-gray-500 dark:text-gray-400">
                {description}
              </p>
              <div className="flex gap-4 text-sm">
                {tech.map((nm) => (
                  <span key={nm} className="text-indigo-600 dark:text-rose-400">{nm}</span>
                ))}
              </div>
              {/* <a
                href="#"
                className="inline-flex items-center sm:px-3 sm:py-2 py-3 px-4 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-rose-400 dark:hover:bg-rose-500 dark:focus:ring-rose-800"
              >
                Read more
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
