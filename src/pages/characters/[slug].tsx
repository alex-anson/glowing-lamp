// Libs
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

// Local
import { getFileList, readJsonFile } from "@/pages/characters/helpers";
import { Character } from "./model";

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <h1>{props.content.name}</h1>
    </>
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
