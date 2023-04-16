// Local
import { Answers } from "../Answers";
import { Code } from "../Code";
import { CodeBlock } from "../CodeBlock";

export default function Eight(): JSX.Element {
  return (
    <>
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
    </>
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
