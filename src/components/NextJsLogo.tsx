import Image from "next/image";

export function NextJsLogo(): JSX.Element {
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
