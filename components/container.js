export default function Container(props) {
  return <div className="container mx-auto max-w-[80%] p-6">{props.children}</div>;
}
