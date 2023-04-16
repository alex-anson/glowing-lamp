// Local
import { Answers } from "../Answers";
import { Code } from "../Code";
import { NextJsLogo } from "../NextJsLogo";
import { ThirteenLogo } from "../ThirteenLogo";

export default function Six(): JSX.Element {
  return (
    <>
      <p>
        the <Code text="<Image/>" /> component displays your images. it is an
        extension of the <Code text="img" /> html tag, it is accessible, and it
        automatically implements lazy loading (as of {NextJsLogo()}
        {ThirteenLogo()}). it automatically serves the given image with an
        appropriate size, which improves performance. it forces the programmer
        to add <Code text="height" /> and <Code text="width" /> attributes,
        which lessens CLS.
      </p>
      <Answers text="(question 6)" />
    </>
  );
}
