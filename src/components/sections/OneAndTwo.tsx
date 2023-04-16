// Local
import { Answers } from "../Answers";
import { Code } from "../Code";
import { NextJsLogo } from "../NextJsLogo";

export default function OneAndTwo(): JSX.Element {
  return (
    <>
      <p>
        <Code text="npx create-next-app@latest --tailwind app-name" /> will
        create a new directory called <Code text="app-name" />, inside of which
        will be a new {NextJsLogo()} project with tailwind installed and ready
        to go. <Code text="app-name" /> will be created in the directory you run
        the command from.
      </p>
      <Answers text="(questions 1 & 2)" />
    </>
  );
}
