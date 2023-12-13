export default function SidepagebdyLayout(props) {
  return (
    <div className="h-full w-full overflow-auto rounded-xl">
      {props.children}
    </div>
  );
}
