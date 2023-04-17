// Libs
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

// Local
import { Character } from "@/character.model";
import BackToAnswersLink from "@/components/BackToAnswersLink";

interface Props {
  paths: string[];
  contentList: Character[];
}

export const getStaticProps: GetStaticProps<Props> = () => {
  // Get the file names from the data directory (dataDir)
  const fileList = fs.readdirSync(path.resolve("dataDir"));
  // Create the file path portion of the url
  const paths = fileList.map(
    (file) => "characters/" + file.replace(".json", "")
  );

  // Store the json as a string (from each file, thus array)
  const encodedList = fileList.map((fileName) =>
    fs.readFileSync(path.resolve(`dataDir/${fileName}`), "utf-8")
  );

  // Turn the encoded json back into json
  const contentList = encodedList.map((json) =>
    JSON.parse(json)
  ) as Character[]; // Don't typecast like this at home, kids. 💋
  // I don't feel like putting in the effort to validate the structure 🤫

  return {
    // Pass the paths and json objects to the Page component
    props: { paths, contentList },
  };
};

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
): JSX.Element {
  return (
    <div className="mt-10 tracking-wide">
      <h1 className="text-6xl font-light text-center">
        Pick your favorite Mario Kart character 🏎️
      </h1>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-20 xl:mt-40">
        {props.contentList.map((character, i) => (
          <Link
            key={character.name}
            href={props.paths[i]}
            className="inline rounded-lg border border-transparent px-6 py-4 transition-colors text-teal-500 hover:text-teal-400 hover:border-neutral-700 hover:bg-neutral-800/30 uppercase font-semibold max-w-fit mx-auto"
          >
            {character.name}
          </Link>
        ))}
      </div>
      <BackToAnswersLink anchor="readJson" />
    </div>
  );
}
