import Section from "../section";

export default function ShortAbout(props) {
  return (
    <Section className="leading-8 text-sm md:text-md">
      <a
        id="about"
        className="text-lg font-bold text-indigo-600 dark:text-rose-400"
      >
        About me
      </a>
      <p className="">
        Holla! I&apos;m Abhinandu V Nair, a Computer Science Engineering
        graduate based on&nbsp;
        <a
          href="https://goo.gl/maps/NrARwXrGsaCPKrYH7"
          className="decoration-dotted underline text-blue-700 dark:text-sky-400"
          target={"_blank"}
          rel={"noreferrer"}
        >
          Kochi, Kerala
        </a>
        . Currently working on&nbsp;
        <b>User Experience</b> at&nbsp;
        <a
          href="https://www.techneurons.com/"
          className="decoration-dotted underline text-blue-700 dark:text-sky-400"
          target={"_blank"}
          rel={"noreferrer"}
        >
          TechNeurons
        </a>
        .
      </p>
      <br />
      <p>
        Started as an Android Dev when Java & Android Studio was dictating the
        app developement. Soon after graduation, started working as a Front End
        Developer. After fiddling with a couple websites went back to the love
        of App Development and crossed paths with Flutter for the first time.
        After conquering a not so popular flutter jumped to the Reactive way of
        front end developement. During that time explored and became fond of the
        MERN stack and express has been with me ever since. Then came the giant
        .NET but managed to make a deal and went seperate ways after a short
        time(We occasionally meet up though). Somewhere in the middle fell in
        love with Tailwind. For the past few months the focus was on making the
        products more useful and easier for the end users.
      </p>
    </Section>
  );
}
