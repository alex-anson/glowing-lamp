interface Props {
  href: string;
  text: string;
}

export function Hyperlink(props: Props): JSX.Element {
  return (
    <a
      className="border-b-2 border-current hover:text-teal-600 transition-colors"
      href={props.href}
      target="_blank"
    >
      {props.text}
    </a>
  );
}
