export default function SectionHeader(props: {
  children?: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      className="w-fit rounded-md border-2 text-2xl border-accent-color px-4 py-2 bg-purple-900/19 text-white uppercase border-border/70"
      href={props.href}
    >
      {props.children}
    </a>
  );
}
