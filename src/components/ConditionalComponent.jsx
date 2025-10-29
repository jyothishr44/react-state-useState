import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent({ display }) {
  return display ? <Code /> : <Welcome />;
}
