import Section from "../section";
import SectionTitle from "../title";

export default function ShortAbout(props) {
  return (
    <Section className="leading-8 text-sm md:text-lg md:leading-10" id="about">
      <SectionTitle title="About me" />
      <p className="">
        Holla! I&apos;m Abhinandu V Nair, a Computer Science Engineering
        graduate based on 🌍 &nbsp;
        <a
          href="https://goo.gl/maps/NrARwXrGsaCPKrYH7"
          className="decoration-dotted underline "
          target={"_blank"}
          rel={"noreferrer"}
        >
          Kochi, Kerala
        </a>
        . Currently working as&nbsp;
        <b>Senior Software Engineer</b> at 🏢 &nbsp;
        <a
          href="https://www.msystechnologies.com/"
          className="decoration-dotted underline "
          target={"_blank"}
          rel={"noreferrer"}
        >
          MSys Technologies
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
      <br />
      <p>
        Technical talks aside, I ❤️ ⚽ and am a HUGE Real Madrid fan. I often
        binges shows and movies. My fav 🎬 are Suits, Magicians and above all
        FRIENDS!
      </p>
    </Section>
  );
}
