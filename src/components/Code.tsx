export function Code(p: { text: string; classes?: string }): JSX.Element {
  return (
    <code
      className={`font-mono bg-gray-800 px-2 py-0.5 text-teal-500 rounded border border-gray-700 ${p.classes}`}
    >
      {p.text}
    </code>
  );
}
