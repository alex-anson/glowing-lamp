// Libs
import Image from "next/image";

export function getNextJsLogo(): JSX.Element {
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

export function getThirteenLogo(): JSX.Element {
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

export function getAppTsxCode(): string {
  return `function App({ Component, pageProps }: AppProps) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }`;
}

export function getRouterCode(): string {
  return `import { useRouter } from "next/router";
  
  export default function Page(
    // ...
    const router = useRouter();
    const { slug } = router.query;
    // ...
  `;
}

export function getDynamicCode(): string {
  return `import dynamic from "next/dynamic";
  
    const DynamicHeader = dynamic(() => import('../components/header'), {
      ssr: false,
    });`;
}

// Injecting styles this way because i'm notoriously lazy.
// (and I just learned styled components)
export function Code(p: { text: string; classes?: string }): JSX.Element {
  return (
    <code
      className={`font-mono bg-gray-800 px-2 py-0.5 text-teal-500 rounded border border-gray-700 ${p.classes}`}
    >
      {p.text}
    </code>
  );
}

export function CodeBlock(p: { text: string; classes?: string }): JSX.Element {
  return (
    <code className={`font-mono inline-block bg-gray-900 p-2 ${p.classes}`}>
      {p.text}
    </code>
  );
}

export function Answers(p: { text: string }): JSX.Element {
  return (
    <span className="text-teal-600 uppercase text-base font-semibold mt-4 inline-block self-center">
      {p.text}
    </span>
  );
}

export function Hyperlink(props: { href: string; text: string }): JSX.Element {
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
