// Libs
import Link from "next/link";

// Local
import styles from "@/styles/wannasee.module.css";

interface Props {
  href: string;
  id: string;
  children: React.ReactNode;
}

export default function WannaSeeLink(props: Props): JSX.Element {
  return (
    <Link
      href={props.href}
      id={props.id}
      className="inline-block max-w-fit mx-auto"
    >
      <div
        className={`rounded-lg border border-transparent px-6 py-4 transition-colors text-neutral-200 hover:text-neutral-400 hover:border-neutral-700 hover:bg-neutral-800/30 overflow-hidden flex justify-center items-center relative ${styles.wannasee}`}
      >
        <h2 className="text-xl font-semibold text-center">{props.children}</h2>
      </div>
    </Link>
  );
}
