// Libs
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function Layout(props: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className={`${manrope.className} mt-1 ml-1`}>
      <p>
        ✨{" "}
        <span className="bg-teal-300 text-gray-900 px-1 pb-0.5">
          render on every route
        </span>
      </p>
      {props.children}
    </div>
  );
}
