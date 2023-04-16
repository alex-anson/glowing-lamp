// Local
import { Answers } from "../Answers";
import { Code } from "../Code";
import { Hyperlink } from "../Hyperlink";
import { NextJsLogo } from "../NextJsLogo";
import { ThirteenLogo } from "../ThirteenLogo";

export default function ThreeAndFour(): JSX.Element {
  return (
    <>
      <p>
        routing in {NextJsLogo()} is done based on the file system &mdash; each
        file in the <Code text="pages" /> directory represents a route. this is
        done automagically... i.e., i made this <Code text="`answers.tsx`" />{" "}
        file within the <Code text="pages" /> directory, and you&#39;re viewing
        it on <Code text="localhost:{port}/answers" />.
      </p>
      {/* this <p> tag exists solely to override/improve spacing, since there 
      isn't an <hr /> between the above paragraph and below div */}
      <p className="-mt-4 mb-10">
        <Answers text="(question 3 & partial 4)" />
      </p>
      <div className="flex flex-col gap-6">
        <p>
          the <Code text="app" /> directory replaces the <Code text="pages" />{" "}
          directory. (however, the <Code text="pages" /> directory still exists
          in {NextJsLogo()}
          {ThirteenLogo()} for those who need to migrate from 12 to 13.){" "}
        </p>
        <p>
          in the <Code text="app" /> directory, your nested directories define
          your routes, and the files inside those folders are used to shape the
          UI.{" "}
        </p>
        <p>
          {" "}
          the <Code text="app" /> directory adds extended functionality as
          compared with the <Code text="pages" /> directory. it comes with a
          built-in setup for layouts (answer for question 8 if i wasn&#39;t
          answering these based on the <Code text="pages" /> dir), UI for
          loading and 404 pages, templates nested routing
          <a href="#nestedRoute" className="text-teal-500 font-black">
            +
          </a>
          , server components
          <a href="#serverComp" className="text-teal-500 font-black">
            ++
          </a>
          , and muuch more.
        </p>
        <p>
          migrating from using <Code text="pages" /> to <Code text="app" /> “
          <Hyperlink
            href="https://beta.nextjs.org/docs/upgrade-guide#migrating-from-pages-to-app"
            text="means new concepts, mental models, and behavioral changes to learn"
          />
          ”
        </p>
        <div className="flex flex-col gap-6 bg-gray-800 text-lg mx-4 px-6 py-4 rounded-md">
          <p>
            <span id="nestedRoute" className="text-teal-500 font-black">
              +
            </span>{" "}
            (without the experimental <Code text="app" /> directory,) nested
            routing = a file that&#39;s nested in another directory within the{" "}
            <Code text="pages" /> directory will be routed as one would expect
            &mdash; i.e., <Code text="pages/pets/nina.tsx" /> will be displayed
            at <Code text="{hostname}/pets/nina" />.
          </p>
          <p>
            <span id="serverComp" className="text-teal-500 font-black">
              ++
            </span>{" "}
            server components = components that are rendered on the server. this
            reduces the amount of javascript that the browser needs to handle,
            which improves performance.
          </p>
        </div>
      </div>
      <Answers text="(complete question 4)" />
    </>
  );
}
