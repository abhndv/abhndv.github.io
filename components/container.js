import { mediaWidth } from "../data/common-classes";

export default function Container(props) {
  return (
    <div className={"container mx-auto " + mediaWidth}>
      {props.children}
    </div>
  );
}
