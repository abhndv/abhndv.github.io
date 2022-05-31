export default function SectionTitle(props) {
  const titleCircle = "block p-4 rounded-full relative my-6";
  const titleCircleSmall =
    "block w-12 h-12 rounded-lg absolute left-0 top-0 bg-slate-100 dark:bg-slate-800";
  return (
    <>
      <div className={titleCircle}>
        &nbsp;
        <span className={titleCircleSmall}></span>
        <a className="absolute text-lg font-bold text-indigo-600 dark:text-rose-400">
          {props.title || ""}
        </a>
      </div>
    </>
  );
}
