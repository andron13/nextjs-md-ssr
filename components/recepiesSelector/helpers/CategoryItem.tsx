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
        className={`${textColor} myRecepBtn flex flex-col items-center justify-center gap-4 whitespace-nowrap transition-all duration-200 hover:text-accent-400`}
        onClick={() => setActiveCat(catKey)}
      >
        <Elem color={svgColor} />
        {title}
      </button>
    </li>
  );
}
