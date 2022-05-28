export default function Section(props) {
  return (
    <main
      className={
        "container h-screen mx-auto w-full py-8 flex items-center " +
        (props.className || "")
      }
    >
      <div className="w-full">{props.children}</div>
    </main>
  );
}
