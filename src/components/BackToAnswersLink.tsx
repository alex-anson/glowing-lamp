import Link from "next/link";

export default function BackToAnswersLink(): JSX.Element {
  return (
    <Link href="/answers" className="ml-2 mt-10 inline-block">
      <div className="rounded-lg border border-transparent px-6 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 font-semibold max-w-fit">
        <h2 className="text-2xl">
          <span className="inline-block">&larr;</span> back to answers
        </h2>
      </div>
    </Link>
  );
}
