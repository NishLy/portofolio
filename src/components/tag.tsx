export default function Tag(props: { children?: React.ReactNode }) {
  return (
    <button className="w-fit rounded-4xl border-2 border-accent-color px-2 py-0.5 bg-purple-900/19 text-white uppercase border-border">
      {props.children}
    </button>
  );
}
