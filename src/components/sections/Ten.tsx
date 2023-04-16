// Local
import { Answers } from "../Answers";
import { Code } from "../Code";

export default function Ten(): JSX.Element {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Answers text="10 leads into 9" />
        <p>
          dynamic routes allow you to create routes that include parameters
          (/placeholders), which can be used to match urls containing arbitrary
          path segments.
        </p>
        <p>
          using this app as an example,{" "}
          <Code text="pages/characters/[slug].tsx" /> will match everything from{" "}
          <Code text="localhost:{port}/characters/fox-moose" /> to{" "}
          <Code text="localhost:{port}/characters/12" />. the route just has to
          begin with <Code text="/characters" /> for matching to occur.{" "}
          <span className="text-lg">
            (to be clear, it will not match{" "}
            <span className="font-black">just</span> <Code text="/characters" />
            )
          </span>
        </p>
      </div>
      <Answers text="(question 10)" />
    </>
  );
}
