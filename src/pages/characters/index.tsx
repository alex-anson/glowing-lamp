// Libs
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

// Local
import { getFileList, readJsonFile } from "@/pages/characters/helpers";
import { Character } from "@/pages/characters/model";

interface Props {
  paths: string[];
  contentList: Character[];
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const fileList = getFileList();
  const paths = fileList.map(
    (file) => "characters/" + file.replace(".json", "")
  );

  const encodedList = fileList.map((fileName) =>
    readJsonFile(`dataDir/${fileName}`)
  );

  const contentList = encodedList.map((json) =>
    JSON.parse(json)
  ) as Character[]; // Don't typecast like this at home, kids. 💋
  // I don't feel like putting in the effort to validate the structure 🤫

  return {
    props: { paths, contentList },
  };
};

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
): JSX.Element {
  return (
    <div className="mt-20">
      {props.contentList.map((character, i) => (
        <Link href={props.paths[i]} key={character.name}>
          {character.name}
        </Link>
      ))}
    </div>
  );
}
