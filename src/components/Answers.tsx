export function Answers(p: { text: string }): JSX.Element {
  return (
    <span className="text-teal-600 uppercase text-base font-semibold mt-4 inline-block self-center">
      {p.text}
    </span>
  );
}
