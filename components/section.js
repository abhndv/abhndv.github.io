export default function Section(props) {
  return (
    <main
      className={
        "container mx-auto w-full py-24 flex items-center " +
        (props.className || "")
      }
      id={props.id || ""}
    >
      <div className="w-full">{props.children}</div>
    </main>
  );
}
