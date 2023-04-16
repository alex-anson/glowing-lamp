import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export default function FoxLink(props: Props): JSX.Element {
  return (
    <Link href={props.href}>
      <div className="rounded-lg border border-transparent px-6 py-4 transition-colors text-teal-500 hover:text-teal-400 hover:border-neutral-700 hover:bg-neutral-800/30 max-w-fit mx-auto">
        <h1 className="text-2xl font-semibold">{props.text}</h1>
      </div>
    </Link>
  );
}
