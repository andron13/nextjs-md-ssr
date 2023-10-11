type propsType = {
  Elem: ({ color }: { color: string }) => React.JSX.Element;
  title: string;
  catKey: string;
  activeCat: string;
  setActiveCat: React.Dispatch<React.SetStateAction<string>>;
};

export default function CategoryItem({ Elem, title, catKey, activeCat, setActiveCat }: propsType) {
  const isActive = activeCat === catKey ? true : false;
  const textColor = isActive ? 'text-accent-600' : 'text-primary-900';
  const svgColor = isActive ? 'fill-accent-600' : 'fill-primary-900';
  return (
    <li>
      <button
        className={`${textColor} hover:text-accent-400 transition-all duration-200 myRecepBtn flex flex-col justify-center items-center whitespace-nowrap gap-4`}
        onClick={() => setActiveCat(catKey)}
      >
        <Elem color={svgColor} />
        {title}
      </button>
    </li>
  );
}
