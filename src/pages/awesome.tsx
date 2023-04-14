// Libs
import Image from "next/image";

export default function awesome(): JSX.Element {
  return (
    <div className="flex flex-col place-items-center place-content-center min-h-full gap-6 text-xl mx-6 my-8 text-teal-600">
      <p className="text-center">
        <span className="bg-teal-300 text-gray-900 px-1 pb-0.5">note:</span>{" "}
        this example repo does not use the <Code text="app" /> directory BECAUSE
        it is{" "}
        <a
          className="border-b-2 border-current hover:text-teal-400"
          href="https://beta.nextjs.org/docs/upgrade-guide#migrating-from-pages-to-app"
        >
          not suitable for production
        </a>
        . <br />
        (therefore, the questions will be answered from that viewpoint.)
      </p>
      <p>
        <Code text="npx create-next-app@latest --tailwind app-name" /> will
        create a new directory called <Code text="app-name" />, inside of which
        will be a new {getNextJsLogo()} project with tailwind installed.{" "}
        <Code text="app-name" /> will be created in the directory you run the
        command from. <Answers text="(questions 1 & 2)" />
      </p>
      <p>
        routing in {getNextJsLogo()} is done based on the file system - each
        file in the <Code text="pages" /> directory represents a route. this is
        done automagically... i.e., i made this <Code text="`awesome.tsx`" />{" "}
        file within the <Code text="pages" /> directory, and you&#39;re viewing
        it on <Code text="localhost:{port}/awesome" />.{" "}
        <Answers text="(question 3 & partial 4)" />
      </p>
      <p>
        the <Code text="app" /> directory replaces the <Code text="pages" />{" "}
        directory. in the <Code text="app" /> directory, your nested directories
        define your routes, and the files inside those folders are used to shape
        the UI. the <Code text="app" /> directory also adds extended
        functionality as compared with the <Code text="pages" /> directory.
        TODO: &mdash; it comes with a built-in setup for layouts, templates
        nested routing*,
        <Answers text="(question 4 finish)" />
      </p>
      <p>
        * (from the perspective of {getNextJsLogo()} without the experimental{" "}
        <Code text="app" /> directory) nested routing = a file that&#39;s nested
        in another directory within the <Code text="pages" /> directory will be
        routed as one would expect &mdash; i.e.,{" "}
        <Code text="pages/pets/nina.tsx" /> will be displayed at{" "}
        <Code text="{hostname}/pets/nina" />.
      </p>
      {/* TODO: #5 goes here. */}
      <p>
        the <Code text="<Image/>" /> component displays your images. it is an
        extension of the <Code text="img" /> html tag, it is accessible, and it
        does lazy loading automatically (as of {getNextJsLogo()}
        {getThirteenLogo()}). it automatically serves the given image with an
        appropriate size, which improves performance. it automatically adds{" "}
        <Code text="height" /> and <Code text="width" /> attributes, which
        mitigates CLS. <Answers text="(question 6)" />
      </p>
      <p>
        put code you want to run on every route into{" "}
        <Code text="`Layout.tsx`" /> (within the <Code text="pages" />{" "}
        directory). then add the <Code text="Layout" /> component to{" "}
        <Code text="pages/_app.tsx" />, like so:
      </p>
      <pre className="-mt-4 text-teal-200 leading-3">
        <Code text={getAppTsxCode()} classes="text-base" />
      </pre>
      <p className="-mt-4">
        💥 boom. renders on every route. <Answers text="(question 8)" />
      </p>
    </div>
  );
}

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
    // <ThirteenStyles>
    <Image
      className="inline-block -mt-1 mx-1"
      src="/thirteen.svg"
      alt="Thirteen Logo"
      width={20}
      height={15.5}
      priority
    />
    // </ThirteenStyles>
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
function Code(p: { text: string; classes?: string }): JSX.Element {
  return <code className={`font-mono ${p.classes}`}>{p.text}</code>;
}

function Answers(p: { text: string }): JSX.Element {
  return <span className="text-teal-800">{p.text}</span>;
}
