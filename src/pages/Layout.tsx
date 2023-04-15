// Libs
import { Manrope } from "next/font/google";
import Link from "next/link";

const manrope = Manrope({ subsets: ["latin"] });

export default function Layout(props: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className={manrope.className}>
      <Link href="/">
        <p className="mt-1 ml-1">
          ✨ <span className="bg-teal-300 text-gray-900 px-1 pb-0.5">home</span>
        </p>
      </Link>

      {props.children}
    </div>
  );
}
