export function CodeBlock(p: { text: string; classes?: string }): JSX.Element {
  return (
    <code className={`font-mono inline-block bg-gray-900 p-2 ${p.classes}`}>
      {p.text}
    </code>
  );
}
