// Local
import { Code } from "@/components/Code";
import { Hyperlink } from "@/components/Hyperlink";
import OneAndTwo from "@/components/sections/OneAndTwo";
import ThreeAndFour from "@/components/sections/ThreeAndFour";
import Five from "@/components/sections/Five";
import Six from "@/components/sections/Six";
import Seven from "@/components/sections/Seven";
import Eight from "@/components/sections/Eight";
import Ten from "@/components/sections/Ten";
import Nine from "@/components/sections/Nine";
import Addendums from "@/components/sections/Addendums";
import styles from "@/styles/hellonextjs.module.css";

export default function answers(): JSX.Element {
  return (
    <div className="flex flex-col place-items-center place-content-center min-h-full gap-12 text-xl px-6 my-8 leading-8 max-w-5xl mx-auto font-normal">
      <div
        className={`rounded-lg px-6 py-4 text-teal-4 overflow-hidden flex justify-center items-center relative ${styles.hellonextjs}`}
      >
        <h1 className="text-6xl font-light m-0 tracking-wide text-center">
          hello Next.js
        </h1>
      </div>
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
      <OneAndTwo />
      <hr className="border-gray-500 h-1 w-full" />
      <ThreeAndFour />
      <hr className="border-gray-500 h-1 w-full" />
      <Five />
      <hr className="border-gray-500 h-1 w-full" />
      <Six />
      <hr className="border-gray-500 h-1 w-full" />
      <Seven />
      <hr className="border-gray-500 h-1 w-full" />
      <Eight />
      <hr className="border-gray-500 h-1 w-full" />
      <Ten />
      <hr className="border-gray-500 h-1 w-full" />
      <Nine />
      <hr className="border-gray-500 h-1 w-full mt-14" />
      <Addendums />
    </div>
  );
}
