// Local
import { Answers } from "../Answers";
import { Code } from "../Code";
import { CodeBlock } from "../CodeBlock";
import { Hyperlink } from "../Hyperlink";
import { NextJsLogo } from "../NextJsLogo";
import WannaSeeLink from "../WannaSeeLink";

export default function Five(): JSX.Element {
  return (
    <>
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
        <WannaSeeLink href="/characters" id="readJson">
          <span>wanna read some json in</span>
          <br />
          <span> from the filesystem?</span>
        </WannaSeeLink>

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
        <WannaSeeLink href="/ss-rendered" id="apiData">
          <span>wanna see some</span>
          <br />
          <span> fake API data?</span>
        </WannaSeeLink>
        <p>
          to ensure certain code is only executed client-side, use{" "}
          {NextJsLogo()}&#39;s <Code text="dynamic" /> import and set ssr to
          false. example from {NextJsLogo()}&#39;s{" "}
          <Hyperlink
            href="https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr"
            text="website"
          />{" "}
          -&gt;
        </p>
        <pre className="text-teal-400 leading-3 mx-auto">
          <CodeBlock text={getDynamicCode()} classes="text-xs sm:text-base" />
        </pre>
      </div>
      <Answers text="(question 5)" />
    </>
  );
}

function getDynamicCode(): string {
  return `import dynamic from "next/dynamic";
  
const DynamicHeader = dynamic(
  () => import('../components/header'),
  { ssr: false }
);`;
}
