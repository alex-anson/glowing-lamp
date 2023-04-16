// Libs
import Image from "next/image";

// Local
import FoxLink from "@/components/FoxLink";
import {
  Code,
  Hyperlink,
  Answers,
  CodeBlock,
  getAppTsxCode,
  getDynamicCode,
  getNextJsLogo,
  getRouterCode,
  getThirteenLogo,
} from "@/answers.helpers";

export default function answers(): JSX.Element {
  return (
    <div
      className={`flex flex-col place-items-center place-content-center min-h-full gap-12 text-xl px-6 my-8 leading-8 max-w-5xl mx-auto font-normal`}
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
        <Code text="`answers.tsx`" /> file within the <Code text="pages" />{" "}
        directory, and you&#39;re viewing it on{" "}
        <Code text="localhost:{port}/answers" />.
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
      </div>
      <Answers text="(complete question 4)" />
      <hr className="border-gray-500 h-1 w-full" />
      <div className="flex flex-col gap-6">
        <Answers text="SSG: static-site generation" />
        <p>
          pages that use SSG are pre-rendered during the build process &mdash;
          the server generates static html files, which are then served to the
          user directly from the web server. since the server doesn&#39;t have
          to generate these files when a user visits the site, pages load more
          quickly (read: improved performance).
        </p>
        <p>
          SSG is achieved by leveraging <Code text="getStaticProps" />.{" "}
          <Code text="getStaticProps" /> fetches data at build time, passing
          this data to the page component as props.
        </p>
        <p>
          <Code text="getStaticPaths" /> is used to generate dynamic routes for
          a page. allows me to specify a list of paths that should be
          pre-rendered at build time.
        </p>
        <p>
          using my repo as the example...
          <br />
          <Code text="pages/characters/[slug].tsx" /> -&gt; i use{" "}
          <Code text="getStaticPaths" /> to read the JSON file names from the
          filesystem. those file names (minus the .json extension) become part
          of the dynamic routes. i use <Code text="getStaticProps" /> to grab
          the slug, using that to read in the JSON file that corresponds to the
          given slug. then i pass the JSON content as props to the Page
          component.
        </p>
        <p>
          a page would be statically generated without using{" "}
          <Code text="getStaticPaths" /> or <Code text="getStaticProps" /> if
          the page doesn&#39;t require any data fetching or dynamic content.
        </p>
        <FoxLink
          href="/characters"
          text="wanna read some json in from the filesystem?"
        />

        <Answers text="SSR: server-side rendering" />
        <p>
          SSR allows dynamic content to be rendered on the server, then served
          to the user as a fully rendered html page. use SSR for pages that
          require data fetching that cannot be done at build time.
        </p>
        <p>
          SSR is achieved by leveraging <Code text="getServerSideProps" />.
          it&#39;s similar to <Code text="getStaticProps" />, but it runs on{" "}
          <span className="font-black">every request</span> instead of just at
          build time. <Code text="getServerSideProps" /> fetches the data from
          the API, then passes it to the Page component as props.
        </p>
        <p>
          SSR is a powerful tool, but it should only be used when necessary. it
          increases server load and may slow down page loading times.
        </p>
        <FoxLink href="/ss-rendered" text="wanna see some fake API data?" />
        <p>
          to ensure certain code is only executed client-side, use{" "}
          {getNextJsLogo()}&#39;s <Code text="dynamic" /> import and set ssr to
          false. example from {getNextJsLogo()}&#39;s{" "}
          <Hyperlink
            href="https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr"
            text="website"
          />{" "}
          -&gt;
        </p>
        <pre className="text-teal-400 leading-3 mx-auto">
          <CodeBlock text={getDynamicCode()} classes="text-xs md:text-base" />
        </pre>
      </div>
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
          there are <span className="font-black">many</span> options available
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
      <hr className="border-gray-500 h-1 w-full" />
      <div className="flex flex-col gap-6">
        <p>
          (continuing to use this repo as the example)
          <br />
          within <Code text="pages/characters/[slug].tsx" />, i access the value
          of <Code text="slug" /> (referred to as “IDs” in the question) by
          leveraging {getNextJsLogo()}&#39;s <Code text="useRouter" /> hook, as
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
