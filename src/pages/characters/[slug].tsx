// Libs
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Local
import { getFileList, readJsonFile } from "@/pages/characters/helpers";
import { Character } from "./model";

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="mt-4 sm:mt-0 mb-10">
      <h1 className="text-6xl font-light text-center tracking-wide">
        {props.content.name}
      </h1>
      <div className="w-48 h-auto mx-auto my-10 sm:ml-12">
        <Image
          className="relative"
          src={`/characters/${slug}.webp`}
          alt={props.content.name}
          priority
          // again... don't typecast like this at home.
          width={getImgWidth(slug as string)}
          height={getImgHeight(slug as string)}
        />
      </div>
      <div className="grid place-content-center gap-10 mx-4">
        {props.content.relationToMario && (
          <Article>
            <P1>Relation to Mario</P1>
            <p>{props.content.relationToMario}</p>
          </Article>
        )}
        <Article>
          <P1>First time we saw {props.content.name}</P1>
          <p>
            {props.content.firstGameAppearedIn},{" "}
            {props.content.firstYearAppearedIn}
          </p>
        </Article>
        <Article>
          <P1>{props.content.name} is...</P1>
          <p>
            {props.content.isProtagonist ? " a protagonist" : " an antagonist"}.
          </p>
        </Article>
        <Article>
          <P1>Species</P1>
          <p className="capitalize">{props.content.species}</p>
        </Article>
        {props.content.catchphrase && (
          <Article>
            <P1>Catchphrase</P1>
            <p>“{props.content.catchphrase}”</p>
          </Article>
        )}
      </div>

      <div className="flex flex-col items-center justify-between sm:flex-row mt-20 ml-2 gap-8">
        <Link href="/characters" className="inline-block">
          <div className="inline-block rounded-lg border border-transparent px-6 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 font-semibold">
            <h1 className="text-2xl">
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &lt;-
              </span>{" "}
              pick again
            </h1>
          </div>
        </Link>
        <cite>
          <a
            className="hover:text-teal-600 transition-colors sm:mr-4"
            href="https://www.mariowiki.com"
            target="_blank"
          >
            data source
          </a>
        </cite>
      </div>
    </div>
  );
}

type StaticProps = {
  content: Character;
};
type UrlParams = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<UrlParams> = () => {
  const fileList = getFileList().map((file) => file.replace(".json", ""));
  const paths = fileList.map((slug) => ({ params: { slug } }));

  // TODO: what's fallback??
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<StaticProps, UrlParams> = (ctx) => {
  const fileName = ctx.params?.slug;
  if (!fileName) throw new Error("eeek time to panic 😜");

  const encoded = readJsonFile(`dataDir/${fileName}.json`);
  const content = JSON.parse(encoded) as Character; // Don't typecast like this at home, kids. 💋

  return {
    props: { content },
  };
};

// because i'm lazy.
function Article(props: { children: React.ReactNode }): JSX.Element {
  return (
    <article className="flex flex-col sm:flex-row sm:items-baseline">
      {props.children}
    </article>
  );
}

// because i'm lazy.
function P1(props: { children: React.ReactNode }): JSX.Element {
  return <p className="text-2xl sm:mr-8 text-teal-600">{props.children}</p>;
}

// helpers for sizing the images accurately
const sizes = [
  { mario: { width: 881, height: 907 } },
  { bowser: { width: 960, height: 960 } },
  { "donkey-kong": { width: 299, height: 339 } },
  { luigi: { width: 1200, height: 1142 } },
  { "princess-peach": { width: 376, height: 469 } },
  { toad: { width: 496, height: 380 } },
  { wario: { width: 839, height: 952 } },
  { yoshi: { width: 343, height: 400 } },
] as const;

function getImgWidth(slug: string): number {
  const x = sizes.flatMap((obj) => {
    return Object.entries(obj)
      .filter(([key]) => key === slug)
      .flat();
  });
  return x[1]["width"];
}

function getImgHeight(slug: string): number {
  const x = sizes.flatMap((obj) => {
    return Object.entries(obj)
      .filter(([key]) => key === slug)
      .flat();
  });
  return x[1]["height"];
}
