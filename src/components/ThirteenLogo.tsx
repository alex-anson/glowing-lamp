import Image from "next/image";

export function ThirteenLogo(): JSX.Element {
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
