// Libs
import Image from "next/image";

// Local
import { Hyperlink } from "../Hyperlink";

export default function Addendums(): JSX.Element {
  return (
    <>
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
    </>
  );
}
