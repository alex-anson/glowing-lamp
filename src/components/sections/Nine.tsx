// Local
import { Answers } from "../Answers";
import { Code } from "../Code";
import { CodeBlock } from "../CodeBlock";
import { NextJsLogo } from "../NextJsLogo";

export default function Nine(): JSX.Element {
  return (
    <>
      <div className="flex flex-col gap-6">
        <p>
          (continuing to use this repo as the example)
          <br />
          within <Code text="pages/characters/[slug].tsx" />, i access the value
          of <Code text="slug" /> (referred to as “IDs” in the question) by
          leveraging {NextJsLogo()}&#39;s <Code text="useRouter" /> hook, as
          follows:
        </p>
        <pre className="text-teal-400 leading-3 mx-auto">
          <CodeBlock text={getRouterCode()} classes="text-xs sm:text-base" />
        </pre>
        <p>
          when i visit <Code text="{hostname}/characters/toad" /> -&gt; i have
          access to the query object <Code text='{ "slug": "toad" }' />. i use
          this to display the character image.
        </p>
        <p>
          <span className="font-black">
            getting query parameters from the url
          </span>{" "}
          <span className="text-lg">
            (which i&#39;m not leveraging in this project)
          </span>{" "}
          -&gt;
          <br />
          <Code text="{hostname}/characters/toad?my=fave&mario=kart" /> yields
          query object -&gt;{" "}
          <Code text='{ "slug": "toad", "my": "fave", "mario": "kart" }' />.
        </p>
      </div>
      <Answers text="(question 9)" />
    </>
  );
}

function getRouterCode(): string {
  return `import { useRouter } from "next/router";
    
export default function Page(
  // ...
  const router = useRouter();
  const { slug } = router.query;
  // ...
`;
}
