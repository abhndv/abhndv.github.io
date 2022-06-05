import { projectData } from "../../data/projects";
import Section from "../section";
import SectionTitle from "../title";
import { FaGithub } from "react-icons/fa";

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
        {projectData.map(([title, description, img, tech, link]) => (
          <div
            key={title}
            className="sm:max-w-full bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-slate-900 dark:border-gray-700"
          >
            <img
              className="rounded-t-lg object-cover	h-48 w-full"
              src={img}
              alt=""
            />
            <div className="p-5">
              {/* <a href="#"> */}
              <div className="flex justify-between items-center mb-2">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
                {link ? (
                  <a
                    target={"_blank"}
                    href={link}
                    className="p-2 rounded bg-slate-100 dark:bg-slate-800"
                  >
                    <FaGithub />
                  </a>
                ) : (
                  ""
                )}
              </div>
              {/* </a> */}
              <p className="mb-3 text-base text-gray-500 dark:text-gray-400">
                {description}
              </p>
              <div className="flex gap-4 text-sm">
                {tech.map((nm) => (
                  <span key={nm} className="text-indigo-600 dark:text-rose-400">
                    {nm}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
