// Libs
import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function awesome(): JSX.Element {
  return (
    <div
      className={`flex flex-col place-items-center place-content-center min-h-full gap-12 text-xl px-6 my-8 text-gray-400 leading-8 max-w-5xl mx-auto ${manrope.className} font-normal`}
    >
      <h1 className="text-6xl font-light m-0 tracking-wide">hello Next.js</h1>
      <p className="text-center">
        <span className="bg-teal-300 text-gray-900 px-1 pb-0.5">note:</span>{" "}
        this example repo does not use the <Code text="app" /> directory because
        <br />
        it is{" "}
        <Hyperlink
          href="https://beta.nextjs.org/docs/upgrade-guide#migrating-from-pages-to-app"
          text="not suitable for production"
        />
        , as of now.
        <a className="text-teal-500" href="#ifContentChanges">
          *** <span className="text-xs">click me</span>
        </a>
        <br />
        (therefore, the questions will be answered from that viewpoint.)
      </p>
      <hr className="border-gray-500 h-1 w-full" />
      <p>
        <Code text="npx create-next-app@latest --tailwind app-name" /> will
        create a new directory called <Code text="app-name" />, inside of which
        will be a new {getNextJsLogo()} project with tailwind installed and
        ready to go. <Code text="app-name" /> will be created in the directory
        you run the command from.
      </p>
      <Answers text="(questions 1 & 2)" />
      <hr className="border-gray-500 h-1 w-full" />
      <p>
        routing in {getNextJsLogo()} is done based on the file system &mdash;
        each file in the <Code text="pages" /> directory represents a route.
        this is done automagically... i.e., i made this{" "}
        <Code text="`awesome.tsx`" /> file within the <Code text="pages" />{" "}
        directory, and you&#39;re viewing it on{" "}
        <Code text="localhost:{port}/awesome" />.
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
          in {getNextJsLogo()}
          {getThirteenLogo()} for those who need to migrate from 12 to 13.){" "}
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
        <Answers text="(complete question 4)" />
      </div>
      <hr className="border-gray-500 h-1 w-full" />
      <p>{/* TODO: #5 goes here. */}</p>
      <Answers text="(question 5)" />
      <hr className="border-gray-500 h-1 w-full" />
      <p>
        the <Code text="<Image/>" /> component displays your images. it is an
        extension of the <Code text="img" /> html tag, it is accessible, and it
        automatically implements lazy loading (as of {getNextJsLogo()}
        {getThirteenLogo()}). it automatically serves the given image with an
        appropriate size, which improves performance. it forces the programmer
        to add <Code text="height" /> and <Code text="width" /> attributes,
        which lessens CLS.
      </p>
      <Answers text="(question 6)" />
      <hr className="border-gray-500 h-1 w-full" />
      <div className="flex flex-col gap-6">
        <p>
          there are <span className="font-bold">many</span> options available
          for{" "}
          <Hyperlink
            href="https://nextjs.org/docs/deployment"
            text="deployment"
          />
          . at a high level, a {getNextJsLogo()} app can use a managed service
          or can be self-hosted. examples of managed servers are vercel
          (recommended), AWS copilot, google cloud run, heroku, etc. examples of
          managed serverless: firebase, netlify, etc. alternatively, if the
          hosting provider supports node.js or docker, you can self-host the
          app.
        </p>
        <p>
          a {getNextJsLogo()} app can be deployed to any jamstack hosting
          service if all of the code can run client side &mdash; if your build
          process only yields static assets. you would follow{" "}
          <Hyperlink
            href="https://nextjs.org/docs/advanced-features/static-html-export"
            text="these docs"
          />
          .
        </p>
        <p>
          you would need a {getNextJsLogo()} compatible hosting service if
          you&#39;re using features that require a server. for example: image
          optimization, API routes, rewrites/redirects, headers, middleware,
          etc.
        </p>
      </div>
      <Answers text="(question 7)" />
      <hr className="border-gray-500 h-1 w-full" />
      <p>
        put code you want to run on every route into{" "}
        <Code text="`Layout.tsx`" /> (within the <Code text="pages" />{" "}
        directory). then add the <Code text="Layout" /> component to{" "}
        <Code text="pages/_app.tsx" />, like so:
      </p>
      <pre className="-mt-4 text-teal-400 leading-3">
        <CodeBlock text={getAppTsxCode()} classes="text-xs sm:text-base" />
      </pre>
      <p className="-mt-4 self-start">💥 boom. renders on every route.</p>
      <Answers text="(question 8)" />
      <hr className="border-gray-500 h-1 w-full" />
      <p>{/* TODO: #9 goes here. */}</p>
      <Answers text="(question 9)" />
      <hr className="border-gray-500 h-1 w-full" />
      <p>{/* TODO: #10 goes here. */}</p>
      <Answers text="(question 10)" />

      <hr className="border-gray-500 h-1 w-full mt-14" />
      <h2 className="text-5xl font-light m-0 tracking-wide">addendums</h2>
      <p id="ifContentChanges">
        <span className="text-teal-500">***</span> leaving this here in case the
        content from the linked source changes.
        <Image
          className="mx-auto mt-2"
          src="/not-in-prod.png"
          alt="Warning: The App Router is in beta and some conventions could change before stability is reached. We do not recommend using the app directory in production."
          width={500}
          height={238.5}
        />
      </p>
      <hr className="border-gray-500 h-1 w-16" />
      <p>
        <Hyperlink
          href="https://www.makeuseof.com/nextjs-13-working-of-app-directory/"
          text="good source"
        />{" "}
        for answering #4
      </p>
    </div>
  );
}

// SECTION: functions
function getNextJsLogo(): JSX.Element {
  return (
    <Image
      className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert inline-block -mt-1 mx-1"
      src="/next.svg"
      alt="Next.js Logo"
      width={72}
      height={14.8}
      priority
    />
  );
}

function getThirteenLogo(): JSX.Element {
  return (
    <span className="bg-gradient-to-b from-white via-teal-200 to-teal-400 rounded-md mr-1">
      <Image
        className="inline-block -mt-1 mx-1"
        src="/thirteen.svg"
        alt="Thirteen Logo"
        width={20}
        height={15.5}
        priority
      />
    </span>
  );
}

function getAppTsxCode(): string {
  return `function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}`;
}

// Injecting styles this way because i'm notoriously lazy.
// (and I just learned styled components)
function Code(p: { text: string; classes?: string }): JSX.Element {
  return (
    <code
      className={`font-mono bg-gray-800 px-2 py-0.5 text-teal-500 rounded border border-gray-700 ${p.classes}`}
    >
      {p.text}
    </code>
  );
}

function CodeBlock(p: { text: string; classes?: string }): JSX.Element {
  return (
    <code className={`font-mono inline-block bg-gray-900 p-2 ${p.classes}`}>
      {p.text}
    </code>
  );
}

function Answers(p: { text: string }): JSX.Element {
  return (
    <span className="text-teal-600 uppercase text-base font-semibold mt-4 inline-block self-center">
      {p.text}
    </span>
  );
}

function Hyperlink(props: { href: string; text: string }): JSX.Element {
  return (
    <a
      className="border-b-2 border-current hover:text-teal-600 transition-colors"
      href={props.href}
      target="_blank"
    >
      {props.text}
    </a>
  );
}
