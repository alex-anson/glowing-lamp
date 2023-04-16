// Local
import { Answers } from "../Answers";
import { Hyperlink } from "../Hyperlink";
import { NextJsLogo } from "../NextJsLogo";

export default function Seven(): JSX.Element {
  return (
    <>
      <div className="flex flex-col gap-6">
        <p>
          there are <span className="font-black">many</span> options available
          for{" "}
          <Hyperlink
            href="https://nextjs.org/docs/deployment"
            text="deployment"
          />
          . at a high level, a {NextJsLogo()} app can use a managed service or
          can be self-hosted. examples of managed servers are vercel
          (recommended), AWS copilot, google cloud run, heroku, etc. examples of
          managed serverless: firebase, netlify, etc. alternatively, if the
          hosting provider supports node.js or docker, you can self-host the
          app.
        </p>
        <p>
          a {NextJsLogo()} app can be deployed to any jamstack hosting service
          if all of the code can run client side &mdash; if your build process
          only yields static assets. you would follow{" "}
          <Hyperlink
            href="https://nextjs.org/docs/advanced-features/static-html-export"
            text="these docs"
          />
          .
        </p>
        <p>
          you would need a {NextJsLogo()} compatible hosting service if
          you&#39;re using features that require a server. for example: image
          optimization, API routes, rewrites/redirects, headers, middleware,
          etc.
        </p>
      </div>
      <Answers text="(question 7)" />
    </>
  );
}
